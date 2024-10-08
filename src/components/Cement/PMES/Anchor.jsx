import { Anchor } from "antd";
import { Box } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import "../../../style/index.css";

const App = () => (
  <>
    <div style={{ padding: "20px" }}>
      <Anchor direction="horizontal" className="custom-anchor" affix={false}>
        <Box
          style={{
            display: "flex",
            gap: "24px",
            fontSize: "16px",
            fontWeight: "bold",
            textDecoration: "none",
            transition: "all 0.3s ease",
          }}
        >
          <Link to="/pmes">Analyse</Link>
          <Link to="/pmes_chimique">Analyse Chimique</Link>
          <Link to="/pmes_gachage">Phase Gachage</Link>
          <Link to="/pmes_temps_prise">Phase Temps Prise</Link>
          <Link to="/pmes_proportion">Proportion</Link>
          <Link to="/pmes_physique">Resultat Physique</Link>
          <Link to="/pmes_xrf">Analyse Xrf</Link>
          <Link to="/pmes_xrd">Analyse Xrd</Link>
          <Link to="/pmes_lpee">Lpee</Link>
        </Box>
      </Anchor>
    </div>
  </>
);

export default App;
