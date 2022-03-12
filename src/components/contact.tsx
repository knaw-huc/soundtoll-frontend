import React from "react";
import Header from "../page/header";
import Footer from "../page/footer";

export default function About() {
    return (
        <div>
            <Header/>
            <div className="hcContentContainer hcMarginBottom5">
                <div className="hcBasicSideMargin hcMarginTop1 hcMarginBottom5">
                    <h2>Contact</h2>
                    <p>&nbsp;</p>
                    <p>For contact, please mail to <div onClick={() => {window.location.href='mailto:info@huygens,knaw.nl'}} className="hcClickable">info@huygens.knaw.nl</div></p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}