import React from "react";
import Header from "../page/header";
import Footer from "../page/footer";
import AboutEN from "../page/content/aboutEN";
import AboutNL from "../page/content/aboutNL";
import EN from "../assets/images/en.gif";
import NE from "../assets/images/nl.gif";
import {useState} from "react";

export default function About() {

    const [language, setLanguage] = useState('EN');

    return (
        <div>
            <Header/>
            <div className="langMenu">
                <div className="langImg hcClickable" onClick={() => {setLanguage('EN')}}><img src={EN}/></div>
                <div className="langImg hcClickable" onClick={() => {setLanguage('NE')}}><img src={NE}/></div>
            </div>
            <div className="hcContentContainer hcMarginBottom5">
                <div className="hcBasicSideMargin hcMarginTop1 hcMarginBottom5">
                    {language === 'EN' ? (<AboutEN/>) : (<AboutNL/>)}

                </div>
            </div>

            <Footer/>
        </div>
    )
}