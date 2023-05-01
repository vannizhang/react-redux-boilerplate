import reducer, { initialMapState, webmapIdChanged } from './reducer';

import { selectWebmapId } from './selectors';

describe('Redux Store - test Map selectors', () => {
    it('should return correct web map id', () => {
        const newState = reducer(initialMapState, webmapIdChanged('12345'));
        expect(selectWebmapId({ Map: newState } as any)).toEqual('12345');
    });
});
