import { useState } from "react";
import instance from "../../api/api";
import { Button } from "@chakra-ui/react";

const PDFUploadForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    pdf: null,    nom:"",
  });

  const handleFileChange = (e) => {
    if (e.target.name === "pdf") {
      setFormData({ ...formData, pdf: e.target.files[0] });
    } else if (e.target.name === "nom") {
      setFormData({ ...formData, nom: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fileData = new FormData();
    fileData.append("pdf", formData.pdf);
    fileData.append("nom", formData.nom);
    try {
      const response = await instance("post", "pdfs", fileData, {
        "Content-Type": "multipart/form-data",
      });
      onAdd(response.data);
      setFormData({ pdf: null , nom: ""});
    } catch (error) {
      console.error("Error uploading PDF:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="inputs_container">
            <div className="halfed">
        <div className="form-group">
          <label htmlFor="nom">Nome le PDF</label>
          <input
            type="text"
            className="form__input"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pdf">Upload PDF</label>
          <input
            type="file"
            accept="application/pdf"
            className="form__input"
            id="pdf"
            name="pdf"
            onChange={handleFileChange}
            required
          />
        </div>
        </div>
      </div>
      <Button
        style={{ backgroundColor: "#b3ba80" }}
        colorScheme="blue"
        type="submit"
      >
        Upload PDF
      </Button>
    </form>
  );
};

export default PDFUploadForm;
