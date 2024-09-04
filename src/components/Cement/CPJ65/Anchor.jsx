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
          <Link to="/CPJ65">Analyse</Link>
          <Link to="/CPJ65_chimique">Analyse Chimique</Link>
          <Link to="/CPJ65_gachage">Phase Gachage</Link>
          <Link to="/CPJ65_temps_prise">Phase Temps Prise</Link>
          <Link to="/CPJ65_proportion">Proportion</Link>
          <Link to="/CPJ65_physique">Resultat Physique</Link>
          <Link to="/CPJ65_xrf">Analyse XRF</Link>
          <Link to="/CPJ65_xrd">Analyse XRD</Link>
          <Link to="/CPJ65_xrd">Analyse XRD</Link>
          <Link to="/CPJ65_lpee">Lpee</Link>
        </Box>
      </Anchor>
    </div>
  </>
);

export default App;
