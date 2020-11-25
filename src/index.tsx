import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import configureAppStore, { getPreloadedState } from './store/configureStore';

import AppContextProvider from './contexts/AppContextProvider';

import { setDefaultOptions } from 'esri-loader';

import { DemoPage, RootPage } from './pages';

setDefaultOptions({
    url: 'https://js.arcgis.com/next/',
});

(async () => {
    const preloadedState = getPreloadedState();

    ReactDOM.render(
        <React.StrictMode>
            <ReduxProvider store={configureAppStore(preloadedState)}>
                <AppContextProvider>
                    <DemoPage />
                </AppContextProvider>
            </ReduxProvider>
        </React.StrictMode>,
        document.getElementById('root')
    );
})();
