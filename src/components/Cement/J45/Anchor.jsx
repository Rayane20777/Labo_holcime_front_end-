import { Anchor } from "antd";
import { Box } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import "../../../index.css";

const App = () => (
  <>
    <div style={{ padding: "20px" }}>
      <Anchor direction="horizontal" className="custom-anchor">
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
          <Link to="/j45">Analyse</Link>
          <Link to="/j45_chimique">Analyse Chimique</Link>
          <Link to="/j45_gachage">Phase Gachage</Link>
          <Link to="/j45_temps_prise">Phase Temps Prise</Link>
          <Link to="/j45_proportion">Proportion</Link>
          <Link to="/j45_physique">Resultat Physique</Link>
          <Link to="/j45_xrf">Analyse XRF</Link>
          <Link to="/j45_xrd">Analyse XRD</Link>
        </Box>
      </Anchor>
    </div>
  </>
);

export default App;
