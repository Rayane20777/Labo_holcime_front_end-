import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import instance from "../../api/api";

const ChangePasswordForm = ({ userId, onPasswordChange }) => {
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await instance("post",`reset/${userId}`, { password });
      onPasswordChange(response.data);
    } catch (error) {
      console.error("Error changing password:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} mb={4}>
      <FormControl mb={4}
      style={{
        backgroundColor:"#D8DBCE",
        padding:"20px",
        width:"500px"

      }}>
        <FormLabel>Nouveau mot de passe</FormLabel>
        <Input
        style={{
          width:"250px",
          borderColor:"black"
        }}
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
      </FormControl>
      <Button type="submit" colorScheme="blue" mt={4}>
        Change Password
      </Button>
    </Box>
  );
};

export default ChangePasswordForm;
