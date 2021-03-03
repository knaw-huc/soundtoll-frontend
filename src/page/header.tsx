import React from "react";
import logo from "../assets/images/logo_sont.png";
// import {interpret} from "xstate";
// import {SontMachine} from "../machine/model";
// import {StateMachineComponent} from "../renderMachine";
import EN from "../assets/images/en.gif";
import NE from "../assets/images/nl.gif";



export default class Header extends React.Component {


    goBrowsing() {
        window.location.href = "#browse";
    }

    goSearching() {
        window.location.href = "#search/";
    }

    goHome() {
        window.location.href = "#home";
    }

    goAbout() {
        window.location.href = "#about";
    }

    render() {
        return (
            <div className="hcContentContainer bgColorBrand1 hcMarginBottom5">
                <header className="hcPageHeaderSimple hcBasicSideMargin">
                    <div className="hcBrand">
                        <div className="hcBrandLogo" onClick={this.goHome}>>
                            <img src={logo} className="logo" alt="Logo Soundtolls"/>
                        </div>
                        <div className="hcSiteTitle">
                            Soundtoll Registers Online
                        </div>
                    </div>
                    <nav>
                        <div onClick={this.goHome}>Home</div>
                        <div onClick={this.goSearching}>Search</div>
                        <div onClick={this.goBrowsing}>Browse</div>
                        <div onClick={this.goAbout}>About</div>
                    </nav>
                </header>
            </div>
        )
    }
}