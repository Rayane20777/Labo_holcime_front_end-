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
            key: "cpj35",
            href: "/cpj35",
            title: "Analyse",
          },
          {
            key: "cpj35_chimique",
            href: "/cpj35_chimique",
            title: "Analyse Chimique",
          },
          {
            key: "cpj35_gachage",
            href: "/cpj35_gachage",
            title: "Phase Gachage",
          },
          {
            key: "cpj35_temps_prise",
            href: "/cpj35_temps_prise",
            title: "Phase Temps Prise",
          },
          {
            key: "cpj35_proportion",
            href: "/cpj35_proportion",
            title: " Proportion",
          },
          {
            key: "cpj35_physique",
            href: "/cpj35_physique",
            title: " Physique",
          },
          {
            key: "cpj35_xrf",
            href: "/cpj35_xrf",
            title: "Analyse XRF",
          },
          {
            key: "cpj35_xrd",
            href: "/cpj35_xrd",
            title: "Analyse XRD",
          },
        ]}
      />
    </div>
  </>
);
export default App;
