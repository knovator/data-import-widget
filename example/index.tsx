import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DataImport from '../.';

const App = () => {
    return (
        <div>
            <DataImport
                apiBaseUrl={'...'}
                getAdditionalInfo={() => {
                    console.log('Get Additional data called...');
                    return {};
                }}
                onNotify={(data: any) => console.log(data)}
                getToken={''}
                projectCode={'...'}
            >
                <button> Import data </button>
            </DataImport>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
