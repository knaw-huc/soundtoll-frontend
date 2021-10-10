import React from "react";
import Header from "../page/header";
import Footer from "../page/footer";
import{DOWNLOAD_PATH} from "../config";
import {saveAs} from "file-saver";

function Download() {
    function getFile(name: string) {
        saveAs(DOWNLOAD_PATH + name, name);
    }

    return (
        <div>
            <Header/>
            <div className="hcContentContainer hcMarginBottom5">
                <div className="hcBasicSideMargin hcMarginTop1 hcMarginBottom5">
                    <h1>Download database data</h1>
                    <ul className="downloadList">
                        <li>Taxes / belastingen: <div className="hcClickable" onClick={() => {getFile('belastingen.sql.zip')}}>belastingen.sql.zip</div> (14,2 MB)</li>
                        <li>Currency / valuta: <div className="hcClickable" onClick={() => {getFile('currency.sql.zip')}}>currency.sql.zip</div> (2 KB)</li>
                        <li>Passages / doorvaarten: <div className="hcClickable" onClick={() => {getFile('doorvaarten.sql.zip')}}>doorvaarten.sql.zip</div> (80 MB)</li>
                        <li>Cargo / ladingen: <div className="hcClickable" onClick={() => {getFile('ladingen.sql.zip')}}>ladingen.sql.zip</div> (84,3 MB)</li>
                        <li>Measures / maten: <div className="hcClickable" onClick={() => {getFile('maten.sql.zip')}}>maten.sql.zip</div> (13 KB)</li>
                        <li>Registers: <div className="hcClickable" onClick={() => {getFile('registers_totaal.sql.zip')}}>registers_totaal.sql.zip</div> (21 KB)</li>
                        <li>Sections / secties: <div className="hcClickable" onClick={() => {getFile('secties_totaal.sql.zip')}}>secties_totaal.sql.zip</div> (75 KB)</li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Download