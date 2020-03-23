import React from "react";
import {IResult, ICurrencyList} from "../misc/interfaces";
import {BrowserRouter} from "react-router-dom";
import {goOut} from "../misc/functions";

function CurrencyDetails(props: {currencyData: IResult}) {
    const items: ICurrencyList = props.currencyData.data as ICurrencyList;


    return (
        <div>
            <BrowserRouter basename="">
            {items.itemList.map((item)  => {

                return <div className="hcTableRow">
                    <div className="hcTableCell">
                        {item.name}
                    </div>
                    <div className="hcTableCell">
                        {item.code}
                    </div>
                    <div className="hcTableCell">
                        <div className="hcClickable" onClick={() => goOut(item.url)}>{item.url}</div>
                    </div>
                </div>
            })}
        </BrowserRouter>
        </div>
    );
}

export default CurrencyDetails;