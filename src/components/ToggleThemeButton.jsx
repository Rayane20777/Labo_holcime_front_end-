import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { Button } from "antd";

const ToggleThemeButton = ({ darkTheme, toggleTheme }) => {
  return (
    <div className="toggle-theme-btn">
      <Button className="toggle-theme-icon" onClick={toggleTheme}>
        {" "}
        {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Button>
    </div>
  );
};

export default ToggleThemeButton;
