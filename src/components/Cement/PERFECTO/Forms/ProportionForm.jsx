import { useState, useEffect } from "react";
import axios from "axios";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const PhaseGachageForm = ({ analyseId, onAdd }) => {
  const [formData, setFormData] = useState({
    KK_G: "",
    CAL_G: "",
    CV_G: "",
    LAIT_G: "",
    GYPSE: "",
    KK_NG: "",
    CAL_NG: "",
    CV_NG: "",
    LAIT_NG: "",
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
        "http://127.0.0.1:8000/api/proportion",
        formData
      );
      console.log(response.data);
      onAdd(response.data);
      setFormData({
        KK_G: "",
        CAL_G: "",
        CV_G: "",
        LAIT_G: "",
        GYPSE: "",
        KK_NG: "",
        CAL_NG: "",
        CV_NG: "",
        LAIT_NG: "",
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
          <FormLabel>KK_G</FormLabel>
          <Input name="KK_G" value={formData.KK_G} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>&gt; CAL_G </FormLabel>
          <Input name="CAL_G" value={formData.CAL_G} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>&gt;CV_G</FormLabel>
          <Input name="CV_G" value={formData.CV_G} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>LAIT_G</FormLabel>
          <Input
            name="LAIT_G"
            value={formData.LAIT_G}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>GYPSE</FormLabel>
          <Input name="GYPSE" value={formData.GYPSE} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>KK_NG</FormLabel>
          <Input name="KK_NG" value={formData.KK_NG} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>CAL_NG</FormLabel>
          <Input
            name="CAL_NG"
            value={formData.CAL_NG}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>CV_NG</FormLabel>
          <Input name="CV_NG" value={formData.CV_NG} onChange={handleChange} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>LAIT_NG</FormLabel>
          <Input
            name="LAIT_NG"
            value={formData.LAIT_NG}
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
