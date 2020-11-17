import './styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import configureAppStore, { getPreloadedState } from './store/configureStore';

import AppContextProvider from './contexts/AppContextProvider';

import { setDefaultOptions } from 'esri-loader';

import {
    MapView
} from './components';

import {
    WEB_MAP_ID
} from './constants/map'

setDefaultOptions({
    url: 'https://js.arcgis.com/next/',
});

(async () => {
    const preloadedState = getPreloadedState();

    ReactDOM.render(
        <ReduxProvider store={configureAppStore(preloadedState)}>
            <AppContextProvider>
                <MapView 
                    webmapId={WEB_MAP_ID}
                />
            </AppContextProvider>
        </ReduxProvider>,
        document.getElementById('root')
    );
})();
