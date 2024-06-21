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
            key: 'pmvc',
            href: '/pmvc',
            title: 'Analyse',
          },
          {
            key: 'pmvc_chimique',
            href: '/pmvc_chimique',
            title: 'Analyse Chimique',
          },
          {
            key: 'pmvc_gachage',
            href: '/pmvc_gachage',
            title: 'Phase Gachage',
          },
          {
            key: 'pmvc_temps_prise',
            href: '/pmvc_temps_prise',
            title: 'Phase Temps Prise',
          },
          {
            key: 'pmvc_proportion',
            href: '/pmvc_proportion',
            title: ' Proportion',
          },
          {
            key: 'pmvc_physique',
            href: '/pmvc_physique',
            title: ' Physique',
          },
          {
            key: 'pmvc_xrf',
            href: '/pmvc_xrf',
            title: 'Analyse XRF',
          },
          {
            key: 'pmvc_xrd',
            href: '/pmvc_xrd',
            title: 'Analyse XRD',
          },
        ]}
      />
    </div>
    
     
  </>
);
export default App;