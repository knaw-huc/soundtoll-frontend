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

export default class Footer extends React.Component {
    render()  {
        return (
            <BrowserRouter>
            <div className="hcContentContainer bgColorBrand1">
                <div className="hcMarginTop5 hcMarginBottom5">
                    <div className="hcBasicSideMargin">
                        <div className="hcPartnerLogos">
                            <div className="hcPartnerLogoRow">
                                <div className="hcPartnerLogo">
                                    <Link to={{pathname: ""}}>
                                        <img src={tresoar} alt="Logo" />
                                    </Link>
                                </div>
                                <div className="hcPartnerLogo">
                                    <Link to={{pathname: ""}}>
                                        <img src={rug} alt="Logo" />
                                    </Link>
                                </div>
                                <div className="hcPartnerLogo">
                                    <Link to={{pathname: ""}}>
                                        <img src={fa} alt="Logo" />
                                    </Link>
                                </div>
                                <div className="hcPartnerLogo">
                                    <Link to={{pathname: ""}}>
                                        <img src={nwo} alt="Logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="hcPartnerLogoRow">
                                <div className="hcPartnerLogo">
                                    <Link to={{pathname: ""}}>
                                        <img src={ark} alt="Logo" />
                                    </Link>
                                </div>
                                <div className="hcPartnerLogo">
                                    <Link to={{pathname: ""}}>
                                        <img src={fonds} alt="Logo" />
                                    </Link>
                                </div>
                                <div className="hcPartnerLogo">
                                    <Link to={{pathname: ""}}>
                                        <img src={hoek} alt="Logo" />
                                    </Link>
                                </div>
                                <div className="hcPartnerLogo">
                                    <Link to={{pathname: ""}}>
                                        <img src={muller} alt="Logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="hcPartnerLogoRow">
                                <div className="hcPartnerLogo">
                                    <Link to={{pathname: ""}}>
                                        <img src={breed} alt="Logo" />
                                    </Link>
                                </div>
                                <div className="hcPartnerLogo">
                                    <Link to={{pathname: ""}}>
                                        <img src={oks} alt="Logo" />
                                    </Link>
                                </div>
                                <div className="hcPartnerLogo">
                                    <Link to={{pathname: ""}}>
                                        <img src={smf} alt="Logo" />
                                    </Link>
                                </div>
                                <div className="hcPartnerLogo">
                                    <Link to={{pathname: ""}}>
                                        <img src={huygens} alt="Logo" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </BrowserRouter>
        )
}
}