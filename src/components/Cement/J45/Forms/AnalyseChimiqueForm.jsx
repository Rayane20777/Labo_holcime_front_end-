import { useState, useEffect } from "react";
import axios from "axios";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const AnalyseChimiqueForm = ({ analyseId, onAdd }) => {
  const [formData, setFormData] = useState({
    finesse_2_32: "",
    finesse_40: "",
    finesse_80: "",
    SSB: "",
    insoluble: "",
    CO2: "",
    PF: "",
    Cl: "",
    H41: "",
    S2: "",
    CaOl: "",
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
        "http://127.0.0.1:8000/api/analyse_chimique",
        formData
      );
      console.log(response.data);
      onAdd(response.data);
      setFormData({
        finesse_2_32: "",
        finesse_40: "",
        finesse_80: "",
        SSB: "",
        insoluble: "",
        CO2: "",
        PF: "",
        Cl: "",
        H41: "",
        S2: "",
        CaOl: "",
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
          <FormLabel>2-32µm</FormLabel>
          <Input
            name="finesse_2_32"
            value={formData.finesse_2_32}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>&gt;45µm</FormLabel>
          <Input
            name="finesse_40"
            value={formData.finesse_40}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>&gt;80µm</FormLabel>
          <Input
            name="finesse_80"
            value={formData.finesse_80}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>SSB</FormLabel>
          <Input name="SSB" value={formData.SSB} onChange={handleChange} />
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
          <FormLabel>CO2</FormLabel>
          <Input name="CO2" value={formData.CO2} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>PF</FormLabel>
          <Input name="PF" value={formData.PF} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Cl</FormLabel>
          <Input name="Cl" value={formData.Cl} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>H41</FormLabel>
          <Input name="H41" value={formData.H41} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>S2-</FormLabel>
          <Input name="S2" value={formData.S2} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>CaOl</FormLabel>
          <Input name="CaOl" value={formData.CaOl} onChange={handleChange} />
        </FormControl>
        <Button colorScheme="blue" type="submit">
          Add Analyse Chimique
        </Button>
      </Box>
    </form>
  );
};

export default AnalyseChimiqueForm;
