import React from "react";
import Header from "../page/header";
import Footer from "../page/footer";
import AboutEN from "../page/content/aboutEN";
import AboutNL from "../page/content/aboutNL";
import EN from "../assets/images/en.gif";
import NE from "../assets/images/nl.gif";
import {useState} from "react";
import {ISetAboutPage, ISetLangEvent} from "../misc/interfaces";

export default function About(props: { language: string, setLanguage: ISetLangEvent }) {

    const [language, setLanguage] = useState(props.language);
    const [page, setPage] = useState('about');


    return (
        <div>
            <Header/>
            <div className="langMenu">
                <div className="langImg hcClickable" onClick={() => {
                    setLanguage('en');
                    props.setLanguage({"type": "SET_LANGUAGE", "value": "en"});
                }}><img src={EN}/></div>
                <div className="langImg hcClickable" onClick={() => {
                    setLanguage('ne');
                    props.setLanguage({"type": "SET_LANGUAGE", "value": "ne"});
                }}><img src={NE}/></div>
            </div>
            <div className="hcContentContainer hcMarginBottom5">
                <div className="hcBasicSideMargin hcMarginTop1 hcMarginBottom5">
                    {language === 'en' ? (<AboutEN/>) : (<AboutNL/>)}
                </div>
            </div>

            <Footer/>
        </div>
    )
}