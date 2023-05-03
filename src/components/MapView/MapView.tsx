import React, { useEffect, useState, useRef } from 'react';

import { loadModules, loadCss } from 'esri-loader';
import IMapView from 'esri/views/MapView';
import IWebMap from 'esri/WebMap';

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

loadCss();

const MapView: React.FC<Props> = ({
    webmapId,
    center,
    zoom,
    children,
}: Props) => {
    const mapDivRef = useRef<HTMLDivElement>();

    const [mapView, setMapView] = useState<IMapView>(null);

    const initMapView = async () => {
        type Modules = [typeof IMapView, typeof IWebMap];

        try {
            const [MapView, WebMap] = await (loadModules([
                'esri/views/MapView',
                'esri/WebMap',
            ]) as Promise<Modules>);

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
        } catch (err) {
            console.error(err);
        }
    };

    const updateWebmapId = async () => {
        type Modules = [typeof IWebMap];

        try {
            const [WebMap] = await (loadModules([
                'esri/WebMap',
            ]) as Promise<Modules>);

            mapView.map = new WebMap({
                portalItem: {
                    id: webmapId,
                },
            });
        } catch (err) {
            console.error(err);
        }
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

export default MapView;
