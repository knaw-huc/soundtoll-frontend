import React from "react";
import Header from "../page/header";
import Footer from "../page/footer";
import HomeEN from "../page/content/homeEN";
import HomeNL from "../page/content/homeNL";
import EN from "../assets/images/en.gif";
import NE from "../assets/images/nl.gif";
import {useState} from "react";
import {ISetLangEvent} from "../misc/interfaces";

export default function Home(props: {language: string,  setLanguage: ISetLangEvent}) {

    const [language, setLanguage] = useState(props.language);

    return (
        <div>
            <Header/>
            <div className="langMenu">
                <div className="langImg hcClickable" onClick={() => {

                    props.setLanguage({"type": "SET_LANGUAGE", "value": "en"});
                    setLanguage('en');
                }}><img src={EN}/></div>
                <div className="langImg hcClickable" onClick={() => {

                    props.setLanguage({"type": "SET_LANGUAGE", "value": "ne"})
                    setLanguage('ne');
                }}><img src={NE}/></div>
            </div>
            <div className="hcContentContainer hcMarginBottom5">
                <div className="hcBasicSideMargin hcMarginTop1 hcMarginBottom5">
                    {language === 'en' ? (<HomeEN/>) : (<HomeNL/>)}

                </div>
            </div>

            <Footer/>
        </div>
    )
}