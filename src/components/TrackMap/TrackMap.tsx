import React, { useState } from 'react';
import Leaflet/*, {LatLngExpression}*/ from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import marker from "../../img/marker.svg";
import { Polyline } from 'react-leaflet';

export default function TrackMap() {
    const selectedRowKeys: any = [];
    const data: any = [];

    let markerIcon = L.icon({
        iconUrl: marker,
        iconRetinaUrl: marker,
    });

    const limeOptions = { color: 'lime' }

    const markers = selectedRowKeys.map((s: any) => {
        const way = data.find(((d: any) => d.key === s));
        return (
            <>
                <Marker
                    position={way?.start}
                    icon={markerIcon}
                />
                <Polyline pathOptions={limeOptions} positions={way?.track as any} />
                <Marker
                    position={way?.end}
                    icon={markerIcon}
                />
            </>

        )
    })
    return (
        <MapContainer
            className="MapContainerTest"
            center={[51.0, 19.0]}
            zoom={4}
            maxZoom={18}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {markers}


            {/* <Marker
          position={[51.0, 19.0]}
          icon={markerIcon}
        >
           <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup> 
        </Marker> */}
        </MapContainer>
    )
}