import React from 'react';

import { ErrorBoundary } from '@components/ErrorBoundary';
import MapViewContainer from './MapView/MapViewContainer';
import WebMapSelector from './WebMapSelector/WebMapSelector';

export const ArcGISMapDemo = () => {
    return (
        <>
            <ErrorBoundary>
                <MapViewContainer />
                <WebMapSelector />
            </ErrorBoundary>
        </>
    );
};
