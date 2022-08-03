import React, { ChangeEvent, ReactElement, useEffect, useState, MouseEvent } from 'react';
import fetchUrl, { setAPIConfig } from '@knovator/api';
import TemplateModal from './TemplateModal';

interface ModalProps {
    onNotify: (data: any) => void;
    getAdditionalInfo?: () => void;
    getToken: string | (() => string);
    apiBaseUrl: string;
    projectCode: string;
    children: ReactElement;
}

const Modal = ({ onNotify, getAdditionalInfo, getToken, apiBaseUrl, projectCode, children }: ModalProps) => {
    const apiPrefix = 'v1';
    const [show, setShow] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [templates, setTemplates] = useState<any[]>([]);
    const [selectedTemplate, setSelectedTemplate] = useState<{
        templateId: string;
        files: Partial<File>;
    }>({ templateId: '', files: { name: '' } });

    useEffect(() => {
        (async () => {
            setAPIConfig({
                getToken,
                prefix: apiPrefix,
                handleCache: false,
                baseUrl: apiBaseUrl,
            });
            const data = await fetchUrl({
                url: `projects/${projectCode}`,
                config: {
                    handleCache: false,
                },
            });
            const { templates = [] } = data || {};
            setTemplates(templates);
        })();
    }, []);

    function notify(data: any) {
        if (typeof onNotify === 'function') {
            onNotify(data);
        }
    }

    async function handleSubmit(event: MouseEvent<HTMLElement>) {
        event.preventDefault();
        let additionalData: any = {};

        if (typeof getAdditionalInfo === 'function') {
            additionalData = getAdditionalInfo();
        }

        if (selectedTemplate.templateId) {
            try {
                setLoading(true);
                const formData = new FormData();
                // @ts-ignore
                formData.append('files', selectedTemplate.files);
                formData.append('additionalData', JSON.stringify(additionalData));
                const response = await fetchUrl({
                    url: `templates/${selectedTemplate.templateId}/process-file`,
                    data: formData,
                    type: 'post',
                });
                notify({
                    type: 'success',
                    payload: response,
                });
                setShow(false);
            } catch (error) {
                notify({
                    type: 'error',
                    payload: error,
                });
            } finally {
                setLoading(false);
            }
        }
    }

    function handleFileUpload(e: ChangeEvent<HTMLInputElement>) {
        let file = e.target.files ? e.target.files[0] : null;
        if (file) {
            setSelectedTemplate({
                ...selectedTemplate,
                files: file,
            });
        }
    }

    function onSelectTemplate(templateId: string) {
        setSelectedTemplate({
            ...selectedTemplate,
            templateId,
        });
    }

    return (
        <div id="data-import">
            <span onClick={() => setShow(true)}>{children}</span>
            {show ? (
                <TemplateModal
                    loading={loading}
                    onClose={() => setShow(false)}
                    templates={templates}
                    onSelectTemplate={onSelectTemplate}
                    handleFileUpload={handleFileUpload}
                    handleSubmit={handleSubmit}
                    selectedTemplate={selectedTemplate}
                />
            ) : null}
        </div>
    );
};

export default Modal;
