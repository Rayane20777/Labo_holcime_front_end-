import { useState, useEffect } from "react";
import instance from "../../../api/api";
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

const ResultatAnalysePhysiqueTable = () => {
  const [data, setData] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    deleteRow,
    loading: deleteLoading,
    error: deleteError,
  } = useDeleteRow(
    "http://127.0.0.1:8000/api/resultat_analyse_physique",
    setData
  );

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance("get", "resultat_analyse_physique");
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
    // if (columnId === 'date_prelevement' || columnId === 'date_gachage') {
    //   formattedValue = format(new Date(value), 'yyyy-MM-dd');
    // }
    const updatedRow = { ...data[rowIndex], [columnId]: formattedValue };
    const sendData = { ...updatedRow };

    try {
      const response = await instance("post", `resultat_analyse_physique/${updatedRow.id}`, sendData);
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
      accessorKey: "1j",
      header: "1j",
      cell: EditableCell,
    },
    {
      accessorKey: "2j",
      header: "2j",
      cell: EditableCell,
    },
    {
      accessorKey: "7j",
      header: "7j",
      cell: EditableCell,
    },
    {
      accessorKey: "28j",
      header: "28j",
      cell: EditableCell,
    },
    {
      accessorKey: "90j",
      header: "90j",
      cell: EditableCell,
    },
    {
      accessorKey: "w1",
      header: "w1",
      cell: EditableCell,
    },
    {
      accessorKey: "w2",
      header: "w2",
      cell: EditableCell,
    },
    {
      accessorKey: "w3",
      header: "w3",
      cell: EditableCell,
    },
    {
      accessorKey: "w4",
      header: "w4",
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
        CPJ35 - Resultat Physique
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

export default ResultatAnalysePhysiqueTable;
