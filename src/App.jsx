import { useState } from "react";
import { Button, Layout, theme } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logo from "./components/Logo";
import MenuList from "./components/MenuList";
import ToggleThemeButton from "./components/ToggleThemeButton";
// import { Box, Heading } from "@chakra-ui/react";
import "./App.css";

// import Home from "./components/Home";
import Matiere from "./components/Matiere/MatiereTable";
import User from "./components/Utilisateur/User";
import Destination from "./components/Destination/DestinationTable";
import PointEchantillonage from "./components/PointEchantillonage/PointEchantillonageTable";
import Login from "./components/Auth/Login";
import AuthProvider from "./Providers/AuthProvider";

{
  /* ******************************************************************************************************************** */
}
import CPZA55 from "./components/Cement/CPZA55/AnalyseTable";
import CPZA55_Chimique from "./components/Cement/CPZA55/AnalyseChimiqueTable";
import CPZA55_Gachage from "./components/Cement/CPZA55/PhaseGachageTable";
import CPZA55_TempsPrise from "./components/Cement/CPZA55/PhaseTempsPriseTable";
import CPZA55_Proportion from "./components/Cement/CPZA55/ProportionTable";
import CPZA55_Physique from "./components/Cement/CPZA55/ResultatAnalysePhysiqueTable";
import CPZA55_Xrf from "./components/Cement/CPZA55/XrfTable";
import CPZA55_Xrd from "./components/Cement/CPZA55/XrdTable";
{
  /* ******************************************************************************************************************** */
}

{
  /* ******************************************************************************************************************** */
}
import PMES from "./components/Cement/PMES/AnalyseTable";
import PMES_Chimique from "./components/Cement/PMES/AnalyseChimiqueTable";
import PMES_Gachage from "./components/Cement/PMES/PhaseGachageTable";
import PMES_TempsPrise from "./components/Cement/PMES/PhaseTempsPriseTable";
import PMES_Proportion from "./components/Cement/PMES/ProportionTable";
import PMES_Physique from "./components/Cement/PMES/ResultatAnalysePhysiqueTable";
import PMES_Xrf from "./components/Cement/PMES/XrfTable";
import PMES_Xrd from "./components/Cement/PMES/XrdTable";
{
  /* ******************************************************************************************************************** */
}

{
  /* ******************************************************************************************************************** */
}
import PERFECTO from "./components/Cement/PERFECTO/AnalyseTable";
import PERFECTO_Chimique from "./components/Cement/PERFECTO/AnalyseChimiqueTable";
import PERFECTO_Gachage from "./components/Cement/PERFECTO/PhaseGachageTable";
import PERFECTO_TempsPrise from "./components/Cement/PERFECTO/PhaseTempsPriseTable";
import PERFECTO_Proportion from "./components/Cement/PERFECTO/ProportionTable";
import PERFECTO_Physique from "./components/Cement/PERFECTO/ResultatAnalysePhysiqueTable";
import PERFECTO_Xrf from "./components/Cement/PERFECTO/XrfTable";
import PERFECTO_Xrd from "./components/Cement/PERFECTO/XrdTable";
{
  /* ******************************************************************************************************************** */
}

{
  /* ******************************************************************************************************************** */
}
import PMVC from "./components/Cement/PMVC/AnalyseTable";
import PMVC_Chimique from "./components/Cement/PMVC/AnalyseChimiqueTable";
import PMVC_Gachage from "./components/Cement/PMVC/PhaseGachageTable";
import PMVC_TempsPrise from "./components/Cement/PMVC/PhaseTempsPriseTable";
import PMVC_Proportion from "./components/Cement/PMVC/ProportionTable";
import PMVC_Physique from "./components/Cement/PMVC/ResultatAnalysePhysiqueTable";
import PMVC_Xrf from "./components/Cement/PMVC/XrfTable";
import PMVC_Xrd from "./components/Cement/PMVC/XrdTable";
{
  /* ******************************************************************************************************************** */
}

{
  /* ******************************************************************************************************************** */
}
import CPJ35 from "./components/Cement/CPJ35/AnalyseTable";
import CPJ35_Chimique from "./components/Cement/CPJ35/AnalyseChimiqueTable";
import CPJ35_Gachage from "./components/Cement/CPJ35/PhaseGachageTable";
import CPJ35_TempsPrise from "./components/Cement/CPJ35/PhaseTempsPriseTable";
import CPJ35_Proportion from "./components/Cement/CPJ35/ProportionTable";
import CPJ35_Physique from "./components/Cement/CPJ35/ResultatAnalysePhysiqueTable";
import CPJ35_Xrf from "./components/Cement/CPJ35/XrfTable";
import CPJ35_Xrd from "./components/Cement/CPJ35/XrdTable";
{
  /* ******************************************************************************************************************** */
}

{
  /* ******************************************************************************************************************** */
}
import J35 from "./components/Cement/J35/AnalyseTable";
import J35_Chimique from "./components/Cement/J35/AnalyseChimiqueTable";
import J35_Gachage from "./components/Cement/J35/PhaseGachageTable";
import J35_TempsPrise from "./components/Cement/J35/PhaseTempsPriseTable";
import J35_Proportion from "./components/Cement/J35/ProportionTable";
import J35_Physique from "./components/Cement/J35/ResultatAnalysePhysiqueTable";
import J35_Xrf from "./components/Cement/J35/XrfTable";
import J35_Xrd from "./components/Cement/J35/XrdTable";
{
  /* ******************************************************************************************************************** */
}

{
  /* ******************************************************************************************************************** */
}
import J45 from "./components/Cement/J45/AnalyseTable";
import J45_Chimique from "./components/Cement/J45/AnalyseChimiqueTable";
import J45_Gachage from "./components/Cement/J45/PhaseGachageTable";
import J45_TempsPrise from "./components/Cement/J45/PhaseTempsPriseTable";
import J45_Proportion from "./components/Cement/J45/ProportionTable";
import J45_Physique from "./components/Cement/J45/ResultatAnalysePhysiqueTable";
import J45_Xrf from "./components/Cement/J45/XrfTable";
import J45_Xrd from "./components/Cement/J45/XrdTable";
{
  /* ******************************************************************************************************************** */
}

{
  /* ******************************************************************************************************************** */
}
import J55 from "./components/Cement/J55/AnalyseTable";
import J55_Chimique from "./components/Cement/J55/AnalyseChimiqueTable";
import J55_Gachage from "./components/Cement/J55/PhaseGachageTable";
import J55_TempsPrise from "./components/Cement/J55/PhaseTempsPriseTable";
import J55_Proportion from "./components/Cement/J55/ProportionTable";
import J55_Physique from "./components/Cement/J55/ResultatAnalysePhysiqueTable";
import J55_Xrf from "./components/Cement/J55/XrfTable";
import J55_Xrd from "./components/Cement/J55/XrdTable";
{
  /* ******************************************************************************************************************** */
}

// import TaskTable from "./components/TaskTable"

const { Header, Sider, Content } = Layout;
function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <Layout>
                <Sider
                  collapsed={collapsed}
                  collapsible
                  trigger={null}
                  theme={darkTheme ? "dark" : "light"}
                  className="sidebar"
                >
                  <Logo />
                  <MenuList darkTheme={darkTheme} />
                  <ToggleThemeButton
                    darkTheme={darkTheme}
                    toggleTheme={toggleTheme}
                  />
                </Sider>
                <Layout
                  style={{
                    overflow: "Hidden",
                  }}
                >
                  <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                      type="text"
                      className="toggle"
                      onClick={() => setCollapsed(!collapsed)}
                      icon={
                        collapsed ? (
                          <MenuUnfoldOutlined />
                        ) : (
                          <MenuFoldOutlined />
                        )
                      }
                    />
                  </Header>
                  <Layout style={{ padding: " 12px 12px" }}>
                    <Content
                      className="gradient-background"
                      style={{
                        padding: 12,
                        minHeight: 280,
                      }}
                    >
                      <Routes>
                        <Route path="/login" element={<Login />} />

                        {/* <Route path="/" element={<Home />} /> */}
                        <Route path="/matiere" element={<Matiere />} />
                        <Route path="/destination" element={<Destination />} />
                        <Route
                          path="/point_echantillonage"
                          element={<PointEchantillonage />}
                        />
                        <Route path="/user" element={<User />} />
                        {/* ******************************************************************************************************************** */}
                        <Route path="/pmes" element={<PMES />} />
                        <Route
                          path="/pmes_chimique"
                          element={<PMES_Chimique />}
                        />
                        <Route
                          path="/pmes_gachage"
                          element={<PMES_Gachage />}
                        />
                        <Route
                          path="/pmes_temps_prise"
                          element={<PMES_TempsPrise />}
                        />
                        <Route
                          path="/pmes_proportion"
                          element={<PMES_Proportion />}
                        />
                        <Route
                          path="/pmes_physique"
                          element={<PMES_Physique />}
                        />
                        <Route path="/pmes_xrf" element={<PMES_Xrf />} />
                        <Route path="/pmes_xrd" element={<PMES_Xrd />} />
                        {/* ******************************************************************************************************************** */}

                        {/* ******************************************************************************************************************** */}
                        <Route path="/cpza55" element={<CPZA55 />} />
                        <Route
                          path="/cpza55_chimique"
                          element={<CPZA55_Chimique />}
                        />
                        <Route
                          path="/cpza55_gachage"
                          element={<CPZA55_Gachage />}
                        />
                        <Route
                          path="/cpza55_temps_prise"
                          element={<CPZA55_TempsPrise />}
                        />
                        <Route
                          path="/cpza55_proportion"
                          element={<CPZA55_Proportion />}
                        />
                        <Route
                          path="/cpza55_physique"
                          element={<CPZA55_Physique />}
                        />
                        <Route path="/cpza55_xrf" element={<CPZA55_Xrf />} />
                        <Route path="/cpza55_xrd" element={<CPZA55_Xrd />} />
                        {/* ******************************************************************************************************************** */}

                        {/* ******************************************************************************************************************** */}
                        <Route path="/perfecto" element={<PERFECTO />} />
                        <Route
                          path="/perfecto_chimique"
                          element={<PERFECTO_Chimique />}
                        />
                        <Route
                          path="/perfecto_gachage"
                          element={<PERFECTO_Gachage />}
                        />
                        <Route
                          path="/perfecto_temps_prise"
                          element={<PERFECTO_TempsPrise />}
                        />
                        <Route
                          path="/perfecto_proportion"
                          element={<PERFECTO_Proportion />}
                        />
                        <Route
                          path="/perfecto_physique"
                          element={<PERFECTO_Physique />}
                        />
                        <Route
                          path="/perfecto_xrf"
                          element={<PERFECTO_Xrf />}
                        />
                        <Route
                          path="/perfecto_xrd"
                          element={<PERFECTO_Xrd />}
                        />
                        {/* ******************************************************************************************************************** */}

                        {/* ******************************************************************************************************************** */}
                        <Route path="/pmvc" element={<PMVC />} />
                        <Route
                          path="/pmvc_chimique"
                          element={<PMVC_Chimique />}
                        />
                        <Route
                          path="/pmvc_gachage"
                          element={<PMVC_Gachage />}
                        />
                        <Route
                          path="/pmvc_temps_prise"
                          element={<PMVC_TempsPrise />}
                        />
                        <Route
                          path="/pmvc_proportion"
                          element={<PMVC_Proportion />}
                        />
                        <Route
                          path="/pmvc_physique"
                          element={<PMVC_Physique />}
                        />
                        <Route path="/pmvc_xrf" element={<PMVC_Xrf />} />
                        <Route path="/pmvc_xrd" element={<PMVC_Xrd />} />
                        {/* ******************************************************************************************************************** */}

                        {/* ******************************************************************************************************************** */}
                        <Route path="/cpj35" element={<CPJ35 />} />
                        <Route
                          path="/cpj35_chimique"
                          element={<CPJ35_Chimique />}
                        />
                        <Route
                          path="/cpj35_gachage"
                          element={<CPJ35_Gachage />}
                        />
                        <Route
                          path="/cpj35_temps_prise"
                          element={<CPJ35_TempsPrise />}
                        />
                        <Route
                          path="/cpj35_proportion"
                          element={<CPJ35_Proportion />}
                        />
                        <Route
                          path="/cpj35_physique"
                          element={<CPJ35_Physique />}
                        />
                        <Route path="/cpj35_xrf" element={<CPJ35_Xrf />} />
                        <Route path="/cpj35_xrd" element={<CPJ35_Xrd />} />
                        {/* ******************************************************************************************************************** */}

                        {/* ******************************************************************************************************************** */}
                        <Route path="/j35" element={<J35 />} />
                        <Route
                          path="/j35_chimique"
                          element={<J35_Chimique />}
                        />
                        <Route path="/j35_gachage" element={<J35_Gachage />} />
                        <Route
                          path="/j35_temps_prise"
                          element={<J35_TempsPrise />}
                        />
                        <Route
                          path="/j35_proportion"
                          element={<J35_Proportion />}
                        />
                        <Route
                          path="/j35_physique"
                          element={<J35_Physique />}
                        />
                        <Route path="/j35_xrf" element={<J35_Xrf />} />
                        <Route path="/j35_xrd" element={<J35_Xrd />} />
                        {/* ******************************************************************************************************************** */}

                        {/* ******************************************************************************************************************** */}
                        <Route path="/j45" element={<J45 />} />
                        <Route
                          path="/j45_chimique"
                          element={<J45_Chimique />}
                        />
                        <Route path="/j45_gachage" element={<J45_Gachage />} />
                        <Route
                          path="/j45_temps_prise"
                          element={<J45_TempsPrise />}
                        />
                        <Route
                          path="/j45_proportion"
                          element={<J45_Proportion />}
                        />
                        <Route
                          path="/j45_physique"
                          element={<J45_Physique />}
                        />
                        <Route path="/j45_xrf" element={<J45_Xrf />} />
                        <Route path="/j45_xrd" element={<J45_Xrd />} />
                        {/* ******************************************************************************************************************** */}

                        {/* ******************************************************************************************************************** */}
                        <Route path="/j55" element={<J55 />} />
                        <Route
                          path="/j55_chimique"
                          element={<J55_Chimique />}
                        />
                        <Route path="/j55_gachage" element={<J55_Gachage />} />
                        <Route
                          path="/j55_temps_prise"
                          element={<J55_TempsPrise />}
                        />
                        <Route
                          path="/j55_proportion"
                          element={<J55_Proportion />}
                        />
                        <Route
                          path="/j55_physique"
                          element={<J55_Physique />}
                        />
                        <Route path="/j55_xrf" element={<J55_Xrf />} />
                        <Route path="/j55_xrd" element={<J55_Xrd />} />
                        {/* ******************************************************************************************************************** */}
                      </Routes>
                    </Content>
                  </Layout>
                </Layout>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
