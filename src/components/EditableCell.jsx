import { Input } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { hasRole } from "../utils/roleCheck";
import { AuthContext } from "../Providers/AuthProvider";

const EditableInput = ({ value, onChange, onBlur }) => (
  <Input value={value} onChange={onChange} onBlur={onBlur} />
);

const ReadOnlyInput = ({ value }) => (
  <Input value={value} isReadOnly variant="unstyled" tabIndex={-1} />
);

const EditableCell = ({ getValue, row, column, table }) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  const info = useContext(AuthContext);

  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const isAdmin = hasRole(info, "super_admin") || hasRole(info, "admin");

  const InputComponent = isAdmin ? EditableInput : ReadOnlyInput;

  return (
    <InputComponent
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
    />
  );
};

export default EditableCell;
