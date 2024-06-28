import { forwardRef } from "react";
import { Box, Center, Icon } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from "./icons/CalendarIcon";

const DateCustomInput = forwardRef(({ value, onClick, clearDate }, ref) => (
  <Center ref={ref} onClick={onClick} cursor="pointer" position="relative">
    {value ? <>{value}</> : <Icon as={CalendarIcon} fontSize="xl" />}
  </Center>
));

const DateCell = ({ getValue, row, column, table }) => {
  const date = new Date(getValue());
  const { updateData } = table.options.meta;
  return (
    <DatePicker
      wrapperClassName="date-wrapper"
      dateFormat="yyyy MMM d"
      selected={date}
      onChange={(date) => updateData(row.index, column.id, date)}
      customInput={
        <DateCustomInput
          clearDate={() => updateData(row.index, column.id, null)}
        />
      }
    />
  );
};
export default DateCell;
