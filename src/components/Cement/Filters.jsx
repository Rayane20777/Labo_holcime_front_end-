import {
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import SearchIcon from "../icons/SearchIcon";

const Filters = ({ columnId, columnFilters, setColumnFilters }) => {
  const filterValue = columnFilters.find((f) => f.id === columnId)?.value || "";

  const onFilterChange = (id, value) => {
    setColumnFilters((prev) => {
      const newFilters = prev.filter((f) => f.id !== id);

      if (value) {
        newFilters.push({ id, value });
        console.log(newFilters);
      }
      return newFilters;
    });
  };

  return (
    <HStack mb={6} spacing={3}>
      <InputGroup size="sm" maxW="12rem">
        <InputLeftElement pointerEvents="none">
          <Icon as={SearchIcon} />
        </InputLeftElement>
        <Input
          style={{
            backgroundColor: "#368014",
          }}
          type="text"
          variant="filled"
          placeholder={columnId}
          borderRadius={5}
          value={filterValue}
          onChange={(e) => onFilterChange(columnId, e.target.value)}
        />
      </InputGroup>
    </HStack>
  );
};

export default Filters;
