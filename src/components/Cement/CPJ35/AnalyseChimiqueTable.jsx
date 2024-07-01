import { useState, useEffect } from "react";
import instance from "../../../api/api"; 
import { Box, Text } from "@chakra-ui/react";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import EditableCell from "../../EditableCell";
import DataTable from "../../DataTable";
import Anchor from "./Anchor";
import { Heading } from "@chakra-ui/react";
import useDeleteRow from "../../DeleteRow";
import DeleteButton from "../../DeleteButton";

const AnalyseChimiqueTable = () => {
  const [data, setData] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    deleteRow,
    loading: deleteLoading,
    error: deleteError,
  } = useDeleteRow("http://127.0.0.1:8000/api/analyse_chimique", setData);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance("get", "analyse_chimique");
        console.log(response)
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
      const response = await instance("post", `analyse_chimique/${updatedRow.id}`, sendData);

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
      accessorKey: "id",
      header: "Id",
    },
    {
      accessorKey: "analyse.point_echantillonage.nom",
      header: "Point echantillonage",
      size: 150,
    },
    {
      accessorKey: "analyse.destination.nom",
      header: "Destination",
      size: 150,
    },
    {
      accessorKey: "analyse.date_gachage",
      header: "Date Gachage",
      size: 150,
    },
    {
      accessorKey: "analyse.date_prelevement",
      header: "Date Prelevement",
      size: 150,
    },
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
        CPJ35 - Analyse Chimique
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

export default AnalyseChimiqueTable;
