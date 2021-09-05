import React from "react";
import Header from "../page/header";
import Footer from "../page/footer";
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import {SONT_SERVICE} from "../config";
import {useState, useEffect} from "react";
import {IMapData} from "../misc/interfaces";

function Geomap(props: { code: string }) {
    const [data, setData] = useState<IMapData>({name: "", region: "", lat: 0, long: 0, zoom: 1});
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://d.tile.openstreetmap.de/{z}/{x}/{y}.png");

    window.scroll(0,0);

    async function fetchData() {
        const response = await fetch(SONT_SERVICE + "map/" + props.code);
        const json = await response.json();
        setData(json);
        setLoading(false);
    }

    const position: [number, number] = [data.lat as number, data.long as number]

    const map = (
        <Map center={position} zoom={data.zoom as number}>
            <TileLayer
                url={url}
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={position}>

            </Marker>
        </Map>
    );

    useEffect(() => {
        fetchData();
    }, [loading]);

    return (
        <div>
            <Header/>
            {loading ? (<div>Loading...</div>) : ( <div className="hcContentContainer hcMarginBottom5">
                <div className="hcBasicSideMargin hcMarginTop1 hcMarginBottom5">
                    <h1>{data.name}</h1>
                    {map}
                    <button className="ftSearchBtn" onClick={() => {window.history.back()}}>Back</button>
                    {data.region == 'Danmark' &&  <div className="mapControl">
                        <button className="ftSearchBtn" onClick={() => {setUrl("https://d.tile.openstreetmap.de/{z}/{x}/{y}.png")}}>Standard</button>
                        <button className="ftSearchBtn" onClick={() => {setUrl("https://hisgis.nl/dk/topo20_hoeje_maalebordsblade/{z}/{x}/{y}.png")}}>Historical</button>
                    </div>}
                </div>
            </div>)}

            <Footer/>
        </div>
    )
}

export default Geomap;

