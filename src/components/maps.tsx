import React from "react";
import {useState, useEffect} from "react";
import Header from "../page/header";
import Footer from "../page/footer";
import {ISearchMapData, ISearchObject, ISearchValues, IMapSearchStruc} from "../misc/interfaces";
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import {ELASTIC_URL, SONT_SERVICE} from "../config";
import {Base64} from "js-base64";

export default function Maps() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<ISearchMapData>({number_of_records: 0, data: []});
    const [port, setPort] = useState("home_port");
    const [region, setRegion] = useState("0");
    const [years, setYears] = useState("0");
    const [textField, setTextField] = useState<string>("");
    window.scroll(0, 0);
    const periods: string[] = [
        "none",
        "1497-1634",
        "1634-1857",
        "1634-1700",
        "1700-1750",
        "1750-1800",
        "1800-1857"
    ]

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

    let mapSearchData: IMapSearchStruc = {
        port: port,
        region: region,
        years: years,
        commodity: textField
    }

    async function fetchData() {
        const url = SONT_SERVICE + "map_places/?q=" + Base64.toBase64(JSON.stringify(mapSearchData));
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
    }

    function handleChange(e: React.FormEvent<HTMLInputElement>): void {
        setTextField(e.currentTarget.value);
    }

    function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>): void {
        if (e.key === 'Enter' && textField.trim() !== "") {
            setLoading(true);
        }
    }

    function setTextFacet() {
        setTextField("");
        setLoading(true);
    }

    function goSearch(name: string) {
        switch (port) {
            case "home_port":
                searchData.searchvalues = [{
                    name: "Home port (standardized)",
                    field: "FREE_TEXT:plaats_standaard",
                    values: [name]
                } as ISearchValues];
                break;
            case "from_port":
                searchData.searchvalues = [{
                    name: "Port of departure (standardized)",
                    field: "FREE_TEXT:van_standaard.plaats",
                    values: [name]
                } as ISearchValues];
                break;
            case "to_port":
                searchData.searchvalues = [{
                    name: "Port of destination (standardized)",
                    field: "naar_standaard.plaats",
                    values: [name]
                } as ISearchValues];
                break;
        }
        if (years !== "0") {
            if (typeof searchData.searchvalues !== 'string') {
                let jrs:ISearchValues = {name: "Period", field: "PERIOD", values: [periods[Number(years)]]};
                searchData.searchvalues.push(jrs);
            }
        }
        if (textField.trim() !== "") {
            let comm:ISearchValues = {name: "Commodity", field: "FREE_TEXT:lading.soort", values: [textField]};
            if (typeof searchData.searchvalues !== 'string') {
                searchData.searchvalues.push(comm);
            }
        }
        const codedData: string = Base64.toBase64(JSON.stringify(searchData));
        //window.location.href = "/#search/" + codedData;
        window.open("/#search/" + codedData);
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
                                <select onChange={(e) => {
                                    setPort(e.target.value);
                                    setLoading(true);
                                }}>
                                    <option value="home_port">Home port</option>
                                    <option value="from_port">Port of departure</option>
                                    <option value="to_port">Port of destination</option>
                                </select>
                            </div>
                            <div className="hcFacet">
                                <div className="hcFacetTitle">
                                    <span>Big region</span>
                                </div>
                                <select onChange={(e) => {
                                setRegion(e.target.value);
                                setLoading(true);}
                                }>
                                    <option value="0">All regions</option>
                                    <option value="14">Skagerrak, Kattegat (Denmark, Sweden)</option>
                                    <option value="1">The Baltic</option>
                                    <option value="2">North Sea (German/Danish coast)</option>
                                    <option value="9">Iceland. Faroer. Green Land and Davis Straits</option>
                                    <option value="4">Norway</option>
                                    <option value="16">Dutch Republic</option>
                                    <option value="5">Great Britain</option>
                                    <option value="3">Arctic (Archangel. Murmansk)</option>
                                    <option value="6">Atlantic Coasts of France Spain and Portugal</option>
                                    <option value="10">Africa outside the Mediterranean</option>
                                    <option value="7">The Mediterranean</option>
                                    <option value="8">Far East</option>
                                    <option value="13">South America</option>
                                    <option value="11">West Indies</option>
                                    <option value="12">North America</option>
                                    <option value="17">Fishing</option>
                                </select>
                            </div>
                            <div className="hcFacet">
                                <div className="hcFacetTitle">
                                    <span>Period</span>
                                </div>
                                <select onChange={(e) => {
                                    setYears(e.target.value);
                                    setLoading(true);
                                }}>
                                    <option value="0">All years</option>
                                    <option value="1">Years before 1634</option>
                                    <option value="2">Years 1634 - 1857</option>
                                    <option value="3">Years 1634 - 1700</option>
                                    <option value="4">Years 1700 - 1750</option>
                                    <option value="5">Years 1750 - 1800</option>
                                    <option value="6">Years 1800 - 1857</option>
                                </select>
                            </div>
                            <div className="hcFacet">
                                <div className="hcFacetTitle">
                                    <span>Commodity</span>
                                </div>
                                <input type="text" placeholder="Enter commodity name" value={textField} onChange={handleChange} onKeyUp={handleKeyPress}/>
                                <div>
                                    <button className="ftSearchBtn" onClick={setTextFacet}>Reset</button>
                                </div>
                            </div>
                        </div>

                        <div className="hcLayoutResults">
                            <div className="hcResultsHeader hcMarginBottom1">
                                {loading ? (
                                    <div>Loading...</div>
                                ) : (<div>
                                        {data.number_of_records} ports
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
                                </div>
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