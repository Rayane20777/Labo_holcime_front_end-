import { useState, useEffect } from "react";
import axios from "axios";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const PhaseGachageForm = ({ analyseId, onAdd }) => {
  const [formData, setFormData] = useState({
    "1j": "",
    "2j": "",
    "7j": "",
    "28j": "",
    "90j": "",
    w1: "",
    w2: "",
    w3: "",
    w4: "",
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
        "http://127.0.0.1:8000/api/resultat_analyse_physique",
        formData
      );
      console.log(response.data);
      onAdd(response.data);
      setFormData({
        "1j": "",
        "2j": "",
        "7j": "",
        "28j": "",
        "90j": "",
        w1: "",
        w2: "",
        w3: "",
        w4: "",
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
          <FormLabel>1j</FormLabel>
          <Input name="1j" value={formData["1j"]} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>2j </FormLabel>
          <Input name="2j" value={formData["2j"]} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>7j</FormLabel>
          <Input name="7j" value={formData["7j"]} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>28j</FormLabel>
          <Input name="28j" value={formData["28j"]} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>90j</FormLabel>
          <Input name="90j" value={formData["90j"]} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>w1</FormLabel>
          <Input name="w1" value={formData.w1} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>w2</FormLabel>
          <Input name="w2" value={formData.w2} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>w3</FormLabel>
          <Input name="w3" value={formData.w3} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>w4</FormLabel>
          <Input name="w4" value={formData.w4} onChange={handleChange} />
        </FormControl>

        <Button colorScheme="blue" type="submit">
          Add Analyse Chimique
        </Button>
      </Box>
    </form>
  );
};

export default PhaseGachageForm;
