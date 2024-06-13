import { Box, Text, Button, ButtonGroup, Icon } from "@chakra-ui/react";
import { flexRender } from "@tanstack/react-table";
import SortIcon from "./icons/SortIcon";
import Filters from "./Cement/Filters";

const DataTable = ({ table, columnFilters, setColumnFilters }) => {
  return (
    <Box
    >
      <Box
      style={{
        overflowX: "scroll"
      }}
      >
      <Box
       className="table" w={table.getTotalSize()}>
        {table.getHeaderGroups().map((headerGroup) => (
          <Box className="tr" key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                className="th"
                w={header.getSize()}
                key={header.id}
              >
                <Box>
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
                      asc: "🔼",
                      desc: "🔽",
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
                <Filters
                  columnId={header.column.columnDef.accessorKey}
                  columnFilters={columnFilters}
                  setColumnFilters={setColumnFilters}
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

        ))
        }
        </Box>
      </Box>
      <br />
      <Text mb={2}>
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </Text>
      <ButtonGroup size="sm" isAttached variant="outline">
        <Button 
        style={{ color: 'black', borderColor: 'black' }}
          onClick={() => table.previousPage()}
          isDisabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </Button>
        <Button
        style={{ color: 'black', borderColor: 'black' }}
          onClick={() => table.nextPage()}
          isDisabled={!table.getCanNextPage()}
        >
          {">"}
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default DataTable;
