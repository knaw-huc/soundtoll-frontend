import React from "react";
import {useState, useEffect} from "react";
import Header from "../page/header";
import Footer from "../page/footer";
import "../assets/css/soundtoll.css";
import {SONT_SERVICE} from "../config";
import CommoditiesList from "./commoditiesList";
import {IResult, ICommodityList} from "../misc/interfaces";

function Commodities() {

    let [letter, setLett] = useState('A');
    let [page, setPage] = useState(1);
    let [result, setResult] = useState<IResult>({number_of_records: 0, data: {}});
    let [loading, setLoading] = useState(true)
    const data = result.data as ICommodityList;
    const lastPage: number = data.number_of_pages;

    async function fetchUrl() {
        const response = await fetch(SONT_SERVICE + "commodities/" + letter);
        const json = await response.json();
        setResult(json);
        setLoading(false);
    }

    useEffect(() => {
        fetchUrl();
    }, [page, letter]);

    function move(pageNr: number): void {
        if (pageNr > 0 && pageNr <= lastPage) {
            setPage(pageNr);
            setLoading(true);
        }

    }

    function setLetter(selectedLetter: string): void {
        setPage(1);
        setLoading(true);
        setLett(selectedLetter);
    }


    return (
        <div>
            <Header/>
            <div className="hcContentContainer hcMarginBottom5">
                <div className="hcBasicSideMargin hcMarginTop1 hcMarginBottom5">
                    <h2>Commodities</h2>
                    <div className="hcLetterPicker">
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("A")}>
                            A
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("ae")}>
                            Æ
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("B")}>
                            B
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("C")}>
                            C
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("D")}>
                            D
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("E")}>
                            E
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("F")}>
                            F
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("G")}>
                            G
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("H")}>
                            H
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("I")}>
                            I
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("J")}>
                            J
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("K")}>
                            K
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("L")}>
                            L
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("M")}>
                            M
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("N")}>
                            N
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("O")}>
                            O
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("oe")}>
                            Ø
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("P")}>
                            P
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("Q")}>
                            Q
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("R")}>
                            R
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("S")}>
                            S
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("T")}>
                            T
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("U")}>
                            U
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("V")}>
                            V
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("W")}>
                            W
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("X")}>
                            X
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("Y")}>
                            Y
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("Z")}>
                            Z
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("1")}>
                            1
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("2")}>
                            2
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("3")}>
                            3
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("4")}>
                            4
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("5")}>
                            5
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("6")}>
                            6
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("7")}>
                            7
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("8")}>
                            8
                        </div>
                        <div className="hcClickable hcRightMargin" onClick={() => setLetter("9")}>
                            9
                        </div>
                    </div>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <div>
                            <CommoditiesList commList={result as IResult}/>
                            {/*<div className="hcPageBrowser">
                                <div className="hcClickable hcRightMargin" onClick={() => move(1)}>Start</div>
                                <div className="hcClickable hcRightMargin" onClick={() => move(page - 1)}>Prev</div>
                                <div className="hcClickable hcRightMargin" onClick={() => move(page + 1)}>Next</div>
                                <div className="hcClickable hcRightMargin" onClick={() => move(lastPage)}>End</div>
                            </div>*/}
                        </div>

                    )}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Commodities;