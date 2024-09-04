import { forwardRef, useContext } from "react";
import { Center, Icon } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from "./icons/CalendarIcon";
import { hasRole } from "../utils/roleCheck";
import { AuthContext } from "../Providers/AuthProvider";

// Define a read-only date input component for users without specific roles
const ReadOnlyDateCustomInput = forwardRef(({ value }, ref) => (
  <Center ref={ref} cursor="not-allowed" position="relative">
    {value ? <>{value}</> : <Icon as={CalendarIcon} fontSize="xl" />}
  </Center>
));

const DateCustomInput = forwardRef(({ value, onClick, clearDate }, ref) => (
  <Center ref={ref} onClick={onClick} cursor="pointer" position="relative">
    {value ? <>{value}</> : <Icon as={CalendarIcon} fontSize="xl" />}
  </Center>
));

const DateCell = ({ getValue, row, column, table }) => {
  const date = new Date(getValue());
  const { updateData } = table.options.meta;
  const info = useContext(AuthContext);

  // Check if the user has either "super_admin" or "admin" role
  const isAdmin = hasRole(info, "super_admin") || hasRole(info, "admin");

  // Conditionally set the custom input based on the user's role(s)
  const CustomInputComponent = isAdmin ? DateCustomInput : ReadOnlyDateCustomInput;

  return (
    <DatePicker
      wrapperClassName="date-wrapper"
      dateFormat="yyyy MMM d"
      selected={date}
      onChange={(date) => updateData(row.index, column.id, date)}
      customInput={
        <CustomInputComponent
          clearDate={() => updateData(row.index, column.id, null)}
        />
      }
    />
  );
};

export default DateCell;
