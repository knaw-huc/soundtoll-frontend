import React from "react";
import Header from "../page/header";
import Footer from "../page/footer";
import HomeEN from "../page/content/homeEN";
import HomeNL from "../page/content/homeNL";
import EN from "../assets/images/en.gif";
import NE from "../assets/images/nl.gif";
import {useState} from "react";

export default function Home() {

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
                    {language === 'EN' ? (<HomeEN/>) : (<HomeNL/>)}

                </div>
            </div>

            <Footer/>
        </div>
    )
}