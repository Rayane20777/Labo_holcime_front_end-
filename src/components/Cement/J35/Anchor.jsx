import { Anchor } from "antd";
import "..//../../index.css";
const App = () => (
  <>
    <div
      style={{
        padding: "20px",
      }}
    >
      <Anchor
        direction="horizontal"
        className="custom-anchor"
        items={[
          {
            key: "j35",
            href: "/j35",
            title: "Analyse",
          },
          {
            key: "j35_chimique",
            href: "/j35_chimique",
            title: "Analyse Chimique",
          },
          {
            key: "j35_gachage",
            href: "/j35_gachage",
            title: "Phase Gachage",
          },
          {
            key: "j35_temps_prise",
            href: "/j35_temps_prise",
            title: "Phase Temps Prise",
          },
          {
            key: "j35_proportion",
            href: "/j35_proportion",
            title: " Proportion",
          },
          {
            key: "j35_physique",
            href: "/j35_physique",
            title: " Physique",
          },
          {
            key: "j35_xrf",
            href: "/j35_xrf",
            title: "Analyse XRF",
          },
        ]}
      />
    </div>
  </>
);
export default App;
