import { useState, useEffect } from "react";
import Axios from "axios";
// import XLSX from "xlsx";

const useImportData = () => {
  const [templetList, setTempletList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    setTimeout(function () {
      setLoading(false);
    }, 5000);
  };

  const handleFileUplaod = async (event) => {
    let fileObj = event.target.files[0];
    setLoader(true);

    setTimeout(function () {
      setLoader(false);
    }, 5000);

    // console.log(`fileObj`, fileObj);
    // if (fileObj) {
    //   let fileReader = new FileReader();
    //   fileReader.readAsBinaryString(fileObj);
    //   fileReader.onload = (event) => {
    //     let data = event.target.result;
    //     let workbook = XLSX.read(data, { type: "binary" });
    //     console.log(workbook);
    //     workbook.SheetNames.forEach((sheet) => {
    //       let rowObject = XLSX.utils.sheet_to_row_object_array(
    //         workbook.Sheets[sheet]
    //       );
    //       console.log(rowObject);
    //       let jsonObject = JSON.stringify(rowObject, undefined, 4);
    //       console.log(`jsonObject`, jsonObject);
    //     });
    //   };
    // }

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
    loader,
    loading,
    setLoader,
  };
};

export default useImportData;
