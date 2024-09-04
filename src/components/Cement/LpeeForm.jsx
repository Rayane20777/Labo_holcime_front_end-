import { useState, useEffect } from "react";
import instance from "../../api/api";
import { Button , Heading} from "@chakra-ui/react";
import "../../style/form.css";

const LpeeForm = ({ analyseId, onAdd }) => {
  const [formData, setFormData] = useState({
    P_AF: "",
    SO3: "",
    SiO2: "",
    Fe2O3: "",
    Al2O3: "",
    CaO: "",
    MgO: "",
    Cl: "",
    Na2O: "",
    K2O: "",
    insoluble: "",
    regulateur_de_prise: "",
    ajout_calcaire: "",
    teneur_en_pouzzolane: "",
    clinker: "",
    laitier: "",
    sulfures: "",
    perte_au_feu_500: "",
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
      const response = await instance("post", "lpee", formData);
      console.log(response.data);
      onAdd(response.data);
      setFormData({
        P_AF: "",
        SO3: "",
        SiO2: "",
        Fe2O3: "",
        Al2O3: "",
        CaO: "",
        MgO: "",
        Cl: "",
        Na2O: "",
        K2O: "",
        insoluble: "",
        regulateur_de_prise: "",
        ajout_calcaire: "",
        teneur_en_pouzzolane: "",
        clinker: "",
        laitier: "",
        sulfures: "",
        perte_au_feu_500: "",
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
              placeholder="Perte au feu"
              className="form__input"
              id="P_AF"
              name="P_AF"
              value={formData.P_AF}
              onChange={handleChange}
            />
            <label htmlFor="P_AF" className="form__label">
              Perte au feu
            </label>

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

            <input
              type="text"
              placeholder="Chlorures"
              className="form__input"
              id="Cl"
              name="Cl"
              value={formData.Cl}
              onChange={handleChange}
            />
            <label htmlFor="Cl" className="form__label">
              Chlorures
            </label>

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
          <div className="halfed">
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

            <input
              type="text"
              placeholder="Résidu insoluble"
              className="form__input"
              id="insoluble"
              name="insoluble"
              value={formData.insoluble}
              onChange={handleChange}
            />
            <label htmlFor="insoluble" className="form__label">
              Résidu insoluble
            </label>
            <input
              type="text"
              placeholder="Régulateur de prise"
              className="form__input"
              id="regulateur_de_prise"
              name="regulateur_de_prise"
              value={formData.regulateur_de_prise}
              onChange={handleChange}
            />
            <label htmlFor="regulateur_de_prise" className="form__label">
              Régulateur de prise
            </label>

            <input
              type="text"
              placeholder="Ajout calcaire"
              className="form__input"
              id="ajout_calcaire"
              name="ajout_calcaire"
              value={formData.ajout_calcaire}
              onChange={handleChange}
            />
            <label htmlFor="ajout_calcaire" className="form__label">
              Ajout calcaire
            </label>

            <input
              type="text"
              placeholder="Teneur en pouzzolane"
              className="form__input"
              id="teneur_en_pouzzolane"
              name="teneur_en_pouzzolane"
              value={formData.teneur_en_pouzzolane}
              onChange={handleChange}
            />
            <label htmlFor="teneur_en_pouzzolane" className="form__label">
              Teneur en pouzzolane
            </label>

            <input
              type="text"
              placeholder="Clinker"
              className="form__input"
              id="clinker"
              name="clinker"
              value={formData.clinker}
              onChange={handleChange}
            />
            <label htmlFor="clinker" className="form__label">
              Clinker
            </label>

            <input
              type="text"
              placeholder="Laitier"
              className="form__input"
              id="laitier"
              name="laitier"
              value={formData.laitier}
              onChange={handleChange}
            />
            <label htmlFor="laitier" className="form__label">
              Laitier
            </label>

            <input
              type="text"
              placeholder="Sulfures"
              className="form__input"
              id="sulfures"
              name="sulfures"
              value={formData.sulfures}
              onChange={handleChange}
            />
            <label htmlFor="sulfures" className="form__label">
              Sulfures
            </label>

            <input
              type="text"
              placeholder="Perte au feu (500°C)"
              className="form__input"
              id="perte_au_feu_500"
              name="perte_au_feu_500"
              value={formData.perte_au_feu_500}
              onChange={handleChange}
            />
            <label htmlFor="perte_au_feu_500" className="form__label">
              Perte au feu (500°C)
            </label>
          </div>
        </div>
      </div>
      <Button
        style={{
          backgroundColor: "#b3ba80",
        }}
        colorScheme="blue"
        type="submit"
      >
        Add Analyse Chimique
      </Button>
    </form>
  );
};

export default LpeeForm;
