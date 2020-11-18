import React from 'react';

import {
    MapView
} from '../../components';

import {
    CalciteGrid
} from '../../components/Atoms';

import {
    WEB_MAP_ID
} from '../../constants/map'

const DemoPage = () => {
    return (
        <CalciteGrid
            column={12}
            centerColumn={true}
        >
            <div 
                style={{
                    position: 'relative',
                    height: 500,
                    marginTop: '2rem'
                }}
            >
                <MapView 
                    webmapId={WEB_MAP_ID}
                />
            </div>
        </CalciteGrid>
    );
};

export default DemoPage;