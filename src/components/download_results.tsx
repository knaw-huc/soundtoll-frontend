import React from "react";
import Header from "../page/header";
import Footer from "../page/footer";
import {saveAs} from "file-saver";
import {SONT_SERVICE} from "../config";


function DownloadResults(props: {search_string: string}) {
    function getFile(name: string) {
        saveAs(SONT_SERVICE + "download_results/" + "?name=" + name + "&q=" + props.search_string, name + ".csv");
    }

    return (
        <div>
            <Header/>
            <div className="hcContentContainer hcMarginBottom5">
                <div className="hcBasicSideMargin hcMarginTop1 hcMarginBottom5">
                    <h1>Download result data</h1>
                    <p>
                        <ul>
                            <li><div className="hcClickable" onClick={() => {getFile("doorvaarten")}}>Passages</div></li>
                            <li><div className="hcClickable" onClick={() => {getFile("belastingen")}}>Taxes</div></li>
                            <li><div className="hcClickable" onClick={() => {getFile("ladingen")}}>Cargos</div></li>
                            <li><div className="hcClickable" onClick={() => {getFile("images")}}>Scans</div></li>
                        </ul>
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default DownloadResults;