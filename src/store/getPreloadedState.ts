import { PartialRootState } from './configureStore';

import { initialUIState, UIState } from '../store/reducers/UI';

const getPreloadedUIState = (): UIState => {
    return {
        ...initialUIState,
    };
};

const getPreloadedState = (): PartialRootState => {
    return {
        UI: getPreloadedUIState(),
    };
};

export default getPreloadedState;
