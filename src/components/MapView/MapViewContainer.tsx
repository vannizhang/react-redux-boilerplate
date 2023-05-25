import React from 'react';
import { useSelector } from 'react-redux';
import MapView from './MapView';
import { selectWebmapId } from '@store/Map/selectors';

const MapViewContainer = () => {
    const webmapId = useSelector(selectWebmapId);

    return (
        <div className={'fixed top-0 left-0 w-full h-full'}>
            <MapView webmapId={webmapId} center={[-105, 40]} zoom={9} />
        </div>
    );
};

export default MapViewContainer;
