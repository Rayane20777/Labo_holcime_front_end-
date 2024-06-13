import { useState, useEffect } from "react";
import axios from "axios";
// import { makeData, Person } from './makeData';
import { Box,  Text ,Button} from "@chakra-ui/react";
import { format } from 'date-fns';
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
import DateCell from "../../DateCell";
import DataTable from "../../DataTable";
import Anchor from "./Anchor";
import { Heading } from '@chakra-ui/react'
import useDeleteRow from "../../DeleteRow"; 
import DeleteButton from '../../DeleteButton';
import AnalyseForm from "./Forms/AddForm";




const AnalyseTable = () => {
  const [data, setData] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [loading, setLoading] = useState(true);
  const { deleteRow, loading: deleteLoading, error: deleteError } = useDeleteRow('http://127.0.0.1:8000/api/analyse', setData);
  const [showForm, setShowForm] = useState(false);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/analyse');
        const filteredData = response.data.filter(item => item.matiere.nom === "J45");
        setData(filteredData);
        setLoading(false);
        console.log(filteredData)
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const updateData = async (rowIndex, columnId, value) => {
    let formattedValue = value;
    if (columnId === 'date_prelevement' || columnId === 'date_gachage') {
      formattedValue = format(new Date(value), 'yyyy-MM-dd');
    }
    const updatedRow = { ...data[rowIndex], [columnId]: formattedValue };
    const sendData = { ...updatedRow };

    try {
      const requestUrl = `http://127.0.0.1:8000/api/analyse/${updatedRow.id}`;
      const response = await axios.post(requestUrl, sendData);
      console.log('Update response:', response);

      setData((prevData) => {
        const newData = [...prevData];
        newData[rowIndex] = updatedRow;
        return newData;
      });
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };
  const addAnalyse = (newAnalyse) => {
    setData((prevData) => [newAnalyse, ...prevData]);
    setShowForm(false); 
  };
  const columns = [
    {
      accessorKey: "date_prelevement",
      header: "Date prelevement",
      cell: DateCell,
      filterVariant: 'range',
    },
    {
      accessorKey: "date_gachage",
      header: "Date gachage",
      cell: DateCell,
      filterVariant: 'range',
    },
    {
      accessorKey: "destination.nom",
      header: "Destination",
      size: 200,
      filterVariant: 'range',
    },
    {
      accessorKey: "point_echantillonage.nom",
      header: "Point echantillonage",
      size: 200,
      filterVariant: 'range',
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
      updateData: (rowIndex, columnId, value) => updateData(rowIndex, columnId, value),
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
    J45 - Analyse
    </Heading>
      <Anchor />
      <Button colorScheme="blue" mb={4} onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel" : "Add New Analyse"}
      </Button>
      {showForm && <AnalyseForm onAdd={addAnalyse} />}
      <DataTable
        table={table}
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
      />
          {deleteLoading && <Text>Deleting...</Text>}
          {deleteError && <Text>Error deleting data: {deleteError.message}</Text>}</Box>
  );
};

export default AnalyseTable;
