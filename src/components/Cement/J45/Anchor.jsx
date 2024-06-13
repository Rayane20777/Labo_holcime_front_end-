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
            key: 'j45',
            href: '/j45',
            title: 'Analyse',
          },
          {
            key: 'j45_chimique',
            href: '/j45_chimique',
            title: 'Analyse Chimique',
          },
          {
            key: 'j45_gachage',
            href: '/j45_gachage',
            title: 'Phase Gachage',
          },
          {
            key: 'j45_temps_prise',
            href: '/j45_temps_prise',
            title: 'Phase Temps Prise',
          },
          {
            key: 'j45_proportion',
            href: '/j45_proportion',
            title: ' Proportion',
          },
          {
            key: 'j45_physique',
            href: '/j45_physique',
            title: ' Physique',
          },
          {
            key: 'j45_xrf',
            href: '/j45_xrf',
            title: 'Analyse XRF',
          },
        ]}
      />
    </div>
    
     
  </>
);
export default App;