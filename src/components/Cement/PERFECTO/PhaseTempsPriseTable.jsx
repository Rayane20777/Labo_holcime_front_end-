import { useState, useEffect } from "react";
import instance from "../../../api/api";
// import { makeData, Person } from './makeData';
import { Box, Text, Heading } from "@chakra-ui/react";
import { format } from "date-fns";
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
import { hasRole } from "../../../utils/roleCheck";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";import useDeleteRow from "../../DeleteRow";
import DeleteButton from "../../DeleteButton";

const PhaseTempsPriseTable = () => {
  const [data, setData] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    deleteRow,
    loading: deleteLoading,
    error: deleteError,
  } = useDeleteRow("http://127.0.0.1:8000/api/phase_temps_prise", setData);
  const info = useContext(AuthContext);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance("get", "phase_temps_prise");

        const filteredData = response.data.filter(
          (item) => item.analyse.matiere.nom === "PERFECTO"
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
    if (columnId === "date_prelevement" || columnId === "date_gachage") {
      formattedValue = format(new Date(value), "yyyy-MM-dd");
    }
    const updatedRow = { ...data[rowIndex], [columnId]: formattedValue };
    const sendData = { ...updatedRow };

    try {
      const response = await instance("post", `phase_temps_prise/${updatedRow.id}`, sendData);

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

  let columns = [
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
      accessorKey: "mass_volumique",
      header: "Mass volumique",
      cell: EditableCell,
      size: 150,
    },
    {
      accessorKey: "debut_de_prise",
      header: "Debut de prise",
      cell: EditableCell,
      size: 150,
    },
    {
      accessorKey: "fin_de_prise",
      header: "Fin de prise",
      cell: EditableCell,
      size: 150,
    },
    {
      accessorKey: "expention",
      header: "Expention",
      cell: EditableCell,
      size: 150,
    },
    {
      accessorKey: "eau_gach",
      header: "Eau gachage",
      cell: EditableCell,
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

  if (!hasRole(info, "super_admin") ) {
    columns = columns.filter((col) => col.id !== "actions");
  }
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
        PERFECTO - Temps Prise
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

export default PhaseTempsPriseTable;
