import './styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import AppContextProvider from './contexts/AppContextProvider';

import { setDefaultOptions } from 'esri-loader';

setDefaultOptions({
    url: 'https://js.arcgis.com/next/'
});

ReactDOM.render(
    <AppContextProvider>
        <h5>hello world</h5>
    </AppContextProvider>,
    document.getElementById('root')
);