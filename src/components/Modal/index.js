import React, { Component } from "react";
import Spinner from "../Spinner/buttonSpinner";
import FullSpinner from "../Spinner/fullSpinner";
import fetchUrl, { setAPIConfig } from "@knovator/api";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      loading: false,
      templates: [],
      selectedTemplate: { templateId: "", files: { name: "" } },
    };
  }

  updateState = (data) =>
    this.setState((prev) => ({
      ...prev,
      ...data,
    }));

  updateTemplate = (data) => {
    this.updateState({
      selectedTemplate: {
        ...this.state.selectedTemplate,
        ...data,
      },
    });
  };

  handleTemplateChange = (e) => {
    this.updateTemplate({
      templateId: e.target.value,
    });
  };

  handleFileUpload = async (event) => {
    let file = event.target.files[0];
    this.updateTemplate({
      files: file,
    });
  };

  notify = (data) => {
    if (typeof this.props.onNotify === "function") {
      this.props.onNotify(data);
    }
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { selectedTemplate } = this.state;
    let additionalData = {};

    if (typeof this.props.getAdditionalInfo === "function") {
      additionalData = this.props.getAdditionalInfo();
    }

    if (selectedTemplate.templateId) {
      try {
        this.updateState({ loading: true });
        const formData = new FormData();
        formData.append("files", selectedTemplate.files);
        formData.append("additionalData", JSON.stringify(additionalData));
        const response = await fetchUrl({
          url: `templates/${selectedTemplate.templateId}/process-file`,
          data: formData,
          type: "post",
        });
        this.notify({
          type: "success",
          payload: response,
        });
      } catch (error) {
        this.notify({
          type: "error",
          payload: error,
        });
      } finally {
        this.updateState({ loading: false });
      }
    }
  };

  async componentDidMount() {
    // configurative @knovator/api
    const { getToken = "", apiPrefix = "v1", apiBaseUrl = "https://api.dataimport.knovator.in" } = this.props
    setAPIConfig({
      getToken,
      prefix: apiPrefix,
      handleCache: false,
      baseUrl: apiBaseUrl,
    });

    const { projectCode = "STRING_ERP" } = this.props;
    const data = await fetchUrl({
      url: `projects/${projectCode}`,
      config: {
        handleCache: false,
      },
    });
    const { templates = [] } = data || {};
    this.updateState({ templates });
  }

  setShow = (show) => {
    this.updateState({ show });
  };

  render() {
    const { show, loading, templates = [], selectedTemplate = {} } = this.state;

    return (
      <div id="data-import">
        <span onClick={() => this.setShow(true)}>{this.props.children}</span>
        {show ? (
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto outline-none focus:outline-none">
              <div className="max-w-6xl " style={{ width: "80%" }}>
                <div className="w-auto">
                  <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-center justify-between px-12 pt-12 rounded-t">
                      <h3 className="text-2xl font-semibold ">Import Data</h3>
                      <button
                        className="absolute flex items-center justify-center w-8 h-8 p-0 text-black border-0 rounded-full cursor-pointer top-4 right-4 bg-slate-400 bg-opacity-20"
                        onClick={() => this.setShow(false)}
                      >
                        <span className="text-2xl text-black bg-transparent">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}

                    <div className="relative flex-auto p-4">
                      <div id="wrapper" className="grid grid-cols-12 gap-4">
                        <div className="col-span-6 p-8">
                          <div className="">
                            <label className="block mb-4 text-base font-medium leading-5 text-gray-700">
                              Select Template
                            </label>
                            <select
                              id="template_id"
                              name="template_id"
                              defaultValue="Select Template"
                              onChange={(id) => this.handleTemplateChange(id)}
                              className="block p-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm w-90 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            >
                              <option value="" hidden>
                                Select Template
                              </option>
                              {templates.map((temp) => {
                                return (
                                  <option key={temp._id} value={temp._id}>
                                    {temp.name}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                        <div className="col-span-6 p-8 pl-0">
                          <FullSpinner loading={loading}>
                            {selectedTemplate?.templateId && (
                              <div>
                                <div className="flex items-center gap-3">
                                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-opacity-50 text-primary">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-7 h-7"
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
                                  <p className="m-0 text-base font-bold ">
                                    Upload your file
                                  </p>
                                </div>
                                <div className="py-4 m-auto bg-white">
                                  <div className="relative flex flex-col items-center px-5 py-10 border-2 border-dashed rounded-lg file_upload">
                                    <svg
                                      className={`${
                                        loading
                                          ? "text-gray-300"
                                          : "text-primary"
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
                                      <label className="mb-4">
                                        <input
                                          className="hidden text-sm cursor-pointer w-36"
                                          type="file"
                                          onChange={this.handleFileUpload}
                                          disabled={loading ? true : false}
                                        />

                                        <div
                                          className={`${
                                            loading
                                              ? "bg-gray-400 "
                                              : "bg-primary"
                                          } items-center h-8 justify-center text text-white  border border-gray-300 rounded font-semibold cursor-pointer p-1 px-5 inline-flex shadow-md`}
                                        >
                                          <Spinner loading={loading}></Spinner>{" "}
                                          Select
                                        </div>
                                      </label>

                                      <div
                                        className={`${
                                          loading
                                            ? "text-gray-400"
                                            : "text-gray-600"
                                        } title uppercase text-xs border-0 px-0 flex items-center gap-3 justify-center`}
                                      >
                                        <div className="w-10 h-0.5 bg-gray-400"></div>
                                        or drop files here
                                        <div className="w-10 h-0.5 bg-gray-400"></div>
                                      </div>
                                    </div>
                                  </div>

                                  {selectedTemplate.files?.name !== "" && (
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
                                      <span>
                                        {selectedTemplate.files?.name}
                                      </span>
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

                                        <span>Download Sample Template</span>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="py-2 text-center">
                                    <button
                                      type="submit"
                                      onClick={this.handleSubmit}
                                      className={`${
                                        selectedTemplate.files.name === ""
                                          ? "bg-gray-400 cursor-not-allowed"
                                          : "bg-primary cursor-pointer"
                                      } flex h-8 items-center text  text-white border border-gray-300 rounded font-semibold  mx-auto px-4 shadow-md`}
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
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
        ) : null}
      </div>
    );
  }
}
export default Modal;
