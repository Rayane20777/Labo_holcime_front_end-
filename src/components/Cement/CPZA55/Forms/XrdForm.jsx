import { useState, useEffect } from "react";
import axios from "axios";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const PhaseGachageForm = ({ analyseId, onAdd }) => {
  const [formData, setFormData] = useState({
    GOF: "",
    R_wp: "",
    R_exp: "",
    Displacement: "",
    Alite_M3: "",
    Alite_M1: "",
    Alite_Sum: "",
    Fraction_M1: "",
    Alite_CS: "",
    Alite_PO: "",
    Belite_beta: "",
    Belite_alpha: "",
    Belite_alpha_H: "",
    Belite_gamma: "",
    Belite_Sum: "",
    Alum_cubic: "",
    Alum_ortho: "",
    Alum_mono: "",
    Alum_Sum: "",
    Ferrite: "",
    Lime: "",
    Portlandite: "",
    fCaO_XRD: "",
    Periclase: "",
    Quartz: "",
    Arcanite: "",
    Thenardite: "",
    Langbeinite: "",
    Aphthitalite: "",
    Gypsum: "",
    Hemi_Hydrate: "",
    Anhydrite: "",
    Calcite: "",
    Dolomite: "",
    Mullite: "",
    Magnetite: "",
    Hematite: "",
    Flyash_amorph: "",
    FA_Sum: "",
    Syngenite: "",
    Albite: "",
    Anorthite: "",
    Andesine: "",
    K_Feldspar: "",
    Illite: "",
    Feldspar_Sum: "",
    SO3_XRD: "",
    CO2_XRD: "",
    analyse_id: analyseId ? analyseId.toString() : "",
  });

  useEffect(() => {
    // Update formData when analyseId changes
    setFormData((prevData) => ({
      ...prevData,
      analyse_id: analyseId ? analyseId.toString() : "",
    }));
  }, [analyseId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("analyseId:", analyseId);
    console.log("formData:", formData);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/xrd",
        formData
      );
      console.log(response.data);
      onAdd(response.data);
      setFormData({
        GOF: "",
        R_wp: "",
        R_exp: "",
        Displacement: "",
        Alite_M3: "",
        Alite_M1: "",
        Alite_Sum: "",
        Fraction_M1: "",
        Alite_CS: "",
        Alite_PO: "",
        Belite_beta: "",
        Belite_alpha: "",
        Belite_alpha_H: "",
        Belite_gamma: "",
        Belite_Sum: "",
        Alum_cubic: "",
        Alum_ortho: "",
        Alum_mono: "",
        Alum_Sum: "",
        Ferrite: "",
        Lime: "",
        Portlandite: "",
        fCaO_XRD: "",
        Periclase: "",
        Quartz: "",
        Arcanite: "",
        Thenardite: "",
        Langbeinite: "",
        Aphthitalite: "",
        Gypsum: "",
        Hemi_Hydrate: "",
        Anhydrite: "",
        Calcite: "",
        Dolomite: "",
        Mullite: "",
        Magnetite: "",
        Hematite: "",
        Flyash_amorph: "",
        FA_Sum: "",
        Syngenite: "",
        Albite: "",
        Anorthite: "",
        Andesine: "",
        K_Feldspar: "",
        Illite: "",
        Feldspar_Sum: "",
        SO3_XRD: "",
        CO2_XRD: "",
        analyse_id: analyseId ? analyseId.toString() : "",
      });
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box mb={4}>
        <FormControl mb={4}>
          <FormLabel>GOF</FormLabel>
          <Input name="GOF" value={formData.GOF} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>R_wp</FormLabel>
          <Input name="R_wp" value={formData.R_wp} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>R_exp</FormLabel>
          <Input name="R_exp" value={formData.R_exp} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Displacement</FormLabel>
          <Input
            name="Displacement"
            value={formData.Displacement}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Alite_M3</FormLabel>
          <Input
            name="Alite_M3"
            value={formData.Alite_M3}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Alite_M1</FormLabel>
          <Input
            name="Alite_M1"
            value={formData.Alite_M1}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Alite_Sum</FormLabel>
          <Input
            name="Alite_Sum"
            value={formData.Alite_Sum}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Fraction_M1</FormLabel>
          <Input
            name="Fraction_M1"
            value={formData.Fraction_M1}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Alite_CS</FormLabel>
          <Input
            name="Alite_CS"
            value={formData.Alite_CS}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Alite_PO</FormLabel>
          <Input
            name="Alite_PO"
            value={formData.Alite_PO}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Belite_beta</FormLabel>
          <Input
            name="Belite_beta"
            value={formData.Belite_beta}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Belite_alpha</FormLabel>
          <Input
            name="Belite_alpha"
            value={formData.Belite_alpha}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Belite_alpha_H</FormLabel>
          <Input
            name="Belite_alpha_H"
            value={formData.Belite_alpha_H}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Belite_gamma</FormLabel>
          <Input
            name="Belite_gamma"
            value={formData.Belite_gamma}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Belite_Sum</FormLabel>
          <Input
            name="Belite_Sum"
            value={formData.Belite_Sum}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Alum_cubic</FormLabel>
          <Input
            name="Alum_cubic"
            value={formData.Alum_cubic}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Alum_ortho</FormLabel>
          <Input
            name="Alum_ortho"
            value={formData.Alum_ortho}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Alum_mono</FormLabel>
          <Input
            name="Alum_mono"
            value={formData.Alum_mono}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Alum_Sum</FormLabel>
          <Input
            name="Alum_Sum"
            value={formData.Alum_Sum}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Ferrite</FormLabel>
          <Input
            name="Ferrite"
            value={formData.Ferrite}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Lime</FormLabel>
          <Input name="Lime" value={formData.Lime} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Portlandite</FormLabel>
          <Input
            name="Portlandite"
            value={formData.Portlandite}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>fCaO_XRD</FormLabel>
          <Input
            name="fCaO_XRD"
            value={formData.fCaO_XRD}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Periclase</FormLabel>
          <Input
            name="Periclase"
            value={formData.Periclase}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Quartz</FormLabel>
          <Input
            name="Quartz"
            value={formData.Quartz}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Arcanite</FormLabel>
          <Input
            name="Arcanite"
            value={formData.Arcanite}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Thenardite</FormLabel>
          <Input
            name="Thenardite"
            value={formData.Thenardite}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Langbeinite</FormLabel>
          <Input
            name="Langbeinite"
            value={formData.Langbeinite}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Aphthitalite</FormLabel>
          <Input
            name="Aphthitalite"
            value={formData.Aphthitalite}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Gypsum</FormLabel>
          <Input
            name="Gypsum"
            value={formData.Gypsum}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Hemi_Hydrate</FormLabel>
          <Input
            name="Hemi_Hydrate"
            value={formData.Hemi_Hydrate}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Anhydrite</FormLabel>
          <Input
            name="Anhydrite"
            value={formData.Anhydrite}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Calcite</FormLabel>
          <Input
            name="Calcite"
            value={formData.Calcite}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Dolomite</FormLabel>
          <Input
            name="Dolomite"
            value={formData.Dolomite}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Mullite</FormLabel>
          <Input
            name="Mullite"
            value={formData.Mullite}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Magnetite</FormLabel>
          <Input
            name="Magnetite"
            value={formData.Magnetite}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Hematite</FormLabel>
          <Input
            name="Hematite"
            value={formData.Hematite}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Flyash_amorph</FormLabel>
          <Input
            name="Flyash_amorph"
            value={formData.Flyash_amorph}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>FA_Sum</FormLabel>
          <Input
            name="FA_Sum"
            value={formData.FA_Sum}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Syngenite</FormLabel>
          <Input
            name="Syngenite"
            value={formData.Syngenite}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Albite</FormLabel>
          <Input
            name="Albite"
            value={formData.Albite}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Anorthite</FormLabel>
          <Input
            name="Anorthite"
            value={formData.Anorthite}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Andesine</FormLabel>
          <Input
            name="Andesine"
            value={formData.Andesine}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>K_Feldspar</FormLabel>
          <Input
            name="K_Feldspar"
            value={formData.K_Feldspar}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Illite</FormLabel>
          <Input
            name="Illite"
            value={formData.Illite}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Feldspar_Sum</FormLabel>
          <Input
            name="Feldspar_Sum"
            value={formData.Feldspar_Sum}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>SO3_XRD</FormLabel>
          <Input
            name="SO3_XRD"
            value={formData.SO3_XRD}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>CO2_XRD</FormLabel>
          <Input
            name="CO2_XRD"
            value={formData.CO2_XRD}
            onChange={handleChange}
          />
        </FormControl>
        <Button colorScheme="blue" type="submit">
          Add Analyse Chimique
        </Button>
      </Box>
    </form>
  );
};

export default PhaseGachageForm;
