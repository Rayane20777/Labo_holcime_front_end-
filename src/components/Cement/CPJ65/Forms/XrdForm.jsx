import { useState, useEffect } from "react";
import instance from "../../../../api/api";
import { Button , Heading} from "@chakra-ui/react";

const PhaseGachageForm = ({ analyseId, onAdd }) => {
  const [formData, setFormData] = useState({
    GOF: "",
    R_wp: "",
    R_exp: "",
    Displacement: "",
    Alite_M3: "",
    Alite_M1: "",
    Alite_Sum: "",
    Fraction_M1: "",
    Alite_CS: "",
    Alite_PO: "",
    Belite_beta: "",
    Belite_alpha: "",
    Belite_alpha_H: "",
    Belite_gamma: "",
    Belite_Sum: "",
    Alum_cubic: "",
    Alum_ortho: "",
    Alum_mono: "",
    Alum_Sum: "",
    Ferrite: "",
    Lime: "",
    Portlandite: "",
    fCaO_XRD: "",
    Periclase: "",
    Quartz: "",
    Arcanite: "",
    Thenardite: "",
    Langbeinite: "",
    Aphthitalite: "",
    Gypsum: "",
    Hemi_Hydrate: "",
    Anhydrite: "",
    Calcite: "",
    Dolomite: "",
    Mullite: "",
    Magnetite: "",
    Hematite: "",
    Flyash_amorph: "",
    FA_Sum: "",
    Syngenite: "",
    Albite: "",
    Anorthite: "",
    Andesine: "",
    K_Feldspar: "",
    Illite: "",
    Feldspar_Sum: "",
    SO3_XRD: "",
    CO2_XRD: "",
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
      const response = await instance("post", "xrd", formData);
      console.log(response.data);
      onAdd(response.data);
      setFormData({
        GOF: "",
        R_wp: "",
        R_exp: "",
        Displacement: "",
        Alite_M3: "",
        Alite_M1: "",
        Alite_Sum: "",
        Fraction_M1: "",
        Alite_CS: "",
        Alite_PO: "",
        Belite_beta: "",
        Belite_alpha: "",
        Belite_alpha_H: "",
        Belite_gamma: "",
        Belite_Sum: "",
        Alum_cubic: "",
        Alum_ortho: "",
        Alum_mono: "",
        Alum_Sum: "",
        Ferrite: "",
        Lime: "",
        Portlandite: "",
        fCaO_XRD: "",
        Periclase: "",
        Quartz: "",
        Arcanite: "",
        Thenardite: "",
        Langbeinite: "",
        Aphthitalite: "",
        Gypsum: "",
        Hemi_Hydrate: "",
        Anhydrite: "",
        Calcite: "",
        Dolomite: "",
        Mullite: "",
        Magnetite: "",
        Hematite: "",
        Flyash_amorph: "",
        FA_Sum: "",
        Syngenite: "",
        Albite: "",
        Anorthite: "",
        Andesine: "",
        K_Feldspar: "",
        Illite: "",
        Feldspar_Sum: "",
        SO3_XRD: "",
        CO2_XRD: "",
        analyse_id: analyseId ? analyseId.toString() : "",
      });
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="inputs_container">
        <div className="xrd_half">
          <div className="halfed">
            <div className="form-group">
              <input
                type="text"
                placeholder="GOF"
                className="form__input"
                id="GOF"
                name="GOF"
                value={formData.GOF}
                onChange={handleChange}
              />
              <label htmlFor="GOF" className="form__label">
                GOF
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="R_wp"
                className="form__input"
                id="R_wp"
                name="R_wp"
                value={formData.R_wp}
                onChange={handleChange}
              />
              <label htmlFor="R_wp" className="form__label">
                R_wp
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="R_exp"
                className="form__input"
                id="R_exp"
                name="R_exp"
                value={formData.R_exp}
                onChange={handleChange}
              />
              <label htmlFor="R_exp" className="form__label">
                R_exp
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Displacement"
                className="form__input"
                id="Displacement"
                name="Displacement"
                value={formData.Displacement}
                onChange={handleChange}
              />
              <label htmlFor="Displacement" className="form__label">
                Displacement
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Alite_CS"
                className="form__input"
                id="Alite_CS"
                name="Alite_CS"
                value={formData.Alite_CS}
                onChange={handleChange}
              />
              <label htmlFor="Alite_CS" className="form__label">
                Alite_CS
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Alite_PO"
                className="form__input"
                id="Alite_PO"
                name="Alite_PO"
                value={formData.Alite_PO}
                onChange={handleChange}
              />
              <label htmlFor="Alite_PO" className="form__label">
                Alite_PO
              </label>
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="Belite_gamma"
                className="form__input"
                id="Belite_gamma"
                name="Belite_gamma"
                value={formData.Belite_gamma}
                onChange={handleChange}
              />
              <label htmlFor="Belite_gamma" className="form__label">
                Belite_gamma
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Alum_ortho"
                className="form__input"
                id="Alum_ortho"
                name="Alum_ortho"
                value={formData.Alum_ortho}
                onChange={handleChange}
              />
              <label htmlFor="Alum_ortho" className="form__label">
                Alum_ortho
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Alum_mono"
                className="form__input"
                id="Alum_mono"
                name="Alum_mono"
                value={formData.Alum_mono}
                onChange={handleChange}
              />
              <label htmlFor="Alum_mono" className="form__label">
                Alum_mono
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Lime"
                className="form__input"
                id="Lime"
                name="Lime"
                value={formData.Lime}
                onChange={handleChange}
              />
              <label htmlFor="Lime" className="form__label">
                Lime
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Portlandite"
                className="form__input"
                id="Portlandite"
                name="Portlandite"
                value={formData.Portlandite}
                onChange={handleChange}
              />
              <label htmlFor="Portlandite" className="form__label">
                Portlandite
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Quartz"
                className="form__input"
                id="Quartz"
                name="Quartz"
                value={formData.Quartz}
                onChange={handleChange}
              />
              <label htmlFor="Quartz" className="form__label">
                Quartz
              </label>
            </div>
          </div>
          {/* Second halfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff */}
          {/* Second halfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff */}
          {/* Second halfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff */}
          <div className="halfed">
            <div className="form-group">
              <input
                type="text"
                placeholder="Alite_M3"
                className="form__input"
                id="Alite_M3"
                name="Alite_M3"
                value={formData.Alite_M3}
                onChange={handleChange}
              />
              <label htmlFor="Alite_M3" className="form__label">
                Alite_M3
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Alite_M1"
                className="form__input"
                id="Alite_M1"
                name="Alite_M1"
                value={formData.Alite_M1}
                onChange={handleChange}
              />
              <label htmlFor="Alite_M1" className="form__label">
                Alite_M1
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Alite_Sum"
                className="form__input"
                id="Alite_Sum"
                name="Alite_Sum"
                value={formData.Alite_Sum}
                onChange={handleChange}
              />
              <label htmlFor="Alite_Sum" className="form__label">
                Alite_Sum
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Fraction_M1"
                className="form__input"
                id="Fraction_M1"
                name="Fraction_M1"
                value={formData.Fraction_M1}
                onChange={handleChange}
              />
              <label htmlFor="Fraction_M1" className="form__label">
                Fraction_M1
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Belite_beta"
                className="form__input"
                id="Belite_beta"
                name="Belite_beta"
                value={formData.Belite_beta}
                onChange={handleChange}
              />
              <label htmlFor="Belite_beta" className="form__label">
                Belite_beta
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Belite_alpha"
                className="form__input"
                id="Belite_alpha"
                name="Belite_alpha"
                value={formData.Belite_alpha}
                onChange={handleChange}
              />
              <label htmlFor="Belite_alpha" className="form__label">
                Belite_alpha
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Belite_Sum"
                className="form__input"
                id="Belite_Sum"
                name="Belite_Sum"
                value={formData.Belite_Sum}
                onChange={handleChange}
              />
              <label htmlFor="Belite_Sum" className="form__label">
                Belite_Sum
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Alum_cubic"
                className="form__input"
                id="Alum_cubic"
                name="Alum_cubic"
                value={formData.Alum_cubic}
                onChange={handleChange}
              />
              <label htmlFor="Alum_cubic" className="form__label">
                Alum_cubic
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Alum_Sum"
                className="form__input"
                id="Alum_Sum"
                name="Alum_Sum"
                value={formData.Alum_Sum}
                onChange={handleChange}
              />
              <label htmlFor="Alum_Sum" className="form__label">
                Alum_Sum
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Ferrite"
                className="form__input"
                id="Ferrite"
                name="Ferrite"
                value={formData.Ferrite}
                onChange={handleChange}
              />
              <label htmlFor="Ferrite" className="form__label">
                Ferrite
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="fCaO_XRD"
                className="form__input"
                id="fCaO_XRD"
                name="fCaO_XRD"
                value={formData.fCaO_XRD}
                onChange={handleChange}
              />
              <label htmlFor="fCaO_XRD" className="form__label">
                fCaO_XRD
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Periclase"
                className="form__input"
                id="Periclase"
                name="Periclase"
                value={formData.Periclase}
                onChange={handleChange}
              />
              <label htmlFor="Periclase" className="form__label">
                Periclase
              </label>
            </div>
          </div>
          <div className="halfed">
            <div className="form-group">
              <input
                type="text"
                placeholder="Hematite"
                className="form__input"
                id="Hematite"
                name="Hematite"
                value={formData.Hematite}
                onChange={handleChange}
              />
              <label htmlFor="Hematite" className="form__label">
                Hematite
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Flyash_amorph"
                className="form__input"
                id="Flyash_amorph"
                name="Flyash_amorph"
                value={formData.Flyash_amorph}
                onChange={handleChange}
              />
              <label htmlFor="Flyash_amorph" className="form__label">
                Flyash_amorph
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="FA_Sum"
                className="form__input"
                id="FA_Sum"
                name="FA_Sum"
                value={formData.FA_Sum}
                onChange={handleChange}
              />
              <label htmlFor="FA_Sum" className="form__label">
                FA_Sum
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Syngenite"
                className="form__input"
                id="Syngenite"
                name="Syngenite"
                value={formData.Syngenite}
                onChange={handleChange}
              />
              <label htmlFor="Syngenite" className="form__label">
                Syngenite
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Albite"
                className="form__input"
                id="Albite"
                name="Albite"
                value={formData.Albite}
                onChange={handleChange}
              />
              <label htmlFor="Albite" className="form__label">
                Albite
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Anorthite"
                className="form__input"
                id="Anorthite"
                name="Anorthite"
                value={formData.Anorthite}
                onChange={handleChange}
              />
              <label htmlFor="Anorthite" className="form__label">
                Anorthite
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Andesine"
                className="form__input"
                id="Andesine"
                name="Andesine"
                value={formData.Andesine}
                onChange={handleChange}
              />
              <label htmlFor="Andesine" className="form__label">
                Andesine
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="K_Feldspar"
                className="form__input"
                id="K_Feldspar"
                name="K_Feldspar"
                value={formData.K_Feldspar}
                onChange={handleChange}
              />
              <label htmlFor="K_Feldspar" className="form__label">
                K_Feldspar
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Illite"
                className="form__input"
                id="Illite"
                name="Illite"
                value={formData.Illite}
                onChange={handleChange}
              />
              <label htmlFor="Illite" className="form__label">
                Illite
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Feldspar_Sum"
                className="form__input"
                id="Feldspar_Sum"
                name="Feldspar_Sum"
                value={formData.Feldspar_Sum}
                onChange={handleChange}
              />
              <label htmlFor="Feldspar_Sum" className="form__label">
                Feldspar_Sum
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="SO3_XRD"
                className="form__input"
                id="SO3_XRD"
                name="SO3_XRD"
                value={formData.SO3_XRD}
                onChange={handleChange}
              />
              <label htmlFor="SO3_XRD" className="form__label">
                SO3_XRD
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="CO2_XRD"
                className="form__input"
                id="CO2_XRD"
                name="CO2_XRD"
                value={formData.CO2_XRD}
                onChange={handleChange}
              />
              <label htmlFor="CO2_XRD" className="form__label">
                CO2_XRD
              </label>
            </div>
          </div>
          <div className="halfed">
            <div className="form-group">
              <input
                type="text"
                placeholder="Thenardite"
                className="form__input"
                id="Thenardite"
                name="Thenardite"
                value={formData.Thenardite}
                onChange={handleChange}
              />
              <label htmlFor="Thenardite" className="form__label">
                Thenardite
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Hemi_Hydrate"
                className="form__input"
                id="Hemi_Hydrate"
                name="Hemi_Hydrate"
                value={formData.Hemi_Hydrate}
                onChange={handleChange}
              />
              <label htmlFor="Hemi_Hydrate" className="form__label">
                Hemi_Hydrate
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Anhydrite"
                className="form__input"
                id="Anhydrite"
                name="Anhydrite"
                value={formData.Anhydrite}
                onChange={handleChange}
              />
              <label htmlFor="Anhydrite" className="form__label">
                Anhydrite
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Mullite"
                className="form__input"
                id="Mullite"
                name="Mullite"
                value={formData.Mullite}
                onChange={handleChange}
              />
              <label htmlFor="Mullite" className="form__label">
                Mullite
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Magnetite"
                className="form__input"
                id="Magnetite"
                name="Magnetite"
                value={formData.Magnetite}
                onChange={handleChange}
              />
              <label htmlFor="Magnetite" className="form__label">
                Magnetite
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Langbeinite"
                className="form__input"
                id="Langbeinite"
                name="Langbeinite"
                value={formData.Langbeinite}
                onChange={handleChange}
              />
              <label htmlFor="Langbeinite" className="form__label">
                Langbeinite
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Calcite"
                className="form__input"
                id="Calcite"
                name="Calcite"
                value={formData.Calcite}
                onChange={handleChange}
              />
              <label htmlFor="Calcite" className="form__label">
                Calcite
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Dolomite"
                className="form__input"
                id="Dolomite"
                name="Dolomite"
                value={formData.Dolomite}
                onChange={handleChange}
              />
              <label htmlFor="Dolomite" className="form__label">
                Dolomite
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Arcanite"
                className="form__input"
                id="Arcanite"
                name="Arcanite"
                value={formData.Arcanite}
                onChange={handleChange}
              />
              <label htmlFor="Arcanite" className="form__label">
                Arcanite
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Aphthitalite"
                className="form__input"
                id="Aphthitalite"
                name="Aphthitalite"
                value={formData.Aphthitalite}
                onChange={handleChange}
              />
              <label htmlFor="Aphthitalite" className="form__label">
                Aphthitalite
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Gypsum"
                className="form__input"
                id="Gypsum"
                name="Gypsum"
                value={formData.Gypsum}
                onChange={handleChange}
              />
              <label htmlFor="Gypsum" className="form__label">
                Gypsum
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Belite_alpha_H"
                className="form__input"
                id="Belite_alpha_H"
                name="Belite_alpha_H"
                value={formData.Belite_alpha_H}
                onChange={handleChange}
              />
              <label htmlFor="Belite_alpha_H" className="form__label">
                Belite_alpha_H
              </label>
            </div>
          </div>
        </div>
      </div>

      <Button style={{ backgroundColor: "#b3ba80" }} type="submit">
        Add Analyse Chimique  
      </Button>
    </form>
  );
};

export default PhaseGachageForm;
