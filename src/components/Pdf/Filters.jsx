import {
    HStack,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
  } from "@chakra-ui/react";
  import SearchIcon from "../icons/SearchIcon";
  
  const Filters = ({ columnFilters, setColumnFilters }) => {
    const matiereName = columnFilters.find((f) => f.id === "nom")?.value || "";
  
    const onFilterChange = (id, value) =>
      setColumnFilters((prev) =>
        prev
          .filter((f) => f.id !== id)
          .concat({
            id,
            value,
          })
      );
  
    return (
      <HStack mb={6} spacing={3}>
        <InputGroup size="sm" maxW="12rem">
          <InputLeftElement pointerEvents="none">
            <Icon as={SearchIcon} />
          </InputLeftElement>
          <Input
            style={{
              backgroundColor: "#71717a",
            }}
            type="text"
            variant="filled"
            placeholder="Matiere nom"
            borderRadius={5}
            value={matiereName}
            onChange={(e) => onFilterChange("nom", e.target.value)}
          />
        </InputGroup>
      </HStack>
    );
  };
  export default Filters;
  