import { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import axios from "axios";

const AddDestination = ({ onAdd }) => {
  const [formData, setFormData] = useState({ nom: "", matiere_id: "" });
  const [matieres, setMatieres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const matieresResponse = await axios.get(
          "http://127.0.0.1:8000/api/matiere"
        );
        setMatieres(matieresResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };
    fetchOptions();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/destination",
        formData
      );
      onAdd(response.data);
    } catch (error) {
      console.error(
        "Error adding data:",
        error.response ? error.response.data : error.message
      );
    }
  };

  if (loading) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box as="form" onSubmit={handleSubmit} mb={4}>
      <FormControl mb={4}>
        <FormLabel>Nom</FormLabel>
        <Input name="nom" value={formData.nom} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Matiere</FormLabel>
        <Select
          name="matiere_id"
          value={formData.matiere_id}
          onChange={handleChange}
        >
          {matieres.map((matiere) => (
            <option key={matiere.id} value={matiere.id}>
              {matiere.nom}
            </option>
          ))}
        </Select>
      </FormControl>
      <Button type="submit" colorScheme="blue" mt={4}>
        Add Analyse
      </Button>
    </Box>
  );
};

export default AddDestination;
