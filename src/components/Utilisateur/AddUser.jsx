import { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import axios from "axios";

const AddUser = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "",
  });

  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const rolesResponse = await axios.get(
          "http://127.0.0.1:8000/api/role"
        );
        setRoles(rolesResponse.data);
        // Set default role to the first role if roles are available
        if (rolesResponse.data.length > 0) {
          setFormData((prev) => ({
            ...prev,
            role: rolesResponse.data[0].name,
          }));
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };
    fetchOptions();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/user",
        formData
      );
      onAdd(response.data);
    } catch (error) {
      console.error(
        "Error adding data:",
        error.response ? error.response.data : error.message
      );
    }
  };
  if (loading) {
    return <Box>Loading...</Box>;
  }
  return (
    <Box as="form" onSubmit={handleSubmit} mb={4}>
      <FormControl mb={4}>
        <FormLabel>Nom</FormLabel>
        <Input
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Password</FormLabel>
        <Input
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Role</FormLabel>
        <Select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          {roles.map((role) => (
            <option key={role.name} value={role.name}>
              {role.name}
            </option>
          ))}
        </Select>
      </FormControl>
      <Button type="submit" colorScheme="blue" mt={4}>
        Add User
      </Button>
    </Box>
  );
};

export default AddUser;
