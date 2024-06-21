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
            key: 'pmes',
            href: '/pmes',
            title: 'Analyse',
          },
          {
            key: 'pmes_chimique',
            href: '/pmes_chimique',
            title: 'Analyse Chimique',
          },
          {
            key: 'pmes_gachage',
            href: '/pmes_gachage',
            title: 'Phase Gachage',
          },
          {
            key: 'pmes_temps_prise',
            href: '/pmes_temps_prise',
            title: 'Phase Temps Prise',
          },
          {
            key: 'pmes_proportion',
            href: '/pmes_proportion',
            title: ' Proportion',
          },
          {
            key: 'pmes_physique',
            href: '/pmes_physique',
            title: ' Physique',
          },
          {
            key: 'pmes_xrf',
            href: '/pmes_xrf',
            title: 'Analyse XRF',
          },
          {
            key: 'pmes_xrd',
            href: '/pmes_xrd',
            title: 'Analyse XRD',
          },
        ]}
      />
    </div>
    
     
  </>
);
export default App;