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
import EditableCell from "../../EditableCell";
import DataTable from "../../DataTable";
import Anchor from "./Anchor";
import useDeleteRow from "../../DeleteRow";
import DeleteButton from "../../DeleteButton";

const XrdTable = () => {
  const [data, setData] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    deleteRow,
    loading: deleteLoading,
    error: deleteError,
  } = useDeleteRow("http://127.0.0.1:8000/api/xrd", setData);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/xrd");
        const filteredData = response.data.filter(
          (item) => item.analyse.matiere.nom === "PERFECTO"
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
      const requestUrl = `http://127.0.0.1:8000/api/xrd/${updatedRow.id}`;
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
      accessorKey: "GOF",
      header: "GOF",
      cell: EditableCell,
    },
    {
      accessorKey: "R_wp",
      header: "R_wp",
      cell: EditableCell,
    },
    {
      accessorKey: "R_exp",
      header: "R_exp",
      cell: EditableCell,
    },
    {
      accessorKey: "Displacement",
      header: "Displacement",
      cell: EditableCell,
    },
    {
      accessorKey: "Alite_M3",
      header: "Alite_M3",
      cell: EditableCell,
    },
    {
      accessorKey: "Alite_M1",
      header: "Alite_M1",
      cell: EditableCell,
    },
    {
      accessorKey: "Alite_Sum",
      header: "Alite_Sum",
      cell: EditableCell,
    },
    {
      accessorKey: "Fraction_M1",
      header: "Fraction_M1",
      cell: EditableCell,
    },
    {
      accessorKey: "Alite_CS",
      header: "Alite_CS",
      cell: EditableCell,
    },
    {
      accessorKey: "Alite_PO",
      header: "Alite_PO",
      cell: EditableCell,
    },
    {
      accessorKey: "Belite_beta",
      header: "Belite_beta",
      cell: EditableCell,
    },
    {
      accessorKey: "Belite_alpha",
      header: "Belite_alpha",
      cell: EditableCell,
    },
    {
      accessorKey: "Belite_alpha_H",
      header: "Belite_alpha_H",
      cell: EditableCell,
    },
    {
      accessorKey: "Belite_gamma",
      header: "Belite_gamma",
      cell: EditableCell,
    },
    {
      accessorKey: "Belite_Sum",
      header: "Belite_Sum",
      cell: EditableCell,
    },
    {
      accessorKey: "Alum_cubic",
      header: "Alum_cubic",
      cell: EditableCell,
    },
    {
      accessorKey: "Alum_ortho",
      header: "Alum_ortho",
      cell: EditableCell,
    },
    {
      accessorKey: "Alum_mono",
      header: "Alum_mono",
      cell: EditableCell,
    },
    {
      accessorKey: "Alum_Sum",
      header: "Alum_Sum",
      cell: EditableCell,
    },
    {
      accessorKey: "Ferrite",
      header: "Ferrite",
      cell: EditableCell,
    },
    {
      accessorKey: "Lime",
      header: "Lime",
      cell: EditableCell,
    },
    {
      accessorKey: "Portlandite",
      header: "Portlandite",
      cell: EditableCell,
    },
    {
      accessorKey: "fCaO_XRD",
      header: "fCaO_XRD",
      cell: EditableCell,
    },
    {
      accessorKey: "Periclase",
      header: "Periclase",
      cell: EditableCell,
    },
    {
      accessorKey: "Quartz",
      header: "Quartz",
      cell: EditableCell,
    },
    {
      accessorKey: "Arcanite",
      header: "Arcanite",
      cell: EditableCell,
    },
    {
      accessorKey: "Thenardite",
      header: "Thenardite",
      cell: EditableCell,
    },
    {
      accessorKey: "Langbeinite",
      header: "Langbeinite",
      cell: EditableCell,
    },
    {
      accessorKey: "Aphthitalite",
      header: "Aphthitalite",
      cell: EditableCell,
    },
    {
      accessorKey: "Gypsum",
      header: "Gypsum",
      cell: EditableCell,
    },
    {
      accessorKey: "Hemi_Hydrate",
      header: "Hemi_Hydrate",
      cell: EditableCell,
    },
    {
      accessorKey: "Anhydrite",
      header: "Anhydrite",
      cell: EditableCell,
    },
    {
      accessorKey: "Calcite",
      header: "Calcite",
      cell: EditableCell,
    },
    {
      accessorKey: "Dolomite",
      header: "Dolomite",
      cell: EditableCell,
    },
    {
      accessorKey: "Mullite",
      header: "Mullite",
      cell: EditableCell,
    },
    {
      accessorKey: "Magnetite",
      header: "Magnetite",
      cell: EditableCell,
    },
    {
      accessorKey: "Hematite",
      header: "Hematite",
      cell: EditableCell,
    },
    {
      accessorKey: "Flyash_amorph",
      header: "Flyash_amorph",
      cell: EditableCell,
    },
    {
      accessorKey: "FA_Sum",
      header: "FA_Sum",
      cell: EditableCell,
    },
    {
      accessorKey: "Syngenite",
      header: "Syngenite",
      cell: EditableCell,
    },
    {
      accessorKey: "Albite",
      header: "Albite",
      cell: EditableCell,
    },
    {
      accessorKey: "Anorthite",
      header: "Anorthite",
      cell: EditableCell,
    },
    {
      accessorKey: "Andesine",
      header: "Andesine",
      cell: EditableCell,
    },
    {
      accessorKey: "K_Feldspar",
      header: "K_Feldspar",
      cell: EditableCell,
    },
    {
      accessorKey: "Illite",
      header: "Illite",
      cell: EditableCell,
    },
    {
      accessorKey: "Feldspar_Sum",
      header: "Feldspar_Sum",
      cell: EditableCell,
    },
    {
      accessorKey: "SO3_XRD",
      header: "SO3_XRD",
      cell: EditableCell,
    },
    {
      accessorKey: "CO2_XRD",
      header: "CO2_XRD",
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
        PERFECTO - Analyse Xrd
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

export default XrdTable;
