import './styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import configureAppStore, {
    getPreloadedState
} from './store/configureStore';

import AppContextProvider from './contexts/AppContextProvider';

import { setDefaultOptions } from 'esri-loader';

setDefaultOptions({
    url: 'https://js.arcgis.com/next/'
});

const init = (async()=>{

    const preloadedState = getPreloadedState();

    ReactDOM.render(
        <ReduxProvider store={configureAppStore(preloadedState)}>
            <AppContextProvider>
                <h5>hello world</h5>
            </AppContextProvider>
        </ReduxProvider>,
        document.getElementById('root')
    );

})();
