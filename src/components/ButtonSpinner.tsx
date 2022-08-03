import React, { ReactElement } from 'react';

interface ButtonSpinnerProps {
    loading: boolean;
    children?: ReactElement;
}

let ButtonSpinner = ({ loading = false, children }: ButtonSpinnerProps) => {
    return (
        <React.Fragment>
            {loading && (
                <div className="justify-center  data-import-flex">
                    <div className="w-3 h-3 m-2 border-t-2 border-b-2 rounded-full animate-spin border-white-500" />
                </div>
            )}
            {children}
        </React.Fragment>
    );
};
export default ButtonSpinner;
