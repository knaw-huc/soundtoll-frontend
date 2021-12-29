import React from "react";
import {useState, useEffect} from "react";
import Header from "../page/header";
import Footer from "../page/footer";
import "../assets/css/soundtoll.css";
import {SONT_SERVICE} from "../config";
import PlacesNamesList from "./placesNamesList";
import {IPlaceList, IResult} from "../misc/interfaces";

function SmallRegions() {
    const [region, setRegion] = useState("1");
    let [result, setResult] = useState<IResult>({number_of_records: 0, data: {}});
    let [loading, setLoading] = useState(true);
    const [port, setPort] = useState("plaats_standaard");

    async function fetchUrl() {
        const response = await fetch(SONT_SERVICE + "small_regions/" + region + "/" + port);
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
                    <h2>Placenames small regions</h2>
                    <div className="hcLetterPicker">
                        <div className="hcRightMargin"><select className="hcPortPicker" value={region} onChange={(e) => setRegion(e.target.value)}>
                            <option value="32">Africa outside the Mediterranean</option>
                            <option value="30">African Mediterranean Ports</option>
                            <option value="1">Denmark</option>
                            <option value="17">England and Wales</option>
                            <option value="10">Esthonia</option>
                            <option value="33">Far East</option>
                            <option value="23">France - Atlantic Coast</option>
                            <option value="26">France - Mediterranean Coast</option>
                            <option value="5">Greenland and Davis Strait</option>
                            <option value="19">Hamburg, Bremen, Kleine Oost</option>
                            <option value="19">Hamburg. Bremen. Kleine Oost</option>
                            <option value="2">Holstein</option>
                            <option value="3">Iceland</option>
                            <option value="18">Ireland</option>
                            <option value="27">Italy</option>
                            <option value="12">Kurland</option>
                            <option value="34">Latin America</option>
                            <option value="11">Livland</option>
                            <option value="31">Mediterranean - unspecified</option>
                            <option value="36">North America</option>
                            <option value="36">North Amerika</option>
                            <option value="36">North Amwerica</option>
                            <option value="21">North Sea withou specification</option>
                            <option value="7">Norway</option>
                            <option value="29">Other European and Asian Ports in Medit.</option>
                            <option value="28">Ports at the Black Sea</option>
                            <option value="24">Portugal</option>
                            <option value="9">Russia around St. Petersburg</option>
                            <option value="22">Russian Arctic ports (Archangel)</option>
                            <option value="16">Scotland</option>
                            <option value="13">South Baltic: East Prussia to Lubeck</option>
                            <option value="25">Spain</option>
                            <option value="8">Sweden and Finland</option>
                            <option value="20">The Austrian Netherlands</option>
                            <option value="14">The Baltic without specification</option>
                            <option value="33">The Far East</option>
                            <option value="4">The Faroe Islands</option>
                            <option value="15">The Netherlands</option>
                            <option value="37">Unindentifiable Ports</option>
                            <option value="99">Unknown</option>
                            <option value="35">West-Indies</option>

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

export default SmallRegions;