import { useState, useEffect } from "react";
import Axios from "axios";
import toast from "react-hot-toast";

const useImportData = () => {
  const [templetList, setTempletList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [loading, setLoading] = useState(false);

  const [templetData, setTempletData] = useState({
    templetId: "",
    files: { name: "" },
  });

  useEffect(() => {
    console.log("Fetching Data from Server");
    Axios.get("https://api.dataimport.knovator.in/v1/projects/STRING_ERP")
      .then(({ data: response }) => {
        // console.log(`response`, response);
        setTempletList(response.templates);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleTempletChange = (templetId) => {
    // console.log("templetId", templetId.target.value);
    setTempletData({
      ...templetData,
      templetId: templetId.target.value,
    });
  };

  const handleFileUplaod = async (event) => {
    let fileObj = event.target.files[0];
    setTempletData({
      ...templetData,
      files: fileObj,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(`templetData`, templetData);

    if (templetData.templetId) {
      try {
        setLoading(true);
        const formData = new FormData();
        formData.append("files", templetData.files);
        let response = await Axios.post(
          `https://api.dataimport.knovator.in/v1/templates/${templetData.templetId}/process-file`,
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
    templetList,
    handleTempletChange,
    setTempletData,
    templetData,
    handleSubmit,
    handleFileUplaod,
    loader,
    loading,
    setLoader,
  };
};

export default useImportData;
