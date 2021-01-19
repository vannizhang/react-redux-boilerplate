import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
    fullscreenMapSelector,
    isFullscreenMapToggled,
} from '@store/reducers/UI';

import { MapView, SearchWidget } from '@components/ArcGIS';

import { Spacing, CalciteGrid } from '@components/Atoms';

import { WEB_MAP_ID } from '@constants/map';

type MapContainerProps = {
    isFullscreen: boolean;
    toggleFullscreen: () => void;
};

const MapContainer: React.FC<MapContainerProps> = ({
    isFullscreen,
    toggleFullscreen,
}: MapContainerProps) => {
    const getStyle = (): React.CSSProperties => {
        if (isFullscreen) {
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
        <div style={getStyle()}>
            <MapView webmapId={WEB_MAP_ID}>
                <SearchWidget position="top-leading" />
            </MapView>

            <div
                style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                }}
            >
                <button className="btn btn-white" onClick={toggleFullscreen}>
                    {isFullscreen ? (
                        <svg viewBox="0 0 24 24" height="24" width="24">
                            <path d="M22.154 2.554L16.707 8H21v1h-6V3h1v4.293l5.446-5.447zm-19.6 19.6L8 16.707V21h1v-6H3v1h4.293l-5.447 5.446zm19.6-.707L16.707 16H21v-1h-6v6h1v-4.293l5.446 5.446zM1.846 2.554L7.293 8H3v1h6V3H8v4.293L2.554 1.846z" />
                            <path fill="none" d="M0 0h24v24H0z" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" height="24" width="24">
                            <path d="M9.354 15.354L3.7 21H8v1H2v-6h1v4.285l5.646-5.639zM22 2h-6v1h4.3l-5.654 5.646.707.708L21 3.715V8h1zm-6 20h6v-6h-1v4.285l-5.646-5.639-.707.708L20.3 21H16zM8 2H2v6h1V3.715l5.646 5.639.707-.708L3.7 3H8z" />
                            <path fill="none" d="M0 0h24v24H0z" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
};

const DemoPage = () => {
    const dispatch = useDispatch();

    const fullscreenMap = useSelector(fullscreenMapSelector);

    return (
        <CalciteGrid column={12} centerColumn={true}>
            <Spacing marginTop="3rem" marginBottom="1rem">
                <MapContainer
                    isFullscreen={fullscreenMap}
                    toggleFullscreen={() => {
                        dispatch(isFullscreenMapToggled());
                    }}
                />
            </Spacing>
        </CalciteGrid>
    );
};

export default DemoPage;
