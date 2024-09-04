import { useState, useEffect } from "react";
import instance from "../../../../api/api";
import {  Button } from "@chakra-ui/react";

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
      const response = await instance("post",
        "phase_temps_prise",
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
    <form onSubmit={handleSubmit} className="form">
    <div className="inputs_container">
      <div className="half">
        <div className="halfed">
          <div className="form-group">
            <input
              type="text"
              placeholder="Masse volumique"
              className="form__input"
              id="mass_volumique"
              name="mass_volumique"
              value={formData.mass_volumique}
              onChange={handleChange}
            />
            <label htmlFor="mass_volumique" className="form__label">
              Masse volumique
            </label>
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Début de prise"
              className="form__input"
              id="debut_de_prise"
              name="debut_de_prise"
              value={formData.debut_de_prise}
              onChange={handleChange}
            />
            <label htmlFor="debut_de_prise" className="form__label">
              Début de prise
            </label>
          </div>
        </div>

        <div className="halfed">
          <div className="form-group">
            <input
              type="text"
              placeholder="Fin de prise"
              className="form__input"
              id="fin_de_prise"
              name="fin_de_prise"
              value={formData.fin_de_prise}
              onChange={handleChange}
            />
            <label htmlFor="fin_de_prise" className="form__label">
              Fin de prise
            </label>
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Expention"
              className="form__input"
              id="expention"
              name="expention"
              value={formData.expention}
              onChange={handleChange}
            />
            <label htmlFor="expention" className="form__label">
              Expention
            </label>
          </div>
        </div>
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Eau gâchée"
          className="form__input"
          id="eau_gach"
          name="eau_gach"
          value={formData.eau_gach}
          onChange={handleChange}
        />
        <label htmlFor="eau_gach" className="form__label">
          Eau gâchée
        </label>
      </div>
    </div>

    <Button style={{ backgroundColor: "#b3ba80" }} type="submit">
      Add Analyse Chimique
    </Button>
  </form>
  );
};

export default PhaseGachageForm;
