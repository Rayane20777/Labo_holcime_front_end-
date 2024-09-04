import { Box, Heading, Link, Button } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import AnalyseChimiqueForm from "./AnalyseChimiqueForm";
import PhaseGachageForm from "./PhaseGachageForm";
import PhaseTempsPriseForm from "./PhaseTempsPriseForm";
import ProportionForm from "./ProportionForm";
import ResultatAnalysePhysiqueForm from "./ResultatAnalysePhysiqueForm";
import XrfForm from "./XrfForm";
import XrdForm from "./XrdForm";
import LpeeForm from "../../LpeeForm";
import "../../../../style/form.css";
import {
  CloseOutlined
} from "@ant-design/icons";
const FormsContainer = ({ analyseId, onClose }) => {
  const location = useLocation();
  const currentForm = location.hash;

  return (
    <Box className="form_container">
      <Box className="close_placement">
      <Heading className="form_header" as="h3">
        Forms
      </Heading>
      <Button onClick={onClose}  className="close_btn">
      <CloseOutlined className="close" />
      </Button>
      </Box>
      <Box className="form_anchor">
        <Link href="#analyse-chimique">Analyse Chimique</Link>
        <Link href="#phase-gachage">Phase Gachage</Link>
        <Link href="#phase-temps-prise">Phase Temps Prise</Link>
        <Link href="#proportion">Proportion</Link>
        <Link href="#resultat-analyse-physique">Resultat Analyse Physique</Link>
        <Link href="#xrf">Xrf</Link>
        <Link href="#xrd">Xrd</Link>
        <Link href="#lpee">Lpee</Link>
      </Box>
      <Box mt={4}>
        {currentForm === "#analyse-chimique" && (
          <AnalyseChimiqueForm analyseId={analyseId} />
        )}
        {currentForm === "#phase-gachage" && (
          <PhaseGachageForm analyseId={analyseId} />
        )}
        {currentForm === "#phase-temps-prise" && (
          <PhaseTempsPriseForm analyseId={analyseId} />
        )}
        {currentForm === "#proportion" && (
          <ProportionForm analyseId={analyseId} />
        )}
        {currentForm === "#resultat-analyse-physique" && (
          <ResultatAnalysePhysiqueForm analyseId={analyseId} />
        )}
        {currentForm === "#xrf" && (<XrfForm analyseId={analyseId} />)}
        {currentForm === "#xrd" && (<XrdForm analyseId={analyseId} />)}
        {currentForm === "#lpee" && (<LpeeForm analyseId={analyseId} />)}
        {!currentForm && (<AnalyseChimiqueForm analyseId={analyseId} />)}
      </Box>
    </Box>
  );
};

export default FormsContainer;
