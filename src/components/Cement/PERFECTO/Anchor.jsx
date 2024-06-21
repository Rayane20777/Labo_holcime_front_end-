import { Anchor } from 'antd';
import '..//../../index.css';
const App = () => (
  <>
    <div
      style={{
        padding: '20px',
      }}
    >
      <Anchor
        direction="horizontal"
        className="custom-anchor"
        items={[
          {
            key: 'perfecto',
            href: '/perfecto',
            title: 'Analyse',
          },
          {
            key: 'perfecto_chimique',
            href: '/perfecto_chimique',
            title: 'Analyse Chimique',
          },
          {
            key: 'perfecto_gachage',
            href: '/perfecto_gachage',
            title: 'Phase Gachage',
          },
          {
            key: 'perfecto_temps_prise',
            href: '/perfecto_temps_prise',
            title: 'Phase Temps Prise',
          },
          {
            key: 'perfecto_proportion',
            href: '/perfecto_proportion',
            title: ' Proportion',
          },
          {
            key: 'perfecto_physique',
            href: '/perfecto_physique',
            title: ' Physique',
          },
          {
            key: 'perfecto_xrf',
            href: '/perfecto_xrf',
            title: 'Analyse XRF',
          },
          {
            key: 'perfecto_xrd',
            href: '/perfecto_xrd',
            title: 'Analyse XRD',
          },
        ]}
      />
    </div>
    
     
  </>
);
export default App;