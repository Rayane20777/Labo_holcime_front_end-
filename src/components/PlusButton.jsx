import { Button } from "@chakra-ui/react";
import { PlusOutlined } from "@ant-design/icons";

const PlusButton = ({ onClick }) => (
  <Button
    style={{
      background: "transparent",
      border: "none",
      fontSize: "16px",
      color: "green",
    }}
    onClick={onClick}
    icon={<PlusOutlined />}
  >
    <PlusOutlined />
  </Button>
);

export default PlusButton;
