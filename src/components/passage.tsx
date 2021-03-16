import React from "react";
import Header from "../page/header";
import Footer from "../page/footer";
import PassageDetails from "./passageDetails";
import {IResult, IPassageData} from "../misc/interfaces";
import {SONT_SERVICE} from "../config";
import {useEffect, useState} from "react";
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';

function Passage(props: { passageId: number }) {

    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState<IResult>({number_of_records: 0, data: {} as IPassageData});
    const [imageData, setImagedata] = useState({open: false, url: ""});
    const dv: IPassageData = result.data as IPassageData;

    async function fetchData() {
        const response = await fetch(SONT_SERVICE + "passage/" + props.passageId.toString());
        const json = await response.json();
        setResult(json);
        setLoading(false);
    }
    
    useEffect(() => {
        fetchData();
    },[loading])

    function openImage(scanUrl: string): void {
        setImagedata({open: true, url: scanUrl});
    }

    function closeImage(): void {
        setImagedata({open: false, url: ""});
    }



    return (
        <div>
            <Header/>
            <div className="hcContentContainer hcMarginBottom5">
                <div className="hcBasicSideMargin hcMarginTop1 hcMarginBottom5">
                    <h1>
                        {dv.jaar > 1633  ? (<div>Passage</div>) : (<div>Registration</div>)}
                    </h1>
                    <div className="hcLayoutFacet-Result hcBasicSideMargin hcMarginBottom15">
                        <div className="hcLayoutFacets">
                            {loading ? (<div/>) : (
                                dv.scans.map(item => {
                                    return (
                                        <div>
                                            <img id="hcLeftScan" src={item.url} onClick={() => {openImage(item.url)}} alt={item.bestandsnaam}/>
                                            <span className="hcScanName">{item.bestandsnaam}</span>
                                        </div>
                                    )
                                })
                            )}
                        </div>
                        <div className="hcLayoutResults">
                            <div className="hcResultsHeader hcMarginBottom1">
                                <div className="hcPassageContainer">
                                    {loading ? (<div/>) : (
                                        <div>
                                            <PassageDetails passage={result as IResult}/>
                                        </div>
                                    )}


                                </div>
                                {imageData.open && (
                                    <Lightbox
                                        mainSrc={imageData.url}
                                        onCloseRequest={() => closeImage()}
                                        imageLoadErrorMessage="Image was not found!"
                                    />
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

export default Passage;
