import { Select } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { hasRole } from "../../utils/roleCheck";
import { AuthContext } from "../../Providers/AuthProvider";

const EditableSelect = ({ value, onChange, onBlur, options }) => (
  <Select value={value} onChange={onChange} onBlur={onBlur}>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </Select>
);

const ReadOnlySelect = ({ value, options }) => (
  <Select value={value} isReadOnly variant="unstyled" tabIndex={-1}>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </Select>
);

const RoleSelectCell = ({ getValue, row, column, table }) => {
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

  const SelectComponent = isAdmin ? EditableSelect : ReadOnlySelect;

  const roleOptions = ["admin", "user", "super_admin"]; 

  return (
    <SelectComponent
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      options={roleOptions}
    />
  );
};

export default RoleSelectCell;
