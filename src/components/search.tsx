import React, {useEffect} from "react";
import Header from "../page/header";
import Footer from "../page/footer";
import ShipmasterFacet from "../elements/facets/shipmasterFacet";
import HomePortFacet from "../elements/facets/homePortFacet";
import SmallRegionFacet from "../elements/facets/smallRegionFacet";
import {useState} from "react";
import BigRegionFacet from "../elements/facets/bigRegionFacet";
import DeparturePortFacet from "../elements/facets/departurePortFacet";
import DestinationPortFacet from "../elements/facets/destinationPortFacet";
import DepartureStandardFacet from "../elements/facets/departureStandardFacet";
import DestinationStandardFacet from "../elements/facets/destinationStandardFacet";
import CommodityFacet from "../elements/facets/commodityFacet";
import PassageList from "./passageList";
import {
    IFacetCandidate, IRemoveFacet,
    IResetFacets, IResultPassageList,
    ISearchObject,
    ISearchValues,
    ISendCandidate,
    ISendPage,
    ISortOrder
} from "../misc/interfaces";
import {ELASTIC_URL} from "../config";
import {Base64} from "js-base64";

export default function Search(props: { search_string: string }) {

    let searchData: ISearchObject = {
        facetstate: {
            shipmaster: true,
            departure: false,
            arrival: false,
            standard: false,
            misc: false
        },
        searchvalues: "none",
        page: 1,
        sortorder: "schipper_achternaam"
    }

    if (props.search_string !== "") {
        try {
            searchData = JSON.parse(Base64.fromBase64(props.search_string)) as ISearchObject;
        } catch (Error) {
            window.scroll(0, 0);
            window.location.href = "/";
        }

    }

    const [shipMasterFacets, setShipMasterfacets] = useState(searchData.facetstate.shipmaster);
    const [departureFacets, setDepartureFacets] = useState(searchData.facetstate.departure);
    const [destinationFacets, setDestinationFacets] = useState(searchData.facetstate.arrival);
    const [standardFacets, setStandardFacets] = useState(searchData.facetstate.standard);
    const [commodityFacets, setCommodityFacets] = useState(searchData.facetstate.misc);
    const [refresh, setRefresh] = useState(true);
    let searchBuffer = searchData;
    const [searchStruc, setSearchStruc] = useState<ISearchObject>(searchData);
    const [data, setData] = useState<IResultPassageList>({amount: 0, passages: []});
    const [page, setPage] = useState(1);

    const sendCandidate: ISendCandidate = (candidate: IFacetCandidate) => {
        searchBuffer = searchStruc;
        if (searchStruc.searchvalues === "none") {
            searchBuffer.searchvalues = [{
                name: candidate.facet,
                field: candidate.field,
                values: [candidate.candidate]
            } as ISearchValues];
            setSearchStruc(searchBuffer);
            setRefresh(!refresh);
        } else {
            if (typeof searchBuffer.searchvalues === "object") {
                let found: boolean = false;
                searchBuffer.searchvalues.forEach((item) => {
                    if (item.name === candidate.facet) {
                        found = true;
                        if (!item.values.includes(candidate.candidate)) {
                            item.values.push(candidate.candidate);
                        }
                    }
                });
                if (!found) {
                    searchBuffer.searchvalues.push({
                        name: candidate.facet,
                        field: candidate.field,
                        values: [candidate.candidate]
                    });
                }
            }
            setSearchStruc(searchBuffer);
            setRefresh(!refresh);
        }
    }

    let facets: ISearchValues[] = [];
    if (typeof searchStruc.searchvalues === "object") {
        facets = searchStruc.searchvalues as ISearchValues[];
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
        const url = ELASTIC_URL + Base64.toBase64(JSON.stringify(searchStruc));
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
    }



    function nextPage() {
        setPage(page + 1)
        goToPage(page);
    }

    function prevPage() {
        if (page > 0) {
            setPage(page - 1);
            goToPage(page);
        }

    }


    const goToPage: ISendPage = (page: number) => {
        searchBuffer = searchStruc;
        searchBuffer.page = page;
        setSearchStruc(searchBuffer);
        setRefresh(!refresh);
    }

    const setSortOrder: ISortOrder = (field: string) => {
        searchBuffer = searchStruc;
        searchBuffer.sortorder = field;
        setSearchStruc(searchBuffer);
    }

    const resetFacets: IResetFacets = () => {
        searchBuffer = searchStruc;
        searchBuffer.page = 1;
        searchBuffer.searchvalues = "none";
        setSearchStruc(searchBuffer);
        setRefresh(!refresh);
    }

    const removeFacet: IRemoveFacet = (field: string, value: string) => {
        let bufferArray = [];
        searchBuffer = searchStruc;
        if (typeof searchBuffer.searchvalues === "object") {
            searchBuffer.searchvalues.forEach((item: ISearchValues) => {
                if (item.name === field) {
                    item.values = item.values.filter((element => element !== value));
                }
            })
            searchBuffer.searchvalues = searchBuffer.searchvalues.filter(function (el) {
                return el.values.length > 0
            });
            if (searchBuffer.searchvalues.length === 0) {
                searchBuffer.searchvalues = "none";
            }
        }
        setSearchStruc(searchBuffer);
        setRefresh(!refresh);
    }

    function toggleShipMasterFacets() {
        if (shipMasterFacets) {
            setShipMasterfacets(false);
        } else {
            setShipMasterfacets(true);
        }
    }

    function toggleDestinationFacets() {
        if (destinationFacets) {
            setDestinationFacets(false);
        } else {
            setDestinationFacets(true);
        }
    }

    function toggleDepartureFacets() {
        if (departureFacets) {
            setDepartureFacets(false);
        } else {
            setDepartureFacets(true);
        }
    }

    function toggleStandardFacets() {
        if (standardFacets) {
            setStandardFacets(false);
        } else {
            setStandardFacets(true);
        }
    }

    function toggleCommodityFacets() {
        if (commodityFacets) {
            setCommodityFacets(false);
        } else {
            setCommodityFacets(true);
        }
    }

    useEffect(() => {
        fetchData();
    }, [searchStruc])

    return (
        <div>
            <Header/>
            <div className="hcContentContainer hcMarginBottom5">
                <div className="hcBasicSideMargin hcMarginTop1 hcMarginBottom5">
                    <h2>Search passages</h2>

                    <div className="hcLayoutFacet-Result hcBasicSideMargin hcMarginBottom15">
                        <div className="hcLayoutFacets">
                            <button type="button" name="button" id="showFacets" className="hcfixedSideButton"><img
                                src="https://d33wubrfki0l68.cloudfront.net/191a405740a4ade92836ba6eea6a6ceaa798bf2f/a4d8b/images/icons/icon-set-facets.svg"
                                className="icon" alt="Facet button"/></button>
                            <div className="hcFacetSubDivision" id="shipmasterFacetsTitle"
                                 onClick={toggleShipMasterFacets}>
                                {shipMasterFacets ? (<span className="hcFacetGroup">&#9660; SHIPMASTERS</span>) : (
                                    <span className="hcFacetGroup">&#9658; SHIPMASTERS</span>)}
                            </div>
                            {shipMasterFacets ? (
                                <div className="hcLayoutFacetsToggle" id="hcLayoutFacetsToggle">
                                    <ShipmasterFacet parentCallback={sendCandidate}/>
                                    <HomePortFacet parentCallback={sendCandidate}/>
                                    <SmallRegionFacet parentCallback={sendCandidate} port="Home port"/>
                                    <BigRegionFacet parentCallback={sendCandidate} port="Home port"/>
                                </div>) : (<div/>)}

                            <div className="hcFacetSubDivision" id="shipmasterFacetsTitle"
                                 onClick={toggleDepartureFacets}>
                                {departureFacets ? (<span className="hcFacetGroup">&#9660; DEPARTURES</span>) : (
                                    <span className="hcFacetGroup">&#9658; DEPARTURES</span>)}
                            </div>
                            {departureFacets ? (
                                <div className="hcLayoutFacetsToggle" id="hcLayoutFacetsToggle">
                                    <DeparturePortFacet parentCallback={sendCandidate}/>
                                    <SmallRegionFacet parentCallback={sendCandidate} port="Departure"/>
                                    <BigRegionFacet parentCallback={sendCandidate} port="Departure"/>
                                </div>) : (<div/>)}

                            <div className="hcFacetSubDivision" id="shipmasterFacetsTitle"
                                 onClick={toggleDestinationFacets}>
                                {destinationFacets ? (<span className="hcFacetGroup">&#9660; DESTINATIONS</span>) : (
                                    <span className="hcFacetGroup">&#9658; DESTINATIONS</span>)}
                            </div>
                            {destinationFacets ? (
                                <div className="hcLayoutFacetsToggle" id="hcLayoutFacetsToggle">
                                    <DestinationPortFacet parentCallback={sendCandidate}/>
                                    <SmallRegionFacet parentCallback={sendCandidate} port="Destination"/>
                                    <BigRegionFacet parentCallback={sendCandidate} port="Destination"/>
                                </div>) : (<div/>)}

                            <div className="hcFacetSubDivision" id="shipmasterFacetsTitle"
                                 onClick={toggleStandardFacets}>
                                {standardFacets ? (<span className="hcFacetGroup">&#9660; STANDARD NAMES</span>) : (
                                    <span className="hcFacetGroup">&#9658; STANDARD NAMES</span>)}
                            </div>
                            {standardFacets ? (
                                <div className="hcLayoutFacetsToggle" id="hcLayoutFacetsToggle">
                                    <DepartureStandardFacet parentCallback={sendCandidate}/>
                                    <DestinationStandardFacet parentCallback={sendCandidate}/>
                                </div>) : (<div/>)}

                            <div className="hcFacetSubDivision" id="shipmasterFacetsTitle"
                                 onClick={toggleCommodityFacets}>
                                {commodityFacets ? (<span className="hcFacetGroup">&#9660; COMMODITIES</span>) : (
                                    <span className="hcFacetGroup">&#9658; COMMODITIES</span>)}
                            </div>
                            {commodityFacets ? (
                                <div className="hcLayoutFacetsToggle" id="hcLayoutFacetsToggle">
                                    <CommodityFacet parentCallback={sendCandidate}/>
                                </div>) : (<div/>)}
                        </div>

                        <div className="hcLayoutResults">
                            <div className="hcResultsHeader hcMarginBottom1">
                                <div>{numberOfResults}</div>
                                <div><select value={searchStruc.sortorder} onChange={(e) => {
                                    setSortOrder(e.target.value)
                                }}>
                                    <option value="schipper_achternaam">Order by family name</option>
                                    <option value="jaar">Order by year</option>
                                    <option value="schipper_plaatsnaam">Order by home port</option>
                                </select></div>
                            </div>
                            <div className="hcMarginBottom2">
                                <div className="hcSmallTxt hcTxtColorGreyMid">Selected facets: <span
                                    className="hcFacetReset hcClickable" onClick={resetFacets}>Reset facets</span>
                                </div>
                                {searchStruc.searchvalues === "none" ? (
                                    <span className="hcSelectedFacet"><span
                                        className="hcSelectedFacetType">None</span></span>
                                ) : (
                                    facets.map((item: ISearchValues) => {
                                        return (
                                            <span className="hcSelectedFacet"><span
                                                className="hcSelectedFacetType">{item.name}: </span>
                                                {item.values.map(function (skipper, i) {
                                                    return (<div className="hcFacetValues" key={i}
                                                                 onClick={() => removeFacet(item.name, skipper)}>{skipper} {cross} </div>)
                                                })}
                                    </span>
                                        )
                                    })
                                )}
                            </div>
                            <PassageList result={data}/>
                            {data.amount > 20 ? (
                                <div className="hcPagination">
                                    <div className="hcClickable" onClick={prevPage}>&#8592; Previous</div>
                                    <div className="hcClickable" onClick={nextPage}>Next &#8594;</div>
                                </div>
                            ) : (<div/>)}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}