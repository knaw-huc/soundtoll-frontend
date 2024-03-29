import React from "react";
import {goOut} from "../../misc/functions";
import "../../assets/css/soundtoll.css";
import {getServiceServer, getHome} from "../../config";

export default function AboutNL()  {
    const PDF_PATH = getHome() + "/data/pdf/";
        return(

            <div>
                <h2>Over STRO</h2>
                <div className="hcContentContainer">
                    <div className="hc2columns">
                        <div className="hcBrowseCollection"><p><strong>Wat is STRO</strong></p>
                            <p><div className="hcClickable" onClick={() => goOut(PDF_PATH + "method.pdf")}>Invoerwerkwijze</div> (Engels)</p>
                            <p><div className="hcClickable" onClick={() => goOut(PDF_PATH + "sc_database.pdf")}>Beknopte bronnenkritiek STRO-database</div> (Engels)</p>
                            <p><div className="hcClickable" onClick={() => goOut(PDF_PATH + "sc_source.pdf")}>Beknopte bronnenkritiek van de originele STR</div> (Engels)</p>
                            <p>&nbsp;</p>
                        </div>
                        <div className="hcBrowseCollection"><p><strong>Handleiding</strong></p>
                            <p><div className="hcClickable" onClick={() => goOut(PDF_PATH + "STRO_gebruiksaanwijzing.pdf")}>Gebruikershandleiding</div></p>
                        </div>

                    </div>
                    <div className="hc2columns">
                        <div className="hcBrowseCollection"><p><strong>Nuttige documenten</strong></p>
                            <p><div className="hcClickable" onClick={() => goOut(PDF_PATH + "stro_films.pdf")}>Volledige lijst met STR-microfilms</div></p>
                            <p><div  className="hcClickable" onClick={() => goOut(PDF_PATH + "products.pdf")}>(Onvolledige) lijst met producten die als ladingen in STRO voorkomen</div></p>
                            <p><div  className="hcClickable" onClick={() => goOut(PDF_PATH + "roman_numerals.pdf")}>Romeinse cijfers in STRO: notatie en interpretatie</div></p>
                            <p><div  className="hcClickable" onClick={() => goOut(PDF_PATH + "Pund-og-Alen.pdf")}>Maten en gewichten 1: Poul Thestrup, <i>Pund og alen</i></div></p>
                            <p><div  className="hcClickable" onClick={() => goOut(PDF_PATH + "websites_weights_measures.pdf")}>Maten en gewichten 2: nuttige websites</div></p>
                        </div>
                        <div className="hcBrowseCollection"><p><strong>Totstandkoming STRO</strong></p>
                            <p><div className="hcClickable" onClick={() => goOut(PDF_PATH + "stro_project_organisatie.pdf")}>Projectorganisatie</div></p>
                            <p><div className="hcClickable" onClick={() => goOut(PDF_PATH + "volunteers.pdf")}>Vrijwilligers</div></p>
                            <p><div className="hcClickable" onClick={() => goOut(PDF_PATH + "stro_dankbetuiging.pdf")}>Dankbetuiging</div></p>
                            <p><div className="hcClickable" onClick={() => goOut(PDF_PATH + "stro_financiering.pdf")}>Financiering</div></p>
                        </div>
                    </div>

                </div>
            </div>

        )
}