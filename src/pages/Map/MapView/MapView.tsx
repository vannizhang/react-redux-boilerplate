import React, { useEffect, useState, useRef } from 'react';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';

interface Props {
    /**
     * item id of the selected webmap
     */
    webmapId: string;
    /**
     * center of the map view in format of [longitude, latitude] (e.g. [-105, 40])
     */
    center?: number[];
    /**
     * zoom level
     */
    zoom?: number;
    /**
     * all child element will receive the mapView as one of it's properties
     */
    children?: React.ReactNode;
}

const ArcGISMapView: React.FC<Props> = ({
    webmapId,
    center,
    zoom,
    children,
}: Props) => {
    const mapDivRef = useRef<HTMLDivElement>();

    const [mapView, setMapView] = useState<MapView>(null);

    const initMapView = () => {
        const view = new MapView({
            container: mapDivRef.current,
            map: new WebMap({
                portalItem: {
                    id: webmapId,
                },
            }),
            center,
            zoom,
        });

        view.when(() => {
            setMapView(view);
        });
    };

    const updateWebmapId = () => {
        mapView.map = new WebMap({
            portalItem: {
                id: webmapId,
            },
        });
    };

    useEffect(() => {
        initMapView();
    }, []);

    useEffect(() => {
        if (mapView) {
            updateWebmapId();
        }
    }, [webmapId]);

    return (
        <>
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
                ref={mapDivRef}
            ></div>
            {mapView
                ? React.Children.map(children, (child) => {
                      return React.cloneElement(
                          child as React.ReactElement<any>,
                          {
                              mapView,
                          }
                      );
                  })
                : null}
        </>
    );
};

export default ArcGISMapView;
