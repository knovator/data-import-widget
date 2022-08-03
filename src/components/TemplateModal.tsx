import React, { ChangeEvent, MouseEvent } from 'react';
import Spinner from './ButtonSpinner';
import FullSpinner from './FullSpinner';
import AddFileIcon from './AddFileIcon';
import PaperClip from './PaperClipIcon';
import UploadIcon from './UploadIcon';

interface TemplateModalProps {
    loading: boolean;
    onClose: () => void;
    templates: any[];
    onSelectTemplate: (templateId: string) => void;
    selectedTemplate: any;
    handleFileUpload: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: MouseEvent<HTMLElement>) => void;
}

const TemplateModal = ({
    onClose,
    templates,
    onSelectTemplate,
    selectedTemplate,
    loading,
    handleFileUpload,
    handleSubmit,
}: TemplateModalProps) => {
    return (
        <>
            <div className="kdi_modal-wrapper-1">
                <div className="kdi_modal-wrapper-2" style={{ width: '80%' }}>
                    <div className="kdi_modal-wrapper-3">
                        <div className="kdi_modal-wrapper-4">
                            {/*header*/}
                            <div className="kdi_modal-header">
                                <h3 className="kdi_modal-header-title">Import Data</h3>
                                <button className="kdi_modal-header-close" onClick={onClose}>
                                    <span className="kdi_modal-header-close-x">×</span>
                                </button>
                            </div>
                            {/*body*/}

                            <div className="kdi_modal-body">
                                <div id="wrapper" className="kdi_modal-body-wrapper">
                                    {/* Template */}
                                    <div className="kdi_modal-body-templates">
                                        <label className="kdi_modal-body-templates-title">Select Template</label>
                                        <select
                                            id="template_id"
                                            name="template_id"
                                            defaultValue="Select Template"
                                            onChange={(e) => onSelectTemplate(e.target.value)}
                                            className="kdi_modal-body-templates-select"
                                        >
                                            <option value="" hidden>
                                                Select Template
                                            </option>
                                            {templates.map((temp: any) => {
                                                return (
                                                    <option key={temp._id} value={temp._id}>
                                                        {temp.name}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>

                                    {/* File */}
                                    <div className="kdi_modal-body-files">
                                        <FullSpinner loading={loading}>
                                            {selectedTemplate?.templateId && (
                                                <>
                                                    <div className="kdi_modal-body-files-add-container">
                                                        <div className="kdi_modal-body-files-add">
                                                            <AddFileIcon />
                                                        </div>
                                                        <p className="kdi_modal-body-files-text">Upload your file</p>
                                                    </div>
                                                    <div className="kdi_modal-body-files-drop">
                                                        <div className="kdi_modal-body-files-drop-container">
                                                            <UploadIcon
                                                                className={`${
                                                                    loading ? 'kdi_disabled-text' : 'kdi_active-text'
                                                                } kdi_modal-body-upload-icon`}
                                                            />
                                                            <div className="kdi_modal-drop">
                                                                <label className="kdi_modal-drop-label">
                                                                    <input
                                                                        className="kdi_modal-drop-input"
                                                                        type="file"
                                                                        onChange={handleFileUpload}
                                                                        disabled={loading}
                                                                    />

                                                                    <div
                                                                        className={`${
                                                                            loading
                                                                                ? 'kdi_disabled-bg'
                                                                                : 'kdi_active-bg'
                                                                        } kdi_modal-body-button`}
                                                                    >
                                                                        <Spinner loading={loading} /> Select
                                                                    </div>
                                                                </label>

                                                                <div
                                                                    className={`${
                                                                        loading
                                                                            ? 'kdi_disabled-text'
                                                                            : 'kdi_active-text'
                                                                    } kdi_modal-drop-text`}
                                                                >
                                                                    <div className="kdi_modal-line" />
                                                                    or drop files here
                                                                    <div className="kdi_modal-line" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {selectedTemplate.files?.name !== '' && (
                                                            <div className="kdi_modal-selected-file">
                                                                <span className="kdi_modal-selected-file-icon">
                                                                    <PaperClip />
                                                                </span>
                                                                <span>{selectedTemplate.files?.name}</span>
                                                            </div>
                                                        )}

                                                        <div className="kdi_modal-download">
                                                            <a href="#" className="kdi_modal-download-link">
                                                                Download Sample Template
                                                            </a>
                                                        </div>

                                                        <div className="py-2 text-center">
                                                            <button
                                                                type="submit"
                                                                onClick={(e) => handleSubmit(e)}
                                                                disabled={selectedTemplate.files.name === ''}
                                                                className={`${
                                                                    selectedTemplate.files.name === ''
                                                                        ? 'kdi_disabled-bg cursor-not-allowed'
                                                                        : 'kdi_active-bg cursor-pointer'
                                                                } kdi_modal-body-button`}
                                                            >
                                                                <span className="m-2">Import</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </FullSpinner>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="kdi_backdrop" />
        </>
    );
};

export default TemplateModal;
