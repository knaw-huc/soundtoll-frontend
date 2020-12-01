import React from "react";
import {goOut} from "../../misc/functions";
import "../../assets/css/soundtoll.css";

export default class AboutNL extends React.Component {

    render()  {
        return(

            <div>
                <h2>Over STRO</h2>
                <div className="hcContentContainer">
                    <div className="hc2columns">
                        <div className="hcBrowseCollection"><p><strong>Wat is STRO</strong></p>
                            <p><div className="hcClickable">Invoerwerkwijze</div> (Dutch)</p>
                            <p><div className="hcClickable">Beknopte bronnenkritiek STRO-database </div></p>
                            <p><div className="hcClickable">Beknopte bronnenkritiek van de originele STR</div></p>
                            <p>&nbsp;</p>
                        </div>
                        <div className="hcBrowseCollection"><p><strong>Handleiding</strong></p>
                            <p>In bewerking</p>
                        </div>

                    </div>
                    <div className="hc2columns">
                        <div className="hcBrowseCollection"><p><strong>Nuttige documenten</strong></p>
                            <p><a href="#currencies">Volledige lijst met STR-microfilms</a></p>
                            <p><a href="#about/en/">(Onvolledige) lijst met producten die als ladingen in STRO voorkomen</a></p>
                            <p><a href="#about/en/">Romeinse cijfers in STRO: notatie en interpretatie</a></p>
                        </div>
                        <div className="hcBrowseCollection"><p><strong>Totstandkoming STRO</strong></p>
                            <p><a href="#commodities">Projectorganisatie</a></p>
                            <p><div className="hcClickable" onClick={() => goOut("http://www.soundtoll.nl/images/files/List%20of%20products2.pdf")}>Vrijwilligers</div></p>
                            <p><a href="#about/en/">Dankbetuiging</a></p>
                            <p><a href="#about/en/">Financiering</a></p>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}