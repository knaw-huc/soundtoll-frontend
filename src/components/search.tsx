import React from "react";
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
    IResetFacets,
    ISearchObject,
    ISearchValues,
    ISendCandidate,
    ISendPage,
    ISortOrder
} from "../misc/interfaces";
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

    const setPage: ISendPage = (page: number) => {
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
            searchBuffer.searchvalues = searchBuffer.searchvalues.filter(function (el) {return el.values.length > 0});
            if (searchBuffer.searchvalues.length === 0) {
                searchBuffer.searchvalues = "none";
            }
        }
        setSearchStruc(searchBuffer);
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

                        <PassageList searchData={searchStruc} parentPageCallback={setPage}
                                     parentSortCallback={setSortOrder} parentRemoveFacet={removeFacet} parentResetFacets={resetFacets} refresh={refresh}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}