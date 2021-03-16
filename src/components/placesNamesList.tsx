import React from "react";
import {IResult, IPlaceList, ISearchObject, ISearchValues} from "../misc/interfaces";
import {Base64} from "js-base64";

function PlacesNamesList(props: {namesList: IResult, port: string}) {
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



    function pickPlace(name: string): void {
        let portName: string = "Home port (standardized)"
        switch (props.port) {
            case "schipper_plaatsnaam":
                portName = "Home port (standardized)";
                break;
            case "van_standaard.plaats":
                portName = "Port of departure (standardized)";
                break;
            case "naar_standaard.plaats":
                portName = "Port of arrival (standardized)";
                break;
        }
        searchData.searchvalues = [{name: portName, field: props.port, values: [name]} as ISearchValues];
        const codedData: string = Base64.toBase64(JSON.stringify(searchData));
        window.location.href = "/#search/" + codedData;
        window.scroll(0,0);
    }
    return (
        <div>
            <div className="hc2columns">
                <div>
                    {left.map(item => {
                        return <div className="hcClickable" onClick={() => pickPlace(item.name)}>
                            {item.name}<br/>
                        </div>
                    })}</div>
                <div>
                    {right.map(item => {
                        return <div className="hcClickable" onClick={() => pickPlace(item.name)}>
                            {item.name}<br/>
                        </div>
                    })}
                </div>
            </div>


        </div>
    )
}

export default PlacesNamesList;