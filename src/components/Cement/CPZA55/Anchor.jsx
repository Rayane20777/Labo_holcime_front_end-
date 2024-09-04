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
          <Link to="/cpza55">Analyse</Link>
          <Link to="/cpza55_chimique">Analyse Chimique</Link>
          <Link to="/cpza55_gachage">Phase Gachage</Link>
          <Link to="/cpza55_temps_prise">Phase Temps Prise</Link>
          <Link to="/cpza55_proportion">Proportion</Link>
          <Link to="/cpza55_physique">Resultat Physique</Link>
          <Link to="/cpza55_xrf">Analyse XRF</Link>
          <Link to="/cpza55_xrd">Analyse XRD</Link>
          <Link to="/cpza55_lpee">Lpee</Link>
        </Box>
      </Anchor>
    </div>
  </>
);

export default App;
