import { updateWebmapId } from './thunks';
import configureAppStore, { AppStore } from '../configureStore';
import { selectWebmapId } from './selectors';

describe('Redux Store - test Map thunks', () => {
    let store: AppStore;

    beforeEach(() => {
        store = configureAppStore();
    });

    it('updateWebmapId thunk should dispatch webmapIdChanged action', async () => {
        const newWebMapId = `12345`;

        await store.dispatch(updateWebmapId(newWebMapId));

        expect(selectWebmapId(store.getState())).toEqual(newWebMapId);
    });
});
