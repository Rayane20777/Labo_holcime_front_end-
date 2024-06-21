import { useState, useEffect } from "react";
import axios from "axios";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const PhaseGachageForm = ({ analyseId, onAdd }) => {
  const [formData, setFormData] = useState({
    temperature: "",
    temperature_salle: "",
    humidite: "",
    p_prisme: "",
    temps_gachage: "",
    temps_casse: "",
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
        "http://127.0.0.1:8000/api/phase_gachage",
        formData
      );
      console.log(response.data);
      onAdd(response.data);
      setFormData({
        temperature: "",
        temperature_salle: "",
        humidite: "",
        p_prisme: "",
        temps_gachage: "",
        temps_casse: "",
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
          <FormLabel>Temperature</FormLabel>
          <Input
            name="temperature"
            value={formData.temperature}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>&gt;Temperature salle</FormLabel>
          <Input
            name="temperature_salle"
            value={formData.temperature_salle}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>&gt;Humidite</FormLabel>
          <Input
            name="humidite"
            value={formData.humidite}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>p_prisme</FormLabel>
          <Input
            name="p_prisme"
            value={formData.p_prisme}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Insoluble</FormLabel>
          <Input
            name="insoluble"
            value={formData.insoluble}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Temps Gachage</FormLabel>
          <Input name="temps_gachage" value={formData.temps_gachage} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Temps Casse</FormLabel>
          <Input name="temps_casse" value={formData.temps_casse} onChange={handleChange} />
        </FormControl>
        <Button colorScheme="blue" type="submit">
          Add Analyse Chimique
        </Button>
      </Box>
    </form>
  );
};

export default PhaseGachageForm;
