import { useState, useEffect } from "react";
import { Box, Button, ButtonGroup, Icon, Text } from "@chakra-ui/react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import EditableCell from "../EditableCell";
import Filters from "./Filters";
import SortIcon from "../icons/SortIcon";
import AddPointEchantillonage from "./AddPointEchantillonage";
import instance from "../../api/api";


let columns = [
  {
    accessorKey: "nom",
    header: "Nom",
    size: 200,
    cell: EditableCell,
    enableColumnFilter: true,
    filterFn: "includesString",
  },
  {
    accessorKey: "matiere.nom",
    header: "Matiere",
    size: 200,
    enableColumnFilter: true,
    filterFn: "includesString",
  },
];

const MatiereTable = () => {
  const [data, setData] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const addPointEchantillonage = (newPointEchantillonage) => {
    setData((prevData) => [newPointEchantillonage, ...prevData]);
    setShowForm(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rolesResponse = await instance("get", "point_echantillonage");

        setData(rolesResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const updateData = async (rowIndex, columnId, value) => {
    const updatedRow = { ...data[rowIndex], [columnId]: value };
    const sendData = { nom: updatedRow.nom, matiere_id: updatedRow.matiere_id };
    try {
      const response = await instance("post", `point_echnantillonage/${updatedRow.id}`, sendData);

      console.log("Update response:", response);

      setData((prevData) => {
        prevData[rowIndex] = updatedRow;
        return [...prevData];
      });
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const table = useReactTable({
    data,
    columns,
    state: { columnFilters },
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
      <Filters
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
      />
      <Button colorScheme="blue" mb={4} onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel" : "Add New Point Echantillonage"}
      </Button>
      {showForm && <AddPointEchantillonage onAdd={addPointEchantillonage} />}
      <Box className="table" w={table.getTotalSize()}>
        {table.getHeaderGroups().map((headerGroup) => (
          <Box className="tr" key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Box className="th" w={header.getSize()} key={header.id}>
                {header.column.columnDef.header}
                {header.column.getCanSort() && (
                  <Icon
                    as={SortIcon}
                    mx={3}
                    fontSize={14}
                    onClick={header.column.getToggleSortingHandler()}
                  />
                )}
                {
                  {
                    asc: " 🔼",
                    desc: " 🔽",
                  }[header.column.getIsSorted()]
                }
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
    </Box>
  );
};

export default MatiereTable;
