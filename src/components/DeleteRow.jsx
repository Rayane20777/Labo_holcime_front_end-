import { useState } from "react";
import axios from "axios";

const useDeleteRow = (endpoint, setData) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteRow = async (rowIndex, data) => {
    const rowToDelete = data[rowIndex];
    try {
      setLoading(true);
      const requestUrl = `${endpoint}/${rowToDelete.id}`;
      await axios.delete(requestUrl);
      setData((prevData) => prevData.filter((_, index) => index !== rowIndex));
      console.log(`Deleted row with id: ${rowToDelete.id}`);
    } catch (error) {
      console.error("Error deleting data:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { deleteRow, loading, error };
};

export default useDeleteRow;
