import { useState, useEffect } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Icon,
  Text,
  Heading,
} from "@chakra-ui/react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import instance from "../../api/api";
import { FilePdfOutlined } from "@ant-design/icons";
import useDeleteRow from "../DeleteRow";
import DeleteButton from "../DeleteButton";
import PDFUploadForm from "./PdfUploadForm"; // Import the form component
import EditableCell from "../EditableCell";
import Filters from "./Filters";

const PDFTable = () => {
  const [data, setData] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormVisible, setIsFormVisible] = useState(false); // State to manage form visibility
  const {
    deleteRow,
    loading: deleteLoading,
    error: deleteError,
  } = useDeleteRow("http://127.0.0.1:8000/api/pdfs", setData);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance("get", "pdfs");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddPDF = (newPDF) => {
    setData((prevData) => [...prevData, newPDF]);
  };

  let columns = [
    {
      accessorKey: "nom",
      header: "Nom",
      cell: EditableCell,
    },
    {
      accessorKey: "path",
      header: "Path",
      size: 100,
      enableColumnFilter: true,
      filterFn: "includesString",
      cell: ({ cell }) => (
        <a
          href={`http://127.0.0.1:8000/storage/${cell.getValue()}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon as={FilePdfOutlined} boxSize={6} />
        </a>
      ),
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
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Box>
      <Heading
        as="h2"
        size="2xl"
        noOfLines={1}
        style={{ marginLeft: 20, padding: 10 }}
      >
        PDFs
      </Heading>
      <Button
        onClick={() => setIsFormVisible(!isFormVisible)}
        style={{
          backgroundColor: isFormVisible ? "" : "#b3ba80",
          marginBottom: "10px",
        }}
        colorScheme="blue"
      >
        {isFormVisible ? "Close Form" : "Add PDF"}
      </Button>
      <Filters
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
      />
      {isFormVisible && <PDFUploadForm onAdd={handleAddPDF} />}
      <Box className="table" w={table.getTotalSize()}>
        {table.getHeaderGroups().map((headerGroup) => (
          <Box className="tr" key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Box className="th" w={header.getSize()} key={header.id}>
                {header.column.columnDef.header}
                <Box
                  onMouseDown={header.getResizeHandler()}
                  onTouchStart={header.getResizeHandler()}
                  className={`resizer ${
                    header.column.getIsResizing() ? "isResizing" : ""
                  }`}
                />
              </Box>
            ))}
          </Box>
        ))}
        {table.getRowModel().rows.map((row) => (
          <Box className="tr" key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Box className="td" w={cell.column.getSize()} key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
      <br />
      <Text mb={2}>
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </Text>
      <ButtonGroup size="sm" isAttached variant="outline">
        <Button
          style={{ color: "black", borderColor: "black" }}
          onClick={() => table.previousPage()}
          isDisabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </Button>
        <Button
          style={{ color: "black", borderColor: "black" }}
          onClick={() => table.nextPage()}
          isDisabled={!table.getCanNextPage()}
        >
          {">"}
        </Button>
      </ButtonGroup>
      {deleteLoading && <Text>Deleting...</Text>}
      {deleteError && <Text>Error deleting data: {deleteError.message}</Text>}
    </Box>
  );
};

export default PDFTable;
