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
          <Link to="/pmvc">Analyse</Link>
          <Link to="/pmvc_chimique">Analyse Chimique</Link>
          <Link to="/pmvc_gachage">Phase Gachage</Link>
          <Link to="/pmvc_temps_prise">Phase Temps Prise</Link>
          <Link to="/pmvc_proportion">Proportion</Link>
          <Link to="/pmvc_physique">Resultat Physique</Link>
          <Link to="/pmvc_xrf">Analyse Xrf</Link>
          <Link to="/pmvc_xrd">Analyse Xrd</Link>
          <Link to="/pmvc_lpee">Lpee</Link>
        </Box>
      </Anchor>
    </div>
  </>
);

export default App;
