  
import {
    createSlice,
    createSelector,
    // createAsyncThunk
} from '@reduxjs/toolkit';

import { 
    RootState, 
    StoreDispatch, 
    StoreGetState 
} from '../configureStore';

export type UIState = {
    isTopNavVisible: boolean;
};

export const initialUIState = {
    isTopNavVisible: false,
} as UIState;

const slice = createSlice({
    name: 'UI',
    initialState: initialUIState,
    reducers: {
        isTopNavVisibleToggled: (state) => {
            state.isTopNavVisible = !state.isTopNavVisible;
        },
    }
});

const { reducer } = slice;

export const {
    isTopNavVisibleToggled
} = slice.actions;

export const getIsTopNavVisible = createSelector(
    (state: RootState) => state.UI.isTopNavVisible,
    (isTopNavVisible) => isTopNavVisible
);

export default reducer;