import { Button , Heading} from "@chakra-ui/react";
import { DeleteOutlined } from "@ant-design/icons";

const DeleteButton = ({ onClick }) => (
  <Button
    style={{
      background: "transparent",
      border: "none",
      fontSize: "16px",
      color: "red",
    }}
    onClick={onClick}
    icon={<DeleteOutlined />}
  >
    <DeleteOutlined />
  </Button>
);

export default DeleteButton;
