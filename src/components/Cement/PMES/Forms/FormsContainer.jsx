import { Box, Heading,Link  } from "@chakra-ui/react";
import { useLocation  } from "react-router-dom";
import AnalyseChimiqueForm from "./AnalyseChimiqueForm";
import PhaseGachageForm from "./PhaseGachageForm";
import PhaseTempsPriseForm from "./PhaseTempsPriseForm";
import ProportionForm from "./ProportionForm";
import ResultatAnalysePhysiqueForm from "./ResultatAnalysePhysiqueForm";
import XrfForm from "./XrfForm";
import XrdForm from "./XrdForm";
import "../../../../index.css";




const PMESFormsContainer = ({ analyseId }) => {

  const location = useLocation();
  const currentForm = location.hash;

  return (
    <Box>
    <Heading as="h3" size="lg" mb="24px">Forms</Heading>
    <Box  style={{
          fontSize:"20px",
          display:"flex",
          gap:"16px",
          fontWeight:"bold",
          
          
        }}
        >
      <Link href="#analyse-chimique" 
      >Analyse Chimique</Link>  
      <Link href="#phase-gachage">Phase Gachage</Link> 
      <Link href="#phase-temps-prise">Phase Temps Prise</Link>  
      <Link href="#proportion">Proportion</Link> 
      <Link href="#resultat-analyse-physique">Resultat Analyse Physique</Link>  
      <Link href="#xrf">XRF</Link>
      <Link href="#xrd">XRD</Link>
    </Box>
    <Box mt={4}>
      {currentForm === "#analyse-chimique" && <AnalyseChimiqueForm analyseId={analyseId} />}
      {currentForm === "#phase-gachage" && <PhaseGachageForm analyseId={analyseId} />}
      {currentForm === "#phase-temps-prise" && <PhaseTempsPriseForm analyseId={analyseId} />}
      {currentForm === "#proportion" && <ProportionForm analyseId={analyseId} />}
      {currentForm === "#resultat-analyse-physique" && <ResultatAnalysePhysiqueForm analyseId={analyseId} />}
      {currentForm === "#xrf" && <XrfForm analyseId={analyseId} />}
      {currentForm === "#xrd" && <XrdForm analyseId={analyseId} />}
      {!currentForm && <AnalyseChimiqueForm analyseId={analyseId} />} {/* Default form */}
    </Box>
  </Box>
  );
};

export default PMESFormsContainer;
