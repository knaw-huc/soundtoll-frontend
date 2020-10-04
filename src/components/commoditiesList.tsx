import React from "react";
import {IResult, ISearchObject, ISearchValues, ICommodityList} from "../misc/interfaces";
import {Base64} from "js-base64";

function CommoditiesList(props: {commList: IResult}) {
    const data = props.commList.data as ICommodityList;
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


    function pickCommodity(name: string): void {
        searchData.searchvalues = [{name: "Commodity", field: "lading.soort", values: [name]} as ISearchValues];
        const codedData: string = Base64.toBase64(JSON.stringify(searchData));
        window.location.href = "/#search/" + codedData;

    }

    return (
        <div>
            <div className="hc2columns">
                <div>
                    {left.map(item => {
                        return <div className="hcClickable" onClick={() => pickCommodity(item.name)}>
                            {item.name}<br/>
                        </div>
                    })}</div>
                <div>
                    {right.map(item => {
                        return <div className="hcClickable" onClick={() => pickCommodity(item.name)}>
                            {item.name}<br/>
                        </div>
                    })}
                </div>
            </div>


        </div>
    )
}

export default CommoditiesList;