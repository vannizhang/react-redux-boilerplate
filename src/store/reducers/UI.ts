import {
    createSlice,
    createSelector,
    PayloadAction,
    // createAsyncThunk
} from '@reduxjs/toolkit';

import { RootState, StoreDispatch, StoreGetState } from '../configureStore';

export type UIState = {
    fullscreenMap?: boolean;
};

export const initialUIState: UIState = {
    fullscreenMap: false,
};

const slice = createSlice({
    name: 'UI',
    initialState: initialUIState,
    reducers: {
        isFullscreenMapToggled: (state) => {
            state.fullscreenMap = !state.fullscreenMap;
        },
    },
});

const { reducer } = slice;

export const { isFullscreenMapToggled } = slice.actions;

export const fullscreenMapSelector = createSelector(
    (state: RootState) => state.UI.fullscreenMap,
    (fullscreenMap) => fullscreenMap
);

export default reducer;
