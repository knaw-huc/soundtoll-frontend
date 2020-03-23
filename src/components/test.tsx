import React from 'react'
import {Map, TileLayer, Marker, Popup} from "react-leaflet";
import {useState, useEffect} from "react";
import {SONT_SERVICE} from "../config";

export default function MapInfo(props: {code: string}) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    async function fetchData() {
        const response = await fetch(SONT_SERVICE + "map/" + props.code);
        const json = await response.json();
        setData(json);
        setLoading(false);
    }

    const lat: number = 53.42916600;
    const long: number = 14.55277700;
    const position: [number, number] = [lat, long];
    return (

        <Map style={{width: "1000px", height: "600px"}} center={position} zoom={13}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br/> Easily customizable.
                </Popup>
            </Marker>
        </Map>
    )

}