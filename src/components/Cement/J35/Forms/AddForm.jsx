import { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { DatePicker, Space } from 'antd';
import axios from "axios";
import dayjs from 'dayjs';

const AddAnalyseForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    date_prelevement: "",
    date_gachage: "",
    destination_id: "",
    point_echantillonage_id: "",
    matiere_id: "3",
    user_id: "1",
  });

  const [destinations, setDestinations] = useState([]);
  const [point_echantillonages, setPoints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const destinationsResponse = await axios.get(
          "http://127.0.0.1:8000/api/destination"
        );
        const pointsResponse = await axios.get(
          "http://127.0.0.1:8000/api/point_echantillonage"
        );
        console.log("Points Response Data:", pointsResponse.data);

        const filteredDestinations = destinationsResponse.data.filter(
          (destination) => destination.matiere.nom === "J35"
        );
        const filteredPoints = pointsResponse.data.filter(
          (point) => point.matiere.nom === "J35"
        );
        setDestinations(filteredDestinations);
        setPoints(filteredPoints);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchOptions();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date, dateString, fieldName) => {
    if (date && dayjs(date).isValid()) {
      setFormData((prev) => ({ ...prev, [fieldName]: dateString }));
    } else {
      setFormData((prev) => ({ ...prev, [fieldName]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/analyse",
        formData
      );
      onAdd(response.data);
    } catch (error) {
      console.error("Error adding data:", error.response ? error.response.data : error.message);
    }
  };

  if (loading) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box as="form" onSubmit={handleSubmit} mb={4}>
      <FormControl>
        <FormLabel>Date Prelevement</FormLabel>
        <Space direction="vertical">
          <DatePicker 
            name="date_prelevement"
            onChange={(date, dateString) => handleDateChange(date, dateString, "date_prelevement")}
            value={formData.date_prelevement ? dayjs(formData.date_prelevement) : null}
          />
        </Space>
      </FormControl>
      <FormControl>
        <FormLabel>Date Gachage</FormLabel>
        <Space direction="vertical">
          <DatePicker 
            name="date_gachage"
            onChange={(date, dateString) => handleDateChange(date, dateString, "date_gachage")}
            value={formData.date_gachage ? dayjs(formData.date_gachage) : null}
          />
        </Space>
      </FormControl>
      <FormControl>
        <FormLabel>Destination</FormLabel>
        <Select
          name="destination_id"
          value={formData.destination_id}
          onChange={handleChange}
        >
          {destinations.map((destination) => (
            <option key={destination.id} value={destination.id}>
              {destination.nom}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Point Echantillonage</FormLabel>
        <Select
          name="point_echantillonage_id"
          value={formData.point_echantillonage_id}
          onChange={handleChange}
        >
          {point_echantillonages.map((point) => (
            <option key={point.id} value={point.id}>
              {point.nom}
            </option>
          ))}
        </Select>
      </FormControl>
      <Button type="submit" colorScheme="blue" mt={4}>
        Add Analyse
      </Button>
    </Box>
  );
};

export default AddAnalyseForm;
