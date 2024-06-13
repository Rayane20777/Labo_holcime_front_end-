import { Box, Button } from "@chakra-ui/react";
import { DeleteOutlined } from "@ant-design/icons";

const DeleteButton = ({ onClick }) => (
    <Box
      style={{
        width:"full",
        display:"flex",
        alignItems:"end"
      }}>
      <Button 
      style={{
        background: "transparent", 
        border: "none",
        fontSize: "16px", 
        color:"red",
        
           
      }}
      onClick={onClick}
      icon={<DeleteOutlined />}
    >
      <DeleteOutlined />
    </Button>
  </Box>
);

export default DeleteButton;
