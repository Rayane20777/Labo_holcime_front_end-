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
            key: 'j55',
            href: '/j55',
            title: 'Analyse',
          },
          {
            key: 'j55_chimique',
            href: '/j55_chimique',
            title: 'Analyse Chimique',
          },
          {
            key: 'j55_gachage',
            href: '/j55_gachage',
            title: 'Phase Gachage',
          },
          {
            key: 'j55_temps_prise',
            href: '/j55_temps_prise',
            title: 'Phase Temps Prise',
          },
          {
            key: 'j55_proportion',
            href: '/j55_proportion',
            title: ' Proportion',
          },
          {
            key: 'j55_physique',
            href: '/j55_physique',
            title: ' Physique',
          },
          {
            key: 'j55_xrf',
            href: '/j55_xrf',
            title: 'Analyse XRF',
          },
        ]}
      />
    </div>
    
     
  </>
);
export default App;