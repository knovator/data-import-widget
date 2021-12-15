import React, { useState } from "react";
import useImportData from "./hooks/useImportData";
import Spinner from "../Spinner/buttonSpinner";
import FullSpinner from "../Spinner/fullSpinner";
import { Toaster } from "react-hot-toast";

const Modal = (props) => {
  const [showModal, setShowModal] = useState(false);

  const {
    templateList,
    templateData,
    handleTemplateChange,
    handleFileUpload,
    handleSubmit,
    loading,
  } = useImportData(props);

  return (
    <>
      <Toaster />
      <span
        className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-primary active:bg-pink-600 hover:shadow-lg focus:outline-none"
        onClick={() => setShowModal(true)}
      >
        {props.children}
      </span>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto outline-none focus:outline-none">
            <form onSubmit={handleSubmit} className="w-90">
              <div className="w-auto">
                <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-center justify-between p-3 border-b border-solid rounded-t border-blueGray-200">
                    <h3 className="text-xl font-semibold">Import Data</h3>
                    <button
                      className="float-right ml-auto text-3xl text-black border-0"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="w-6 h-2 text-black bg-transparent">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}

                  <div className="relative flex-auto p-3">
                    <div id="wrapper" className="grid grid-cols-12 gap-4">
                      <div className="col-span-6">
                        <div className="">
                          <label className="block mb-1 text-sm font-medium text-gray-700">
                            Select Templete
                          </label>
                          <select
                            id="templet_id"
                            name="templet_id"
                            defaultValue="Select Templete"
                            onChange={(id) => handleTemplateChange(id)}
                            className="block w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option value="" hidden>
                              Select templete
                            </option>
                            {templateList.map((temp) => {
                              return (
                                <option key={temp._id} value={temp._id}>
                                  {temp.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                      <div className="col-span-6">
                        <FullSpinner loading={loading}>
                          {templateData?.templateId && (
                            <div>
                              <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-opacity-50 text-primary">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                                    <path
                                      stroke="#fff"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M8 11h4m-2-2v4"
                                    />
                                  </svg>
                                </div>
                                <p className="font-bold ">Upload your file</p>
                              </div>
                              <div className="py-4 m-auto bg-white">
                                <div className="relative px-5 py-10 border-2 border-dashed rounded-lg file_upload">
                                  <svg
                                    className={`${
                                      loading ? "text-gray-300" : "text-primary"
                                    } w-8 mx-auto mb-2`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                    />
                                  </svg>
                                  <div className="flex flex-col text-center input_field">
                                    <label className="mb-2">
                                      <input
                                        className="hidden text-sm cursor-pointer w-36"
                                        type="file"
                                        onChange={handleFileUpload}
                                        disabled={loading ? true : false}
                                      />

                                      <div
                                        className={`${
                                          loading ? "bg-gray-400 " : "bg-primary"
                                        } items-center justify-center text text-white  border border-gray-300 rounded font-semibold cursor-pointer p-1 px-5 inline-flex shadow-md`}
                                      >
                                        <Spinner loading={loading}></Spinner> Select
                                      </div>
                                    </label>

                                    <div
                                      className={`${
                                        loading
                                          ? "text-gray-400"
                                          : "text-gray-600"
                                      } title uppercase text-xs flex items-center gap-3 justify-center`}
                                    >
                                      <div className="w-10 h-0.5 bg-gray-400"></div>
                                      or drop files here
                                      <div className="w-10 h-0.5 bg-gray-400"></div>
                                    </div>
                                  </div>
                                </div>

                                {templateData.files?.name !== "" && (
                                  <div
                                    className="text-sm text-gray-400"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      marginTop: "5px",
                                    }}
                                  >
                                    <span
                                      style={{
                                        display: "inline-block",
                                        marginRight: "5px",
                                      }}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                                        />
                                      </svg>
                                    </span>
                                    <span>{templateData.files?.name}</span>
                                  </div>
                                )}

                                <div className="py-2 m-auto bg-white rounded-lg bg-whtie">
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      marginTop: "5px",
                                    }}
                                  >
                                    <a
                                      href="index.html"
                                      className="text-black hover:underline"
                                    >
                                      <span
                                        style={{
                                          display: "inline-block",
                                          marginRight: "5px",
                                        }}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="w-4 h-4"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                          />
                                        </svg>
                                      </span>

                                      <span>Download Sample Templete</span>
                                    </a>
                                  </div>
                                </div>
                                <div className="py-2 text-center">
                                  <button
                                    type="submit"
                                    className={`${
                                      templateData.files.name === ""
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-primary cursor-pointer"
                                    } flex items-center text  text-white border border-gray-300 rounded font-semibold  mx-auto px-4 shadow-md`}
                                  >
                                    <span className="m-2">Import</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </FullSpinner>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};
export default Modal;
