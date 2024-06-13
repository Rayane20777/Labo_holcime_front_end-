import { useState, useEffect } from "react";
import axios from "axios";
// import { makeData, Person } from './makeData';
import { Box,  Text } from "@chakra-ui/react";
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
import EditableCell from "../../EditableCell";
import DataTable from "../../DataTable";
import Anchor from "./Anchor";
import { Heading } from '@chakra-ui/react'
import useDeleteRow from "../../DeleteRow"; 
import DeleteButton from '../../DeleteButton';




const AnalyseChimiqueTable = () => {
  const [data, setData] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [loading, setLoading] = useState(true);
  const { deleteRow, loading: deleteLoading, error: deleteError } = useDeleteRow('http://127.0.0.1:8000/api/analyse_chimique', setData);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/analyse_chimique');
        const filteredData = response.data.filter(item => item.analyse.matiere.nom === "J55");
        setData(filteredData);
        setLoading(false);
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
      const requestUrl = `http://127.0.0.1:8000/api/analyse_chimique/${updatedRow.id}`;
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
  
  const columns = [
    {
      accessorKey: "finesse_2_32",
      header: "2-32µm",
      cell: EditableCell,
    },
    {
      accessorKey: "finesse_40",
      header: ">45µm",
      cell: EditableCell,
    },
    {
      accessorKey: "finesse_80",
      header: ">80µm",
      cell: EditableCell,
    },
    {
      accessorKey: "SSB",
      header: "SSb",
      cell: EditableCell,
    },
    {
      accessorKey: "SSB",
      header: "SSb",
      cell: EditableCell,
    },
    {
      accessorKey: "insoluble",
      header: "Insoluble",
      cell: EditableCell,
    },
    {
      accessorKey: "CO2",
      header: "CO2",
      cell: EditableCell,
    },
    {
      accessorKey: "PF",
      header: "PF",
      cell: EditableCell,
    },
    {
      accessorKey: "Cl",
      header: "Cl",
      cell: EditableCell,
    },
    { 
      accessorKey: "H41",
      header: "H41",
      cell: EditableCell,
    },
    {
      accessorKey: "S2",
      header: "S2-",
      cell: EditableCell,
    },
    {
      accessorKey: "CaOl",
      header: "CaOl",
      cell: EditableCell,
    },
    {
      accessorKey: "analyse.destination.nom",
      header: "Destination",
      size: 150,
    },
    {
      accessorKey: "analyse.point_echantillonage.nom",
      header: "Point echantillonage",
      size: 150,
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
    J55 - Analyse Chimique
  </Heading>
      <Anchor />
      <DataTable
        table={table}
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
      />
          {deleteLoading && <Text>Deleting...</Text>}
          {deleteError && <Text>Error deleting data: {deleteError.message}</Text>}</Box>
  );
};

export default AnalyseChimiqueTable;
