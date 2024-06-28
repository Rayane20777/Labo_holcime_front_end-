import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  AppstoreOutlined,
  AreaChartOutlined,
  PayCircleOutlined,
  LogoutOutlined,
  UserOutlined,
  ExperimentOutlined,
} from "@ant-design/icons";

const MenuList = ({ darkTheme }) => {
  return (
    <Menu theme={darkTheme ? "dark" : "light"} className="menu-bar">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>

      <Menu.Item key="Matiere" icon={<AppstoreOutlined />}>
        <Link to="/matiere">Matiere</Link>
      </Menu.Item>

      <Menu.Item key="destination" icon={<AreaChartOutlined />}>
        <Link to="/destination">Destination</Link>
      </Menu.Item>

      <Menu.Item key="point_echantillonage" icon={<PayCircleOutlined />}>
        <Link to="/point_echantillonage">Point Echantillonage</Link>
      </Menu.Item>

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

        <Menu.Item title="CPJ35" key="CPJ35">
          <Link to="/cpj35">CPJ35</Link>
        </Menu.Item>
      </Menu.SubMenu>

      <Menu.Item title="Utilisateur" key="utilisateur" icon={<UserOutlined />}>
        <Link to="/user">Utilisateur</Link>
      </Menu.Item>

      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Log Out
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
