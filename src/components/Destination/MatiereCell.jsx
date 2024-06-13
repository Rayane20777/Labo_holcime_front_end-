import {  Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";

const MatiereCell = ({ getValue, row, column, table }) => {
  const [matiereOptions, setMatiereOptions] = useState([]);
  const { nom } = getValue() || {};
  const { updateData } = table.options.meta;

  useEffect(() => {
    const fetchMatiere = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/matiere');
        console.log('Matiere Options:', response.data); // Debugging line to check data
        setMatiereOptions(response.data);
      } catch (error) {
        console.error('Error fetching matiere:', error);
      }
    };

    fetchMatiere();
  }, []);

  return (
    <Menu isLazy offset={[0, 0]} flip={false} autoSelect={false}>
      <MenuButton h="100%" w="100%" textAlign="left" p={1.5} bg="transparent" color="gray.900">
        {nom || 'Select Matiere'}
      </MenuButton>
      <MenuList>

        {matiereOptions.map((matiere) => (
          <MenuItem onClick={() => updateData(row.index, column.id, matiere)} key={matiere.id}>
            {matiere.nom}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default MatiereCell;
