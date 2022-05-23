import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
    fullscreenMapSelector,
    isFullscreenMapToggled,
} from '../../store/reducers/UI';

import { MapView, SearchWidget } from '../../components/ArcGIS';
import { WEB_MAP_ID } from '../../constants/map';

import { ErrorBoundary } from '../../components';

const ToggleBtn: React.FC = () => {
    const dispatch = useDispatch();

    const fullscreenMap = useSelector(fullscreenMapSelector);

    return (
        <button
            className="btn absolute top-2 right-2 bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => {
                dispatch(isFullscreenMapToggled());
            }}
        >
            {!fullscreenMap ? 'open full screen map' : 'close full screen'}
        </button>
    );
};

const MapContainer: React.FC = () => {
    const fullscreenMap = useSelector(fullscreenMapSelector);

    return (
        <div
            className={
                fullscreenMap
                    ? 'fixed top-0 left-0 w-full h-full'
                    : 'relative w-96 h-96 ml-auto mr-auto'
            }
        >
            <MapView webmapId={WEB_MAP_ID}>
                <SearchWidget position="top-leading" />
            </MapView>
        </div>
    );
};

const DemoPage = () => {
    return (
        <>
            <ErrorBoundary>
                <MapContainer />
                <ToggleBtn />
            </ErrorBoundary>
        </>
    );
};

export default DemoPage;
