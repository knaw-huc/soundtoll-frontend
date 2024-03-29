import React from "react";
import Header from "../page/header";
import Footer from "../page/footer";
import {goOut} from "../misc/functions";
import "../assets/css/soundtoll.css";
import {getServiceServer, getHome} from "../config";

export default class Browse extends React.Component {

    render()  {
        const PDF_PATH = getHome() + "/data/pdf/";

        return(

            <div>
                <Header/>
                <div className="hcContentContainer hcMarginBottom5">
                    <div className="hcBasicSideMargin">
                        <h2>Browse</h2>
                        <div className="hcContentContainer">
                            <div className="hc2columns">
                                <div className="hcBrowseCollection"><p><strong>Shipmasters</strong></p>
                                    <div className="hcClickable" onClick={() => { window.location.href = "#names"}}>Browse</div> through personal names.
                                </div>
                                <div className="hcBrowseCollection"><p><strong>Ports by name</strong></p>
                                    <p><a href="#hist_places" target="_new">Browse</a> through ports by historical names.</p>
                                    <p><a href="#places" target="_new">Browse</a> through ports by standardized names.</p>
                                </div>

                            </div>
                            <div className="hc2columns">
                                <div className="hcBrowseCollection"><p><strong>Scans</strong></p>
                                    <p><div className="hcClickable" onClick={() => { window.open("https://images.soundtoll.nl/?imagesetuuid=86a526ef-9798-45ec-8abd-fe187806ae64&uri=https://images.diginfra.net/api/pim/iiif/86a526ef-9798-45ec-8abd-fe187806ae64/canvas/492e11e3-dc91-41d8-9f2e-d8132c7077a0")}}>Browse</div> through passage document scans. (Change film by clicking the plus sign in the upper left corner of the reduced screen (‘Add resource’).)</p>
                                    <p>(See also <div className="hcClickable" onClick={() => { window.open(PDF_PATH + "stro_films.pdf")}}>the complete list</div> of STR microfilms for this.)</p>
                                </div>
                                <div className="hcBrowseCollection"><p><strong>Ports by region</strong></p>
                                    <p><a href="#big_regions" target="_new">Browse</a> through ports by big region.</p>
                                    <p><a href="#small_regions" target="_new">Browse</a> through ports by small region.</p>
                                </div>
                            </div>
                            <div className="hc2columns">
                                <div className="hcBrowseCollection"><p><strong>Information on currencies</strong></p>
                                    <p><a href="#currencies" target="_new">Browse</a> through currencies and relevant websites.</p>
                                    <p>&nbsp;</p>
                                </div>
                                <div className="hcBrowseCollection"><p><strong>Commodities</strong></p>
                                    <p><a href="#commodities" target="_new">Browse</a> through commodities.</p>
                                    <p>Download an (incomplete) list of commodities in <div className="hcClickable" onClick={() => goOut(PDF_PATH + "products.pdf")}>PDF</div> format.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}