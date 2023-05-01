import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { updateWebmapId } from './thunks';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Redux Store - test Map thunks', () => {
    it('updateWebmapId thunk should dispatch webmapIdChanged action', async () => {
        const store = mockStore({});

        const newWebMapId = `12345`;

        await store.dispatch(updateWebmapId(newWebMapId));

        const actions = store.getActions();
        expect(actions[0].type).toEqual('Map/webmapIdChanged');
        expect(actions[0].payload).toEqual(newWebMapId);
    });
});
