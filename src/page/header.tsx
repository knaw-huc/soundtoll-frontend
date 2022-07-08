import React from "react";
import logo from "../assets/images/logo_sont.png";
// import {interpret} from "xstate";
// import {SontMachine} from "../machine/model";
// import {StateMachineComponent} from "../renderMachine";
import EN from "../assets/images/en.gif";
import NE from "../assets/images/nl.gif";



export default function Header() {


    function goBrowsing() {
        window.location.href = "#browse";
    }

    function goSearching() {
        window.location.href = "#search/";
    }

    function goHome() {
        window.location.href = "#home";
    }

    function goAbout() {
        window.location.href = "#about";
    }

    function goMap() {
        window.location.href = "#maps";
    }

    function goMail() {
        window.location.href ="#contact";
    }

    function goPrivacy() {
        window.open("https://www.knaw.nl/privacy");
    }

    function goDownload() {
        window.location.href = "#download";
    }

        return (
            <div className="hcContentContainer bgColorBrand1 hcMarginBottom5">
                <header className="hcPageHeaderSimple hcBasicSideMargin">
                    <div className="hcBrand">
                        <div className="hcBrandLogo" onClick={goHome}>>
                            <img src={logo} className="logo" alt="Logo Soundtolls"/>
                        </div>
                        <div className="hcSiteTitle">
                            Soundtoll Registers Online
                        </div>
                    </div>
                    <nav>
                        <div onClick={goHome}>Home</div>
                        <div onClick={goSearching}>Search</div>
                        <div onClick={goMap}>Map</div>
                        <div onClick={goBrowsing}>Browse</div>
                        <div onClick={goDownload}>Download</div>
                        <div onClick={goAbout}>About</div>
                        <div onClick={goPrivacy}>Privacy</div>
                        <div onClick={goMail}>Contact</div>
                    </nav>
                </header>
            </div>
        )

}
