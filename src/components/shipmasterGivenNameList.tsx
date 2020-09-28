import React from "react";
import {IResult, ISearchObject, ISearchValues, IShipMasterChrNameList} from "../misc/interfaces";
import {Base64} from "js-base64";

function ShipmasterGivenNameList(props: {skipperList: IResult}) {
    const data = props.skipperList.data as IShipMasterChrNameList;
    let right = data.itemList;
    let left = right.splice(0, Math.ceil(right.length / 2));
    let searchData:ISearchObject = {
        facetstate: {
            shipmaster: true,
            departure: false,
            arrival: false,
            standard: false,
            misc: false
        },
        searchvalues: "none",
        page: 1,
        sortorder: "schipper_achternaam.raw;asc"
    }


    function pickShipmaster(name: string): void {
        searchData.searchvalues = [{name: "Given name", field: "schipper_voornamen", values: [name]} as ISearchValues];
        const codedData: string = Base64.toBase64(JSON.stringify(searchData));
        window.location.href = "/#search/" + codedData;

    }

    return (
        <div>
            <div className="hc2columns">
                <div>
                    {left.map(item => {
                        return <div className="hcClickable" onClick={() => pickShipmaster(item.voornaam)}>
                            {item.voornaam}<br/>
                        </div>
                    })}</div>
                <div>
                    {right.map(item => {
                        return <div className="hcClickable" onClick={() => pickShipmaster(item.voornaam)}>
                            {item.voornaam}<br/>
                        </div>
                    })}
                </div>
            </div>


        </div>
    )
}

export default ShipmasterGivenNameList;