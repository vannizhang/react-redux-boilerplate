import React from 'react';

import {
    MapView
} from '../../components';

import {
    Spacing,
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
            <Spacing
                marginTop='3rem'
            >
                <div 
                    style={{
                        position: 'relative',
                        height: 500,
                    }}
                >
                    <MapView 
                        webmapId={WEB_MAP_ID}
                    />
                </div>

            </Spacing>

        </CalciteGrid>
    );
};

export default DemoPage;