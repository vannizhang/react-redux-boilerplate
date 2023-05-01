import reducer, { initialMapState, webmapIdChanged } from './reducer';

describe('Redux Store - test Map reducer', () => {
    it('should contain correct initial state', () => {
        const initialState = reducer(initialMapState, {} as any);
        expect(initialState).toMatchObject(initialMapState);
    });

    it('should handle webmapIdChanged action', () => {
        const newState = reducer(initialMapState, webmapIdChanged('12345'));
        expect(newState.webmapId).toEqual('12345');
    });
});
