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
                        <li>Taxes / belastingen: <br/>
                            <div className="hcClickable" onClick={() => {getFile('belastingen.csv.zip')}}>belastingen.csv.zip</div> (13,3 MB)<br/>
                            <div className="hcClickable" onClick={() => {getFile('belastingen.sql.zip')}}>belastingen.sql.zip</div> (14,2 MB)</li>

                        <li>Currency / valuta: <br/><div className="hcClickable" onClick={() => {getFile('currency.csv.zip')}}>currency.csv.zip</div> (2 KB)<br/>
                            <div className="hcClickable" onClick={() => {getFile('currency.sql.zip')}}>currency.sql.zip</div> (2 KB)</li>
                        <li>Passages / doorvaarten: <br/><div className="hcClickable" onClick={() => {getFile('doorvaarten.csv.zip')}}>doorvaarten.csv.zip</div> (70 MB)<br/>
                            <div className="hcClickable" onClick={() => {getFile('doorvaarten.sql.zip')}}>doorvaarten.sql.zip</div> (80 MB)
                            </li>
                        <li>Cargo / ladingen: <br/><div className="hcClickable" onClick={() => {getFile('ladingen.csv.zip')}}>ladingen.csv.zip</div> (77,5 MB)<br/>
                            <div className="hcClickable" onClick={() => {getFile('ladingen.sql.zip')}}>ladingen.sql.zip</div> (84,3 MB)
                            </li>
                        <li>Measures / maten: <br/><div className="hcClickable" onClick={() => {getFile('maten.csv.zip')}}>maten.csv.zip</div> (12 KB)<br/>
                            <div className="hcClickable" onClick={() => {getFile('maten.sql.zip')}}>maten.sql.zip</div> (13 KB)
                            </li>
                        <li>Registers: <br/><div className="hcClickable" onClick={() => {getFile('registers_totaal.csv.zip')}}>registers_totaal.csv.zip</div> (20 KB)<br/>
                            <div className="hcClickable" onClick={() => {getFile('registers_totaal.sql.zip')}}>registers_totaal.sql.zip</div> (21 KB)
                            </li>
                        <li>Sections / secties: <br/><div className="hcClickable" onClick={() => {getFile('secties_totaal.csv.zip')}}>secties_totaal.csv.zip</div> (74 KB)<br/>
                            <div className="hcClickable" onClick={() => {getFile('secties_totaal.sql.zip')}}>secties_totaal.sql.zip</div> (75 KB)
                            </li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Download