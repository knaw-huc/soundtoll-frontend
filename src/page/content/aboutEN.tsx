import React from "react";
import {goOut} from "../../misc/functions";
import "../../assets/css/soundtoll.css";
//import {PDF_PATH} from "../../config";
import {getServiceServer, getHome} from "../../config";


export default class AboutEN extends React.Component {

    render()  {
        const PDF_PATH = getHome() + "/data/pdf/";

        return(

            <div>
                        <h2>About STRO</h2>
                        <div className="hcContentContainer">
                            <div className="hc2columns">
                                <div className="hcBrowseCollection"><p><strong>What is STRO</strong></p>
                                    <p><div className="hcClickable" onClick={() => goOut(PDF_PATH + "method.pdf")}>Data entry method</div></p>
                                    <p><div className="hcClickable" onClick={() => goOut(PDF_PATH + "sc_database.pdf")}>A concise source criticism of STRO database</div></p>
                                    <p><div className="hcClickable" onClick={() => goOut(PDF_PATH + "sc_source.pdf")}>A concise source criticism of the original STR</div></p>
                                    <p>&nbsp;</p>
                                </div>
                                <div className="hcBrowseCollection"><p><strong>Manual</strong></p>
                                    <p><div className="hcClickable" onClick={() => goOut(PDF_PATH + "STRO_manual.pdf")}>User manual</div></p>
                                </div>

                            </div>
                            <div className="hc2columns">
                                <div className="hcBrowseCollection"><p><strong>Helpful documents</strong></p>
                                    <p><div className="hcClickable" onClick={() => goOut(PDF_PATH + "stro_films.pdf")}>A complete list of STR microfilms</div></p>
                                    <p><div className="hcClickable" onClick={() => goOut(PDF_PATH + "products.pdf")}>(Incomplete) list of products that occur as cargoes in STRO</div></p>
                                    <p><div className="hcClickable" onClick={() => goOut(PDF_PATH + "roman_numerals.pdf")}>Roman numerals in STR: usage and interpretation</div></p>
                                    <p><div  className="hcClickable" onClick={() => goOut(PDF_PATH + "Pund-og-Alen.pdf")}>Weights and measurements 1: Poul Thestrup, <i>Pund og alen</i></div></p>
                                    <p><div  className="hcClickable" onClick={() => goOut(PDF_PATH + "websites_weights_measures.pdf")}>Weights and measurements 2: Useful websites</div></p>
                                </div>
                                <div className="hcBrowseCollection"><p><strong>The establishment of STRO</strong></p>
                                    <p><div className="hcClickable" onClick={() => goOut(PDF_PATH + "stro_project_organization.pdf")}>Project organization</div></p>
                                    <p><div className="hcClickable" onClick={() => goOut(PDF_PATH + "volunteers.pdf")}>Volunteers</div> (Dutch)</p>
                                    <p><div className="hcClickable" onClick={() => goOut(PDF_PATH + "stro_acknowledgements.pdf")}>Acknowledgement</div></p>
                                    <p><div className="hcClickable" onClick={() => goOut(PDF_PATH + "stro_funding.pdf")}>Funding</div></p>
                                </div>
                            </div>

                        </div>
                    </div>

        )
    }
}