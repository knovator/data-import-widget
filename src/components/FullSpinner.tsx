import React, { ReactElement } from 'react';

interface FullSpinnerProps {
    loading: boolean;
    children: ReactElement;
}

const FullSpinner = ({ loading, children }: FullSpinnerProps) => {
    return (
        <React.Fragment>
            {loading && (
                <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-full overflow-hidden bg-gray-700 opacity-75">
                    <div className="w-12 h-12 mb-4 ease-linear border-4 border-t-4 border-gray-200 rounded-full loader" />
                    <h2 className="text-xl font-semibold text-center text-white">
                        Loading...
                    </h2>
                    <p className="w-1/3 text-center text-white">
                        This may take a few seconds, please don't close this
                        page.
                    </p>
                </div>
            )}
            {children}
        </React.Fragment>
    );
};

export default FullSpinner;
