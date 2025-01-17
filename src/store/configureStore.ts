import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';

import getPreloadedState from './getPreloadedState';

export type RootState = ReturnType<typeof rootReducer>;

export type PartialRootState = Partial<RootState>;

const configureAppStore = (preloadedState: PartialRootState = {}) => {
    const store = configureStore({
        reducer: rootReducer,
        preloadedState,
    });

    return store;
};

export type AppStore = ReturnType<typeof configureAppStore>;

export type StoreDispatch = ReturnType<typeof configureAppStore>['dispatch'];

export type StoreGetState = ReturnType<typeof configureAppStore>['getState'];

export { getPreloadedState };

export default configureAppStore;
