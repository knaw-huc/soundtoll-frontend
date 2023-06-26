import React from "react";
import {IResult, IPlaceList, ISearchObject, ISearchValues, IPickPlace} from "../misc/interfaces";
import {Base64} from "js-base64";
import PlaceItem from "./placeItem";

function HistoricalPlacesNamesList(props: {namesList: IResult, port: string}) {
    const data = props.namesList.data as IPlaceList;
    let right = data.itemList;
    let left = right.splice(0, Math.ceil(right.length / 2));
    let searchData:ISearchObject = {
        facetstate: {
            search: true,
            shipmaster: false,
            departure: false,
            arrival: false,
            standard: false,
            misc: false
        },
        searchvalues: "none",
        page: 1,
        sortorder: "schipper_achternaam.raw;asc"
    }

    const pickPlace: IPickPlace = (name: string) =>  {
    let portname = "";
    if (props.port === "van.plaats") {
        portname = "Port of departure";
    } else {
        if (props.port === "naar.plaats") {
            portname = "Port of destination";
        } else {
            portname = "Home port";
        }
    }
        searchData.searchvalues = [{name: portname, field: props.port, values: [name]} as ISearchValues];
        const codedData: string = Base64.toBase64(JSON.stringify(searchData));
        window.open("/#search/" + codedData);
    }

    return (
        <div>
            <div className="hc2columns">
                <div>
                    {left.map(item => {
                        return <PlaceItem item={item} go={pickPlace}/>
                    })}</div>
                <div>
                    {right.map(item => {
                        return <PlaceItem item={item} go={pickPlace}/>
                    })}
                </div>
            </div>


        </div>
    )
}

export default HistoricalPlacesNamesList;