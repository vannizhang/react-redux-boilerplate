import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
    fullscreenMapSelector,
    isFullscreenMapToggled,
} from '../../store/reducers/UI';

import { MapView, SearchWidget } from '../../components/ArcGIS';
import { WEB_MAP_ID } from '../../constants/map';

const ToggleBtn = () => {
    const dispatch = useDispatch();

    const fullscreenMap = useSelector(fullscreenMapSelector);

    return (
        <div
            style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
            }}
        >
            <button
                className="btn"
                onClick={() => {
                    dispatch(isFullscreenMapToggled());
                }}
            >
                {!fullscreenMap ? 'open full screen map' : 'close full screen'}
            </button>
        </div>
    );
};

const MapContainer = () => {
    const fullscreenMap = useSelector(fullscreenMapSelector);

    const getContainerStyle = (): React.CSSProperties => {
        if (fullscreenMap) {
            return {
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100vh',
                width: '100vw',
            };
        }

        return {
            position: 'relative',
            height: 500,
        };
    };

    return (
        <div style={getContainerStyle()}>
            <MapView webmapId={WEB_MAP_ID}>
                <SearchWidget position="top-leading" />
            </MapView>
        </div>
    );
};

const DemoPage = () => {
    return (
        <>
            <MapContainer />
            <ToggleBtn />
        </>
    );
};

export default DemoPage;
