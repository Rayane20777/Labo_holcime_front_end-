import { useState, useEffect } from "react";
import instance from "../../../../api/api";
import { Button , Heading} from "@chakra-ui/react";

const PhaseGachageForm = ({ analyseId, onAdd }) => {
  const [formData, setFormData] = useState({
    KK_G: "",
    CAL_G: "",
    CV_G: "",
    LAIT_G: "",
    GYPSE: "",
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
      const response = await instance("post","proportion", formData);
      console.log(response.data);
      onAdd(response.data);
      setFormData({
        KK_G: "",
        CAL_G: "",
        CV_G: "",
        LAIT_G: "",
        GYPSE: "",
       
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
                placeholder="KK_G"
                className="form__input"
                id="KK_G"
                name="KK_G"
                value={formData.KK_G}
                onChange={handleChange}
              />
              <label htmlFor="KK_G" className="form__label">
                KK_G
              </label>
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="CAL_G"
                className="form__input"
                id="CAL_G"
                name="CAL_G"
                value={formData.CAL_G}
                onChange={handleChange}
              />
              <label htmlFor="CAL_G" className="form__label">
                CAL_G
              </label>
            </div>

           

           
          </div>

          <div className="halfed">
          <div className="form-group">
              <input
                type="text"
                placeholder="CV_G"
                className="form__input"
                id="CV_G"
                name="CV_G"
                value={formData.CV_G}
                onChange={handleChange}
              />
              <label htmlFor="CV_G" className="form__label">
                CV_G
              </label>
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="LAIT_G"
                className="form__input"
                id="LAIT_G"
                name="LAIT_G"
                value={formData.LAIT_G}
                onChange={handleChange}
              />
              <label htmlFor="LAIT_G" className="form__label">
                LAIT_G
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
              <input
                type="text"
                placeholder="GYPSE"
                className="form__input"
                id="GYPSE"
                name="GYPSE"
                value={formData.GYPSE}
                onChange={handleChange}
              />
              <label htmlFor="GYPSE" className="form__label">
                GYPSE
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
