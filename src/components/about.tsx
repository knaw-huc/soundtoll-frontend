import React from "react";
import Header from "../page/header";
import Footer from "../page/footer";
import AboutEN from "../page/content/aboutEN";
import AboutNL from "../page/content/aboutNL";
import EN from "../assets/images/en.gif";
import NE from "../assets/images/nl.gif";
import {useState} from "react";
import {ISetAboutPage} from "../misc/interfaces";

export default function About(props: {language: string}) {

    const [language, setLanguage] = useState(props.language);
    const [page, setPage] = useState('home');

    function pager() {
        switch (page) {
            case 'home':
                return (<div>{language === 'en' ? (<AboutEN/>) : (<AboutNL/>)}</div>);
            default:
                return (<div/>);
        }
    }

    const setAboutPage: ISetAboutPage = (aboutPage: string) => {
        setPage(page);
    }

    return (
        <div>
            <Header/>
            <div className="langMenu">
                <div className="langImg hcClickable" onClick={() => {setLanguage('en')}}><img src={EN}/></div>
                <div className="langImg hcClickable" onClick={() => {setLanguage('ne')}}><img src={NE}/></div>
            </div>
            <div className="hcContentContainer hcMarginBottom5">
                <div className="hcBasicSideMargin hcMarginTop1 hcMarginBottom5">
                    {pager()}
                </div>
            </div>

            <Footer/>
        </div>
    )
}