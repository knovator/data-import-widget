import { useState, useEffect } from "react";
import Axios from "axios";

const useImportData = () => {
  const [templetList, setTempletList] = useState([]);
  const [templetData, setTempletData] = useState({
    templet: "",
    file: { name: "" },
  });

  useEffect(() => {
    console.log("Fetching Data from Server");
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(`response`, response.data);
        setTempletList(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleTempletChange = (templetId) => {
    console.log("templetId", templetId.target.value);
    setTempletData({
      ...templetData,
      templet: templetId.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`templetData`, templetData);
  };
  const handleFileUplaod = async (params) => {
    let { 0: fileObj } = Object.values(params.target.files);

    setTempletData({
      ...templetData,
      file: fileObj,
    });
  };

  return {
    templetList,
    handleTempletChange,
    setTempletData,
    templetData,
    handleSubmit,
    handleFileUplaod,
  };
};

export default useImportData;
