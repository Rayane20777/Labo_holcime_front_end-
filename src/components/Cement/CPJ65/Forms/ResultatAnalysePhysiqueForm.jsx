import { useState, useEffect } from "react";
import instance from "../../../../api/api";
import { Button , Heading} from "@chakra-ui/react";

const PhaseGachageForm = ({ analyseId, onAdd }) => {
  const [formData, setFormData] = useState({
    "1j": "",
    "2j": "",
    "7j": "",
    "28j": "",
    "90j": "",
  
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
        "resultat_analyse_physique",
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
              placeholder="1j"
              className="form__input"
              id="1j"
              name="1j"
              value={formData["1j"]}
              onChange={handleChange}
            />
            <label htmlFor="1j" className="form__label">
              1j
            </label>
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="2j"
              className="form__input"
              id="2j"
              name="2j"
              value={formData["2j"]}
              onChange={handleChange}
            />
            <label htmlFor="2j" className="form__label">
              2j
            </label>
          </div>
        </div>

        <div className="halfed">
          <div className="form-group">
            <input
              type="text"
              placeholder="7j"
              className="form__input"
              id="7j"
              name="7j"
              value={formData["7j"]}
              onChange={handleChange}
            />
            <label htmlFor="7j" className="form__label">
              7j
            </label>
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="28j"
              className="form__input"
              id="28j"
              name="28j"
              value={formData["28j"]}
              onChange={handleChange}
            />
            <label htmlFor="28j" className="form__label">
              28j
            </label>
          </div>
        </div>
      </div>
      
      <div className="form-group">
        <input
          type="text"
          placeholder="90j"
          className="form__input"
          id="90j"
          name="90j"
          value={formData["90j"]}
          onChange={handleChange}
        />
        <label htmlFor="90j" className="form__label">
          90j
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
