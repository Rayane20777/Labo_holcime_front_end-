import { useState, useEffect } from "react";
import instance from "../../../../api/api";
import { Button , Heading} from "@chakra-ui/react";
import "../../../../style/form.css";

const AnalyseChimiqueForm = ({ analyseId, onAdd }) => {
  const [formData, setFormData] = useState({
    finesse_2_32: "",
    finesse_45: "",
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
      const response = await instance("post", "analyse_chimique", formData);
      console.log(response.data);
      onAdd(response.data);
      setFormData({
        finesse_2_32: "",
        finesse_45: "",
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
      <form onSubmit={handleSubmit} className="form">
        <div className="inputs_container">
        <div className="half">
          <div className="halfed">
            <input
              type="text"
              placeholder="2-32µm"
              className="form__input"
              id="finesse_2_32"
              name="finesse_2_32"
              value={formData.finesse_2_32}
              onChange={handleChange}
            />
            <label htmlFor="finesse_2_32" className="form__label">
              2-32µm
            </label>

            <input
              type="text"
              placeholder=">45µm"
              className="form__input"
              id="finesse_45"
              name="finesse_45"
              value={formData.finesse_45}
              onChange={handleChange}
            />
            <label htmlFor="finesse_45" className="form__label">
              45µm
            </label>

            <input
              type="text"
              placeholder=">80µm"
              className="form__input"
              id="finesse_80"
              name="finesse_80"
              value={formData.finesse_80}
              onChange={handleChange}
            />
            <label htmlFor="finesse_80" className="form__label">
              80µm
            </label>

            <input
              type="text"
              placeholder="SSB"
              className="form__input"
              id="SSB"
              name="SSB"
              value={formData.SSB}
              onChange={handleChange}
            />
            <label htmlFor="SSB" className="form__label">
              SSB
            </label>

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
          <div className="halfed">
            <input
              type="text"
              placeholder="CO2"
              className="form__input"
              id="CO2"
              name="CO2"
              value={formData.CO2}
              onChange={handleChange}
            />
            <label htmlFor="CO2" className="form__label">
              CO2
            </label>

            <input
              type="text"
              placeholder="PF"
              className="form__input"
              id="PF"
              name="PF"
              value={formData.PF}
              onChange={handleChange}
            />
            <label htmlFor="PF" className="form__label">
              PF
            </label>

            <input
              type="text"
              placeholder="Cl"
              className="form__input"
              id="Cl"
              name="Cl"
              value={formData.Cl}
              onChange={handleChange}
            />
            <label htmlFor="Cl" className="form__label">
              Cl
            </label>

            <input
              type="text"
              placeholder="H41"
              className="form__input"
              id="H41"
              name="H41"
              value={formData.H41}
              onChange={handleChange}
            />
            <label htmlFor="H41" className="form__label">
              H41
            </label>

            <input
              type="text"
              placeholder="S2-"
              className="form__input"
              id="S2"
              name="S2"
              value={formData.S2}
              onChange={handleChange}
            />
            <label htmlFor="S2" className="form__label">
              S2-
            </label>
          </div>
        </div>
        <input
          type="text"
          placeholder="CaOl"
          className="form__input"
          id="CaOl"
          name="CaOl"
          value={formData.CaOl}
          onChange={handleChange}
        />
        <label htmlFor="CaOl" className="form__label">
          CaOl
        </label>
        </div>
        <Button
        style={{
          backgroundColor: "#b3ba80"
        }}
        colorScheme="blue" type="submit">
          Add Analyse Chimique
        </Button>
      </form>
  );
};

export default AnalyseChimiqueForm;
