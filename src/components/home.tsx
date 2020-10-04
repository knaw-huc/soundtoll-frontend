import React from "react";
import Header from "../page/header";
import Footer from "../page/footer";

export default class Home extends React.Component {

    render()  {
        return(
            <div>
                <Header/>
                <div className="hcContentContainer hcMarginBottom5">
                    <div className="hcBasicSideMargin hcMarginTop1 hcMarginBottom5">
                        <h2>Home</h2>
                        <div className="hcBlockText">
                            <h3>Versie 28-09-2020 </h3>
                            <p>Deze versie zal dinsdag 28 september beschikbaar komen op de testserver https://soundtoll.sd.di.huc.knaw.nl/</p>
                            <h3>Issues waaraan nog gewerkt wordt</h3>
                            <ul>
                                <li>Direct linken naar doorvaart- en registratiegegevens</li>
                                <li>Vanuit detailgegevens terugkeren naar resultaatlijst in juiste staat </li>
                                <li>Free text facet koppelen aan index</li>
                                <li>Slider voor filteren op periode</li>
                                <li>Testen, debuggen en details wijzigen</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        )
    }
}