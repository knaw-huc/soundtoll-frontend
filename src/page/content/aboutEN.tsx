import React from "react";
import {goOut} from "../../misc/functions";
import "../../assets/css/soundtoll.css";

export default class AboutEN extends React.Component {

    render()  {
        return(

            <div>
                        <h2>About STRO</h2>
                        <div className="hcContentContainer">
                            <div className="hc2columns">
                                <div className="hcBrowseCollection"><p><strong>What is STRO</strong></p>
                                    <p><div className="hcClickable">Data entry method</div> (Dutch)</p>
                                    <p><div className="hcClickable">A concise source criticism of STRO database</div></p>
                                    <p><div className="hcClickable">A concise source criticism of the original STR</div></p>
                                    <p>&nbsp;</p>
                                </div>
                                <div className="hcBrowseCollection"><p><strong>Manual</strong></p>
                                    <p>Upcoming</p>
                                </div>

                            </div>
                            <div className="hc2columns">
                                <div className="hcBrowseCollection"><p><strong>Helpful documents</strong></p>
                                    <p><a href="#currencies">A complete list of STR microfilms</a></p>
                                    <p><a href="#about/en/">Products that occur as cargoes in STRO</a></p>
                                    <p><a href="#about/en/">Roman numerals in STR: usage and interpretation</a></p>
                                </div>
                                <div className="hcBrowseCollection"><p><strong>The establishment of STRO</strong></p>
                                    <p><a href="#commodities">Project organization</a></p>
                                    <p><div className="hcClickable" onClick={() => goOut("http://www.soundtoll.nl/images/files/List%20of%20products2.pdf")}>Volunteers</div> (Dutch)</p>
                                    <p><a href="#about/en/">Acknowledgement</a></p>
                                    <p><a href="#about/en/">Funding</a></p>
                                </div>
                            </div>

                        </div>
                    </div>

        )
    }
}