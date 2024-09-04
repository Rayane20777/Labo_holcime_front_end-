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
          <Link to="/perfecto">Analyse</Link>
          <Link to="/perfecto_chimique">Analyse Chimique</Link>
          <Link to="/perfecto_gachage">Phase Gachage</Link>
          <Link to="/perfecto_temps_prise">Phase Temps Prise</Link>
          <Link to="/perfecto_proportion">Proportion</Link>
          <Link to="/perfecto_physique">Resultat Physique</Link>
          <Link to="/perfecto_xrf">Analyse Xrf</Link>
          <Link to="/perfecto_xrd">Analyse Xrd</Link>
          <Link to="/perfecto_lpee">Lpee</Link>
        </Box>
      </Anchor>
    </div>
  </>
);

export default App;
