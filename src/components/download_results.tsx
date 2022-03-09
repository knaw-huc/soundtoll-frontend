import React from "react";
import Header from "../page/header";
import Footer from "../page/footer";

function DownloadResults(props: {search_string: string}) {

    return (
        <div>
            <Header/>
            <div className="hcContentContainer hcMarginBottom5">
                <div className="hcBasicSideMargin hcMarginTop1 hcMarginBottom5">
                    <h1>Download database data</h1>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default DownloadResults;