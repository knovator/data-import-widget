import { useState, useEffect } from "react";
import Axios from "axios";
import toast from "react-hot-toast";

const useImportData = (props) => {
  const [templateList, setTemplateList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [loading, setLoading] = useState(false);

  const [templateData, setTemplateData] = useState({
    templateId: "",
    files: { name: "" },
  });

  useEffect(() => {
    console.log("Fetching Data from Server");
    Axios.get("https://api.dataimport.knovator.in/v1/projects/STRING_ERP")
      .then(({ data: response }) => {
        // console.log(`response`, response);
        setTemplateList(response.templates);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleTemplateChange = (templateId) => {
    setTemplateData((prev) => ({
      ...prev,
      templateId: templateId.target.value,
    }));
  };

  const handleFileUpload = async (event) => {
    let file = event.target.files[0];
    setTemplateData((prev) => ({
      ...prev,
      files: file,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (templateData.templateId) {
      try {
        setLoading(true);
        const formData = new FormData();
        formData.append("files", templateData.files);
        let response = await Axios.post(
          `https://api.dataimport.knovator.in/v1/templates/${templateData.templateId}/process-file`,
          formData
        );
        console.log(`response`, response);
        toast("File is uploaded to Server. Update will be notified by Email");
      } catch ({ message }) {
        // console.log(message);
        toast(message);
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    templateList,
    handleTemplateChange,
    setTemplateData,
    templateData,
    handleSubmit,
    handleFileUpload,
    loader,
    loading,
    setLoader,
  };
};

export default useImportData;
