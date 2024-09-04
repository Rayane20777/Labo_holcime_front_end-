import { Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  AppstoreOutlined,
  AreaChartOutlined,
  PayCircleOutlined,
  LogoutOutlined,
  UserOutlined,
  ExperimentOutlined,
  FilePdfOutlined 
} from "@ant-design/icons";
import instance from "../api/api";
import { hasRole } from "../utils/roleCheck";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";

const MenuList = ({ darkTheme }) => {
  const info = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await instance("post", "logout");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    }
  };

  return (
    <Menu theme={darkTheme ? "dark" : "light"} className="menu-bar">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>

      <Menu.Item key="Matiere" icon={<AppstoreOutlined />}>
        <Link to="/matiere">Matiere</Link>
      </Menu.Item>

      {hasRole(info, "super_admin") && (
        <Menu.Item key="destination" icon={<AreaChartOutlined />}>
          <Link to="/destination">Destination</Link>
        </Menu.Item>
      )}

      {hasRole(info, "super_admin") && (
        <Menu.Item key="point_echantillonage" icon={<PayCircleOutlined />}>
          <Link to="/point_echantillonage">Point Echantillonage</Link>
        </Menu.Item>
      )}

      <Menu.SubMenu key="Ciment" icon={<ExperimentOutlined />} title="Analyse">
        <Menu.Item title="CPZA55" key="CPZA55">
          <Link to="/cpza55">CPZA55</Link>
        </Menu.Item>

        <Menu.Item title="PMES" key="PMES">
          <Link to="/pmes">PMES</Link>
        </Menu.Item>

        <Menu.Item title="PERFECTO" key="PERFECTO">
          <Link to="/perfecto">PERFECTO</Link>
        </Menu.Item>

        <Menu.Item title="J35" key="J35">
          <Link to="/j35">J35</Link>
        </Menu.Item>

        <Menu.Item title="J45" key="J45">
          <Link to="/j45">J45</Link>
        </Menu.Item>

        <Menu.Item title="J55" key="J55">
          <Link to="/j55">J55</Link>
        </Menu.Item>

        <Menu.Item title="PMVC" key="PMVC">
          <Link to="/pmvc">PMVC</Link>
        </Menu.Item>

        <Menu.Item title="CPJ65" key="CPJ65">
          <Link to="/CPJ65">CPJ65</Link>
        </Menu.Item>
      </Menu.SubMenu>

      {hasRole(info, "super_admin") && (
        <Menu.Item
          title="pdf"
          key="pdf"
          icon={<FilePdfOutlined />}
        >
          <Link to="/pdf">PDF</Link>
        </Menu.Item>
      )}

      {hasRole(info, "super_admin") && (
        <Menu.Item
          title="Utilisateur"
          key="utilisateur"
          icon={<UserOutlined />}
        >
          <Link to="/user">Utilisateur</Link>
        </Menu.Item>
      )}

      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        Log Out
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
