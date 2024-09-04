import { useState, useEffect } from "react";
import instance from "../../../../api/api";
import { Button , Heading} from "@chakra-ui/react";

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
      const response = await instance("post","xrf", formData);
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
    <form onSubmit={handleSubmit} className="form">
      <div className="inputs_container">
        <div className="half">
          <div className="halfed">
            <div className="form-group">
              <input
                type="text"
                placeholder="SiO2"
                className="form__input"
                id="SiO2"
                name="SiO2"
                value={formData.SiO2}
                onChange={handleChange}
              />
              <label htmlFor="SiO2" className="form__label">
                SiO2
              </label>
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="Al2O3"
                className="form__input"
                id="Al2O3"
                name="Al2O3"
                value={formData.Al2O3}
                onChange={handleChange}
              />
              <label htmlFor="Al2O3" className="form__label">
                Al2O3
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="MgO"
                className="form__input"
                id="MgO"
                name="MgO"
                value={formData.MgO}
                onChange={handleChange}
              />
              <label htmlFor="MgO" className="form__label">
                MgO
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="SO3"
                className="form__input"
                id="SO3"
                name="SO3"
                value={formData.SO3}
                onChange={handleChange}
              />
              <label htmlFor="SO3" className="form__label">
                SO3
              </label>
            </div>
          </div>

          <div className="halfed">
            <div className="form-group">
              <input
                type="text"
                placeholder="Fe2O3"
                className="form__input"
                id="Fe2O3"
                name="Fe2O3"
                value={formData.Fe2O3}
                onChange={handleChange}
              />
              <label htmlFor="Fe2O3" className="form__label">
                Fe2O3
              </label>
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="CaO"
                className="form__input"
                id="CaO"
                name="CaO"
                value={formData.CaO}
                onChange={handleChange}
              />
              <label htmlFor="CaO" className="form__label">
                CaO
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="K2O"
                className="form__input"
                id="K2O"
                name="K2O"
                value={formData.K2O}
                onChange={handleChange}
              />
              <label htmlFor="K2O" className="form__label">
                K2O
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Na2O"
                className="form__input"
                id="Na2O"
                name="Na2O"
                value={formData.Na2O}
                onChange={handleChange}
              />
              <label htmlFor="Na2O" className="form__label">
                Na2O
              </label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="P2O5"
            className="form__input"
            id="P2O5"
            name="P2O5"
            value={formData.P2O5}
            onChange={handleChange}
          />
          <label htmlFor="P2O5" className="form__label">
            P2O5
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
