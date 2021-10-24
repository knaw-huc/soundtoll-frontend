import React from "react";
import {useState, useEffect} from "react";
import Header from "../page/header";
import Footer from "../page/footer";
import {ISearchMapData, ISearchObject, ISearchValues} from "../misc/interfaces";
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import {ELASTIC_URL, SONT_SERVICE} from "../config";
import {Base64} from "js-base64";

export default function Maps() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<ISearchMapData>({number_of_records: 0, data: []});
    const [port, setPort] = useState("home_port");
    window.scroll(0,0);

    let searchData: ISearchObject = {
        facetstate: {
            search: true,
            shipmaster: false,
            departure: false,
            arrival: false,
            standard: false,
            misc: false
        },
        searchvalues: "none",
        page: 1,
        sortorder: "schipper_achternaam.raw;asc"
    }

    async function fetchData() {
        const url = SONT_SERVICE + "map_places";
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
    }

    function goSearch(name: string)
        {
            switch (port) {
                case "home_port":
                    searchData.searchvalues = [{name: "Home port (standardized)", field: "plaats_standaard", values: [name]} as ISearchValues];
                    break;
                case "":
                    searchData.searchvalues = [{name: "Port of departure (standardized)", field: "van_standaard.plaats", values: [name]} as ISearchValues];
                    break;
                case "naar_standaard.plaats":
                    searchData.searchvalues = [{name: "Port of arrival (standardized)", field: "naar_standaard.plaats", values: [name]} as ISearchValues];
                    break;
            }
            const codedData: string = Base64.toBase64(JSON.stringify(searchData));
            window.location.href = "/#search/" + codedData;
            window.scroll(0, 0);
        }

    useEffect(() => {
        fetchData();
    }, [loading]);

    return (
        <div>
            <Header/>
            <div className="hcContentContainer hcMarginBottom5">
                <div className="hcBasicSideMargin hcMarginTop1 hcMarginBottom5">
                    <h2>Map</h2>
                    <div className="hcLayoutFacet-Result hcBasicSideMargin hcMarginBottom15">
                        <div className="hcLayoutFacets">
                            <div className="hcFacet">
                                <div className="hcFacetTitle">
                                    <span>Port</span>
                                </div>
                                <select>
                                    <option value="home_port">Home port</option>
                                    <option value="from_port">Port of departure</option>
                                    <option value="to_port">Port of arrival</option>
                                </select>
                            </div>
                            <div className="hcFacet">
                                <div className="hcFacetTitle">
                                    <span>Big region</span>
                                </div>
                            </div>
                        </div>

                        <div className="hcLayoutResults">
                            <div className="hcResultsHeader hcMarginBottom1">
                                {loading ? (
                                    <div>Loading...</div>
                                ) : (
                                    <Map center={[47.816387, 6.381389]} zoom={2}>
                                        <TileLayer
                                            url="https://d.tile.openstreetmap.de/{z}/{x}/{y}.png"
                                            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                                        />
                                        {data.data.map((item) => {
                                            let position: [number, number] = [item.lat as number, item.lon as number];
                                            return (<Marker position={position}>
                                                <Popup><span className="hcClickable"
                                                             onClick={() => {
                                                                 goSearch(item.place_standard);
                                                             }}>{item.place_standard}</span></Popup>
                                            </Marker>);
                                        })}
                                    </Map>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}