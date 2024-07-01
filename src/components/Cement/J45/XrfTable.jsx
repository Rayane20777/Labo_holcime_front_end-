import { useState, useEffect } from "react";
import instance from "../../../api/api";
// import { makeData, Person } from './makeData';
import { Box, Text } from "@chakra-ui/react";
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
import { Heading } from "@chakra-ui/react";
import useDeleteRow from "../../DeleteRow";
import DeleteButton from "../../DeleteButton";

const XrfTable = () => {
  const [data, setData] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    deleteRow,
    loading: deleteLoading,
    error: deleteError,
  } = useDeleteRow("http://127.0.0.1:8000/api/xrf", setData);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance("get", "xrf");
        const filteredData = response.data.filter(
          (item) => item.analyse.matiere.nom === "J45"
        );
        setData(filteredData);
        setLoading(false);
        console.log(filteredData);
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
      const response = await instance("post", `xrf/${updatedRow.id}`, sendData);

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
      accessorKey: "SiO2",
      header: "SiO2",
      cell: EditableCell,
    },
    {
      accessorKey: "Al2O3",
      header: "Al2O3",
      cell: EditableCell,
    },
    {
      accessorKey: "Fe2O3",
      header: "Fe2O3",
      cell: EditableCell,
    },
    {
      accessorKey: "CaO",
      header: "CaO",
      cell: EditableCell,
    },
    {
      accessorKey: "MgO",
      header: "MgO",
      cell: EditableCell,
    },
    {
      accessorKey: "SO3",
      header: "SO3",
      cell: EditableCell,
    },
    {
      accessorKey: "K2O",
      header: "K2O",
      cell: EditableCell,
    },
    {
      accessorKey: "Na2O",
      header: "Na2O",
      cell: EditableCell,
    },
    {
      accessorKey: "P2O5",
      header: "P2O5",
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
        style={{ marginLeft: 20, padding: 10 }}
        as="h2"
        size="2xl"
        noOfLines={1}
      >
        J45 - Analyse XRF
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

export default XrfTable;
