import React from "react";
import Header from "../page/header";
import Footer from "../page/footer";
import {useFetch} from "../misc/fetcher";
import CurrencyDetails from "./currencyDetails";
import {IResult} from "../misc/interfaces";
import {SONT_SERVICE} from "../config";



function Currency() {
    const [result, loading] = useFetch(
        SONT_SERVICE + "currency/"
    );
    return (
        <div>
            <Header/>
            <div className="hcContentContainer hcMarginBottom5">
                <div className="hcBasicSideMargin hcMarginTop1 hcMarginBottom5">
                    <h1>
                        Currencies
                    </h1>
                    <div>
                                    { loading ? (
                                        <div>Loading...</div>
                                    ) : (
                                        <div>
                                            <CurrencyDetails currencyData={result as IResult}/>
                                        </div>
                                    ) }
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Currency;

