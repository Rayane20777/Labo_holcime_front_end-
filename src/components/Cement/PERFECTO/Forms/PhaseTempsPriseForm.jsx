import { useState, useEffect } from "react";
import axios from "axios";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const PhaseGachageForm = ({ analyseId, onAdd }) => {
  const [formData, setFormData] = useState({
    mass_volumique: "",
    debut_de_prise: "",
    fin_de_prise: "",
    expention: "",
    eau_gach: "",
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
        "http://127.0.0.1:8000/api/phase_temps_prise",
        formData
      );
      console.log(response.data);
      onAdd(response.data);
      setFormData({
        mass_volumique: "",
        debut_de_prise: "",
        fin_de_prise: "",
        expention: "",
        eau_gach: "",
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
          <FormLabel>Masse volumique</FormLabel>
          <Input
            name="mass_volumique"
            value={formData.mass_volumique}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>&gt;Temperature salle</FormLabel>
          <Input
            name="debut_de_prise"
            value={formData.debut_de_prise}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>&gt;Humidi te</FormLabel>
          <Input
            name="fin_de_prise"
            value={formData.fin_de_prise}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>p_prisme</FormLabel>
          <Input
            name="expention"
            value={formData.expention}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Insoluble</FormLabel>
          <Input
            name="eau_gach"
            value={formData.eau_gach}
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
