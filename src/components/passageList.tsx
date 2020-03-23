import React from "react";
import {useState, useEffect} from "react";
import {ELASTIC_URL} from "../config";
import {
    IRemoveFacet,
    IResetFacets,
    IResultPassageList,
    ISearchObject,
    ISearchValues,
    ISendPage,
    ISortOrder
} from "../misc/interfaces";
import {Base64} from "js-base64";

function PassageList(props: {
    searchData: ISearchObject,
    parentPageCallback: ISendPage,
    parentSortCallback: ISortOrder,
    parentResetFacets: IResetFacets,
    parentRemoveFacet: IRemoveFacet,
    refresh: boolean;
}) {
    let [data, setData] = useState<IResultPassageList>({amount: 0, passages: []});
    const [page, setPage] = useState(props.searchData.page);
    const [url, setURL] = useState(ELASTIC_URL + Base64.toBase64(JSON.stringify(props.searchData)));
    const [refresh, setRefresh] = useState(props.refresh);

    let facets: ISearchValues[] = [];
    if (typeof props.searchData.searchvalues === "object") {
        facets = props.searchData.searchvalues as ISearchValues[];
    }
    let numberOfResults: string = "0";
    let pluralResults: string = "";
    if (data.amount === 1) {
        pluralResults = " result";
    } else {
        pluralResults = " results";
    }

    if (data.amount >= 10000) {
        numberOfResults = data.amount.toLocaleString('nl-NL') + "+" + pluralResults;
    } else {
        numberOfResults = data.amount.toLocaleString('nl-NL') + pluralResults;
    }

    const cross: string = "[x]";

    async function fetchData() {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
    }


    function setSortOrder(value: string) {
        // buffer = searchData;
        // buffer.page = 1;
        // buffer.sortorder = value;
        // setSearchData(buffer);
        // setURL(ELASTIC_URL + Base64.toBase64(JSON.stringify(searchData)));
        props.parentSortCallback(value);
    }


    function nextPage() {
        props.parentPageCallback(page + 1);
    }

    function prevPage() {
        if (page > 0) {
            // buffer.page = buffer.page - 1;
            // setSearchData(buffer);
            // setURL(ELASTIC_URL + Base64.toBase64(JSON.stringify(searchData)));
            // window.scrollTo(0, 0)
            props.parentPageCallback(page -1);
        }

    }

    fetchData();

    // useEffect(() => {
    //     fetchData();
    // });


    return (
        <div className="hcLayoutResults">
            <div className="hcResultsHeader hcMarginBottom1">
                <div>{numberOfResults}</div>
                <div><select value={props.searchData.sortorder} onChange={(e) => {
                    setSortOrder(e.target.value)
                }}>
                    <option value="schipper_achternaam">Order by family name</option>
                    <option value="jaar">Order by year</option>
                    <option value="schipper_plaatsnaam">Order by home port</option>
                </select></div>
            </div>

            <div className="hcMarginBottom2">
                <div className="hcSmallTxt hcTxtColorGreyMid">Selected facets: <span
                    className="hcFacetReset hcClickable" onClick={() => props.parentResetFacets}>Reset facets</span>
                </div>
                {props.searchData.searchvalues === "none" ? (
                    <span className="hcSelectedFacet"><span
                        className="hcSelectedFacetType">None</span></span>
                ) : (
                    facets.map((item: ISearchValues) => {
                        return (
                            <span className="hcSelectedFacet"><span
                                className="hcSelectedFacetType">{item.name}: </span>
                                {item.values.map(function (skipper, i) {
                                    return (<div className="hcFacetValues" key={i}
                                                 onClick={() => props.parentRemoveFacet(item.name, skipper)}>{skipper} {cross} </div>)
                                })}
                                    </span>
                        )
                    })
                )}
            </div>
            {data.amount > 0 ? (<div>
                    <div className="hcList">
                        <div className="hcListHeader">
                            <div className="hcLabel">Full name</div>
                            <div className="hcLabel">Date</div>
                            <div className="hcLabel">Home port</div>
                        </div>
                    </div>
                    <div className="hcList hcMarginBottom2">
                        {data.passages.map((item) => {
                            return (
                                <div className="hcListBasicResult">
                                    <div className="hcClickable" onClick={() => {
                                        window.location.href = "#detail/" + item.id_doorvaart
                                    }}>{item.schipper_naam}</div>
                                    <div>{item.jaar}</div>
                                    <div>{item.schipper_plaatsnaam}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            ) : (<div>
                No results for this query...
            </div>)}
            {data.amount > 20 ? (
                <div className="hcPagination">
                    <div className="hcClickable" onClick={prevPage}>&#8592; Previous</div>
                    <div className="hcClickable" onClick={nextPage}>Next &#8594;</div>
                </div>
            ) : (<div/>)}
        </div>
    );
}

export default PassageList;