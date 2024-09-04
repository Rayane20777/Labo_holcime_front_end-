import { useState, useEffect } from "react";
import instance from "../../../../api/api";
import { Button , Heading} from "@chakra-ui/react";

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
      const response = await instance("post","phase_gachage", formData);
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
    <>
    <Heading
      style={{
        marginLeft:"20px"
      }}
      >Analyse chimique</Heading>
    <form onSubmit={handleSubmit} className="form">
      <div className="inputs_container">
        <div className="half">
          <div className="halfed">
            <div className="form-group">
              <input
                type="text"
                placeholder="Temperature"
                className="form__input"
                id="temperature"
                name="temperature"
                value={formData.temperature}
                onChange={handleChange}
              />
              <label htmlFor="temperature" className="form__label">
                Temperature
              </label>
            </div>

            <div className="form-group">
            <input
          type="text"
          placeholder="p_prisme"
          className="form__input"
          id="p_prisme"
          name="p_prisme"
          value={formData.p_prisme}
          onChange={handleChange}
        />
        <label htmlFor="p_prisme" className="form__label">
          p_prisme
        </label>
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="Humidite"
                className="form__input"
                id="humidite"
                name="humidite"
                value={formData.humidite}
                onChange={handleChange}
              />
              <label htmlFor="humidite" className="form__label">
                Humidite
              </label>
            </div>

            <div className="form-group"></div>
          </div>

          <div className="halfed">
            <div className="form-group">
              <input
                type="text"
                placeholder="Insoluble"
                className="form__input"
                id="insoluble"
                name="insoluble"
                value={formData.insoluble}
                onChange={handleChange}
              />
              <label htmlFor="insoluble" className="form__label">
                Insoluble
              </label>
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="Temps Gachage"
                className="form__input"
                id="temps_gachage"
                name="temps_gachage"
                value={formData.temps_gachage}
                onChange={handleChange}
              />
              <label htmlFor="temps_gachage" className="form__label">
                Temps Gachage
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Temps Casse"
                className="form__input"
                id="temps_casse"
                name="temps_casse"
                value={formData.temps_casse}
                onChange={handleChange}
              />
              <label htmlFor="temps_casse" className="form__label">
                Temps Casse
              </label>
            </div>
          </div>
        </div>
        <input
                type="text"
                placeholder="Temperature salle"
                className="form__input"
                id="temperature_salle"
                name="temperature_salle"
                value={formData.temperature_salle}
                onChange={handleChange}
              />
              <label htmlFor="temperature_salle" className="form__label">
                Temperature salle
              </label>
      </div>

      <Button
        style={{ backgroundColor: "#b3ba80" }}
        colorScheme="blue"
        type="submit"
      >
        Add Analyse Chimique
      </Button>
    </form>
    </>
  );
};

export default PhaseGachageForm;
