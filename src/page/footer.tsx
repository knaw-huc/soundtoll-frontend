import React from "react";
import {Link, BrowserRouter} from "react-router-dom";
import tresoar from "../assets/images/tresoar.jpg";
import rug from "../assets/images/logo_rug.jpg";
import fa from "../assets/images/fa.jpg";
import nwo from "../assets/images/logo_nwo.jpg";
import ark from "../assets/images/statens_arkiver.jpg";
import fonds from "../assets/images/fonds21.png";
import hoek from "../assets/images/degrotezuidwesthoek.png";
import muller from "../assets/images/hendrikmullerfonds.jpg";
import breed from "../assets/images/Logo Breed Documentconversie Mooi Werk (2).jpg";
import oks from "../assets/images/oks.png";
import smf from "../assets/images/smf_logo_compact.jpg";
import huygens from "../assets/images/logo-blue-huygens.svg";
import {goOut} from "../misc/functions";

export default class Footer extends React.Component {
    render()  {
        return (

            <div className="hcContentContainer bgColorBrand1">
                <div className="hcMarginTop5 hcMarginBottom5">
                    <div className="hcBasicSideMargin">
                        <div className="hcPartnerLogos">
                            <div className="hcPartnerLogoRow">
                                <div className="hcPartnerLogo" onClick={() => goOut("https://www.tresoar.nl/Pages/Default.aspx")}>
                                        <img src={tresoar} alt="Logo" />
                                </div>
                                <div className="hcPartnerLogo">
                                        <img src={rug} alt="Logo" />
                                </div>
                                <div className="hcPartnerLogo">
                                        <img src={fa} alt="Logo" />
                                </div>
                                <div className="hcPartnerLogo">
                                        <img src={nwo} alt="Logo" />
                                </div>
                            </div>
                            <div className="hcPartnerLogoRow">
                                <div className="hcPartnerLogo">
                                        <img src={ark} alt="Logo" />
                                </div>
                                <div className="hcPartnerLogo">
                                        <img src={fonds} alt="Logo" />
                                </div>
                                <div className="hcPartnerLogo">
                                        <img src={hoek} alt="Logo" />
                                </div>
                                <div className="hcPartnerLogo">
                                        <img src={muller} alt="Logo" />
                                </div>
                            </div>
                            <div className="hcPartnerLogoRow">
                                <div className="hcPartnerLogo">
                                        <img src={breed} alt="Logo" />
                                </div>
                                <div className="hcPartnerLogo">
                                        <img src={oks} alt="Logo" />
                                </div>
                                <div className="hcPartnerLogo">
                                        <img src={smf} alt="Logo" />
                                </div>
                                <div className="hcPartnerLogo">
                                        <img src={huygens} alt="Logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}
}