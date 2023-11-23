import { PartialRootState } from './configureStore';

import { initialMapState, MapState } from './Map/reducer';

const getPreloadedMapState = (): MapState => {
    return {
        ...initialMapState,
    };
};

const getPreloadedState = (): PartialRootState => {
    return {
        Map: getPreloadedMapState(),
    };
};

export default getPreloadedState;
