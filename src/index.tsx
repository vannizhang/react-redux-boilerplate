import './styles/index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';

import configureAppStore, { getPreloadedState } from './store/configureStore';

import AppContextProvider from './contexts/AppContextProvider';

import { Demo } from './pages';
import { setDefaultOptions } from 'esri-loader';

(async () => {
    // make sure esri-loader uses latest version of the ArcGIS API for JavaScript
    setDefaultOptions({
        version: '4.27',
    });

    const preloadedState = getPreloadedState();

    const root = createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <ReduxProvider store={configureAppStore(preloadedState)}>
                <AppContextProvider>
                    <Demo />
                </AppContextProvider>
            </ReduxProvider>
        </React.StrictMode>
    );
})();
