import { useState, useEffect } from "react";
import axios from "axios";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const PhaseGachageForm = ({ analyseId, onAdd }) => {
  const [formData, setFormData] = useState({
    SiO2: "",
    Al2O3: "",
    Fe2O3: "",
    CaO: "",
    MgO: "",
    SO3: "",
    K2O: "",
    Na2O: "",
    P2O5: "",
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
        "http://127.0.0.1:8000/api/xrf",
        formData
      );
      console.log(response.data);
      onAdd(response.data);
      setFormData({
        SiO2: "",
        Al2O3: "",
        Fe2O3: "",
        CaO: "",
        MgO: "",
        SO3: "",
        K2O: "",
        Na2O: "",
        P2O5: "",
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
          <FormLabel>SiO2 </FormLabel>
          <Input name="SiO2" value={formData.SiO2} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>&gt;Al2O3 </FormLabel>
          <Input name="Al2O3" value={formData.Al2O3} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>&gt;Fe2O3 </FormLabel>
          <Input name="Fe2O3" value={formData.Fe2O3} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>CaO</FormLabel>
          <Input name="CaO" value={formData.CaO} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>MgO</FormLabel>
          <Input name="MgO" value={formData.MgO} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>SO3</FormLabel>
          <Input name="SO3" value={formData.SO3} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>K2O</FormLabel>
          <Input name="K2O" value={formData.K2O} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Na2O</FormLabel>
          <Input name="Na2O" value={formData.Na2O} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>P2O5</FormLabel>
          <Input name="P2O5" value={formData.P2O5} onChange={handleChange} />
        </FormControl>
        <Button colorScheme="blue" type="submit">
          Add Analyse Chimique
        </Button>
      </Box>
    </form>
  );
};

export default PhaseGachageForm;
