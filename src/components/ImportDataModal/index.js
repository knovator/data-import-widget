import React, { useState } from "react";
import useImportData from "./hooks/useImportData";
import Spiner from "../Spinner/buttonSpinner";
import FullSpiner from "../Spinner/fullSpinner";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    templetList,
    handleTempletChange,
    templetData,
    handleSubmit,
    handleFileUplaod,
    loader,
    loading,
  } = useImportData();

  return (
    <>
      <button
        className="bg-primary text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        import
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <form onSubmit={handleSubmit} className="w-90">
              <div className="w-auto">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-center justify-between p-3 border-b border-solid border-blueGray-200 rounded-t">
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
                    <div id="wrapper" className="grid grid-cols-12 gap-4">
                      <div className="col-span-6">
                        <div className="">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Select Templete
                          </label>
                          <select
                            id="templet_id"
                            name="templet_id"
                            defaultValue="Select Templete"
                            onChange={(id) => handleTempletChange(id)}
                            className="block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option value="" hidden>
                              Select templete
                            </option>
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
                      <div className="col-span-6">
                        <FullSpiner loader={loading}>
                          {templetData?.templet && (
                            <div>
                              <div className="flex items-center gap-3">
                                <div className="h-12 w-12 rounded-2xl bg-primary-opacity-50 flex items-center justify-center text-primary">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
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
                              <div className="py-4 bg-white m-auto">
                                <div className="file_upload px-5 py-10 relative rounded-lg border-2 border-dashed">
                                  <svg
                                    className={`${
                                      loader ? "text-gray-300" : "text-primary"
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
                                  <div className="input_field flex flex-col text-center">
                                    <label className="mb-2">
                                      <input
                                        className="text-sm cursor-pointer w-36 hidden"
                                        type="file"
                                        onChange={handleFileUplaod}
                                        disabled={loader ? true : false}
                                      />

                                      <div
                                        className={`${
                                          loader ? "bg-gray-400 " : "bg-primary"
                                        } items-center justify-center text text-white  border border-gray-300 rounded font-semibold cursor-pointer p-1 px-5 inline-flex shadow-md`}
                                      >
                                        <Spiner loader={loader}></Spiner> Select
                                      </div>
                                    </label>

                                    <div
                                      className={`${
                                        loader
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

                                {templetData.file?.name !== "" && (
                                  <div
                                    className="text-gray-400 text-sm"
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
                                        className="h-4 w-4"
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

                                <div className="py-2 bg-white bg-whtie m-auto rounded-lg">
                                  <a
                                    href="index.html"
                                    className="text-black hover:underline"
                                  >
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
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
                                          className="h-4 w-4"
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
                                    </div>
                                  </a>
                                </div>
                                <div className="py-2 text-center">
                                  <button
                                    type="submit"
                                    className={`${
                                      templetData.file.name === ""
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
                        </FullSpiner>
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
