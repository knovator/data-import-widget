import React, { useState } from "react";
import useImportData from "./hooks/useImportData";
import isEmpty from "lodash/isEmpty";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    templetList,
    handleTempletChange,
    templetData,
    handleSubmit,
    handleFileUplaod,
  } = useImportData();

  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        import
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <form onSubmit={handleSubmit}>
              <div className="w-auto">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-xl font-semibold">Import Data</h3>
                    <button
                      className="ml-auto border-0 text-black float-right text-3xl"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black h-2 w-6">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}

                  <div className="relative p-3 flex-auto">
                    <div id="wrapper">
                      <div id="left">
                        <div className="col-span-6 sm:col-span-4 p-1">
                          {/* <label className="block text-sm font-medium text-gray-700">
                            Select Templet
                          </label> */}
                          <select
                            id="templet_id"
                            name="templet_id"
                            defaultValue="Select Templet"
                            onChange={(id) => handleTempletChange(id)}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option value="">Select Templet</option>
                            {templetList.map((temp) => {
                              return (
                                <option key={temp.id} value={temp.id}>
                                  {temp.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                      <div id="right">
                        {templetData?.templet && (
                          <div className="p-4 bg-white  bg-whtie m-auto rounded-lg">
                            <div className="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg">
                              <svg
                                className="text-indigo-500 w-8 mx-auto mb-2"
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
                              <div className="input_field flex flex-col text-center">
                                <label className="mb-2">
                                  <input
                                    className="text-sm cursor-pointer w-36 hidden"
                                    type="file"
                                    onChange={handleFileUplaod}
                                  />
                                  <div className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">
                                    Select
                                  </div>
                                </label>

                                <div className="title text-indigo-500 uppercase text-xs">
                                  or drop files here
                                </div>
                              </div>
                            </div>
                            {templetData.file?.name !== "" && (
                              <div
                                style={{
                                  display: "flex",
                                  // justifyContent: "center",
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
                                    className="h-6 w-6 "
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
                                <span>{templetData.file?.name}</span>
                              </div>
                            )}

                            <div className="py-2 bg-white  bg-whtie m-auto rounded-lg">
                              <a
                                href="index.html"
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    // justifyContent: "center",
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
                                      className="h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        // strokeWidth={2}
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                      />
                                    </svg>
                                  </span>
                                  <span>Download Sample Templets</span>
                                </div>
                              </a>
                            </div>
                            <div className="py-2">
                              <button
                                type="submit"
                                className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500"
                              >
                                <span className="mr-2 uppercase">Import</span>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
export default Modal;
