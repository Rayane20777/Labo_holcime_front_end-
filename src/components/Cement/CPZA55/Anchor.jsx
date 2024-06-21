import { Anchor } from 'antd';
import '..//../../index.css';
const App = () => (
  <>
    <div
      style={{
        padding: '30px',
      }}
    >
      <Anchor
        direction="horizontal"
        className="custom-anchor"
        items={[
          {
            key: 'cpza55',
            href: '/cpza55',
            title: 'Analyse',
          },
          {
            key: 'cpza55_chimique',
            href: '/cpza55_chimique',
            title: 'Analyse Chimique',
          },
          {
            key: 'cpza55_gachage',
            href: '/cpza55_gachage',
            title: 'Phase Gachage',
          },
          {
            key: 'cpza55_temps_prise',
            href: '/cpza55_temps_prise',
            title: 'Phase Temps Prise',
          },
          {
            key: 'cpza55_proportion',
            href: '/cpza55_proportion',
            title: ' Proportion',
          },
          {
            key: 'cpza55_physique',
            href: '/cpza55_physique',
            title: ' Physique',
          },
          {
            key: 'cpza55_xrf',
            href: '/cpza55_xrf',
            title: 'Analyse XRF',
          },
          {
            key: 'cpza55_xrd',
            href: '/cpza55_xrd',
            title: 'Analyse XR',
          },
        ]}
      />
    </div>
    
     
  </>
);
export default App;