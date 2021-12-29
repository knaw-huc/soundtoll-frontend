import React from "react";
import {useState, useEffect} from "react";
import Header from "../page/header";
import Footer from "../page/footer";
import "../assets/css/soundtoll.css";
import {SONT_SERVICE} from "../config";
import PlacesNamesList from "./placesNamesList";
import {IPlaceList, IResult} from "../misc/interfaces";

function BigRegions() {
    const [region, setRegion] = useState("14");
    let [result, setResult] = useState<IResult>({number_of_records: 0, data: {}});
    let [loading, setLoading] = useState(true);
    const [port, setPort] = useState("plaats_standaard");

    async function fetchUrl() {
        const response = await fetch(SONT_SERVICE + "big_regions/" + region + "/" + port);
        const json = await response.json();
        setResult(json);
        setLoading(false);
    }


    useEffect(() => {
        fetchUrl();
    }, [region, port]);
    const data = result.data as IPlaceList;
    const lastPage: number = data.number_of_pages;

    return (
        <div>
            <Header/>
            <div className="hcContentContainer hcMarginBottom5">
                <div className="hcBasicSideMargin hcMarginTop1 hcMarginBottom5">
                    <h2>Placenames standardized</h2>
                    <div className="hcLetterPicker">
                        <div className="hcRightMargin"><select className="hcPortPicker" value={region} onChange={(e) => setRegion(e.target.value)}>
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
                        </select></div>
                        <div className="hcRightMargin"><select className="hcPortPicker" value={port} onChange={(e) => setPort(e.target.value)}>
                            <option value="plaats_standaard">Home port</option>
                            <option value="van_standaard.plaats">Port of departure</option>
                            <option value="naar_standaard.plaats">Port of destination</option>
                        </select></div>
                    </div>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <div>
                            <PlacesNamesList namesList={result as IResult} port={port}/>
                        </div>

                    )}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default BigRegions;