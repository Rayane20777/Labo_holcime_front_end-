import { useState, useEffect } from "react";
import axios from "axios";
// import { makeData, Person } from './makeData';
import { Box, Text, Heading } from "@chakra-ui/react";
import {
  // flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
// import Filters from "./Filters";
// import SortIcon from "../icons/SortIcon";
// import DateCell from "../DateCell";
import EditableCell from "../../EditableCell";
import DataTable from "../../DataTable";
import Anchor from "./Anchor";
import useDeleteRow from "../../DeleteRow";
import DeleteButton from "../../DeleteButton";

const ProportionTable = () => {
  const [data, setData] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    deleteRow,
    loading: deleteLoading,
    error: deleteError,
  } = useDeleteRow("http://127.0.0.1:8000/api/proportion", setData);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/proportion"
        );
        const filteredData = response.data.filter(
          (item) => item.analyse.matiere.nom === "CPJ35"
        );
        setData(filteredData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const updateData = async (rowIndex, columnId, value) => {
    let formattedValue = value;
    const updatedRow = { ...data[rowIndex], [columnId]: formattedValue };
    const sendData = { ...updatedRow };

    try {
      const requestUrl = `http://127.0.0.1:8000/api/proportion/${updatedRow.id}`;
      const response = await axios.post(requestUrl, sendData);
      console.log("Update response:", response);

      setData((prevData) => {
        const newData = [...prevData];
        newData[rowIndex] = updatedRow;
        return newData;
      });
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const columns = [
    {
      accessorKey: "KK_G",
      header: "KK_G",
      cell: EditableCell,
    },
    {
      accessorKey: "CAL_G",
      header: "CAL_G",
      cell: EditableCell,
    },
    {
      accessorKey: "CV_G",
      header: "CV_G",
      cell: EditableCell,
    },
    {
      accessorKey: "LAIT_G",
      header: "LAIT_G",
      cell: EditableCell,
    },
    {
      accessorKey: "GYPSE",
      header: "GYPSE",
      cell: EditableCell,
    },
    {
      accessorKey: "KK_NG",
      header: "KK_NG",
      cell: EditableCell,
    },
    {
      accessorKey: "CAL_NG",
      header: "CAL_NG",
      cell: EditableCell,
    },
    {
      accessorKey: "CV_NG",
      header: "CV_NG",
      cell: EditableCell,
    },
    {
      accessorKey: "LAIT_NG",
      header: "LAIT_NG",
      cell: EditableCell,
    },
    {
      accessorKey: "∑_Gypse",
      header: "∑_Gypse",
      cell: EditableCell,
    },
    {
      accessorKey: "analyse.destination.nom",
      header: "Destination",
      size: 200,
    },
    {
      accessorKey: "analyse.point_echantillonage.nom",
      header: "Point echantillonage",
      size: 200,
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <DeleteButton onClick={() => deleteRow(row.index, data)} />
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    columnResizeMode: "onChange",
    meta: {
      updateData: (rowIndex, columnId, value) =>
        updateData(rowIndex, columnId, value),
    },
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Box>
      <Heading
      style={{marginLeft: 20,padding: 10}}
      as='h2' size='2xl' noOfLines={1}>
    CPJ35 - Proportion
  </Heading>
      <Anchor />
      <DataTable
        table={table}
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
      />
      {deleteLoading && <Text>Deleting...</Text>}
      {deleteError && <Text>Error deleting data: {deleteError.message}</Text>}
    </Box>
  );
};

export default ProportionTable;
