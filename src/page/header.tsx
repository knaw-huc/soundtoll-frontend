import React from "react";
import logo from "../assets/images/logo_sont.png";
// import {interpret} from "xstate";
// import {SontMachine} from "../machine/model";
// import {StateMachineComponent} from "../renderMachine";



export default class Header extends React.Component {


    goBrowsing() {
        window.location.href = "#browse";
    }

    goSearching() {
        // const interpreter = interpret(SontMachine);
        // interpreter.send("search", {search_string: "none"});
        window.location.href = "#search/";
    }

    goHome() {
        window.location.href = "#home";
    }

    // goGeo() {
    //     window.location.href = "http://localhost:3000/#maps";
    // }

    goAbout() {
        window.location.href = "#about";
    }

    render() {
        return (
            <div className="hcContentContainer bgColorBrand1 hcMarginBottom5">
                <header className="hcPageHeaderSimple hcBasicSideMargin">
                    <div className="hcBrand">
                        <div className="hcBrandLogo">
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