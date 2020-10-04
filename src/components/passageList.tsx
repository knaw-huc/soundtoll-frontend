import React from "react";
import {IResultPassageList} from "../misc/interfaces";

function PassageList(props: { result: IResultPassageList}) {

    return (
        <div className="hcList hcMarginBottom2">
            {props.result.passages.map((item) => {
                let type: string = "";
                if (item.jaar > 1634) {
                    type = "P";
                } else {
                    type = "R";
                }
                return (
                    <div className="hcListBasicResult">
                        <div className="hcClickable" onClick={() => {
                            window.scroll(0,0); window.location.href = "#detail/" + item.id_doorvaart
                        }}>{item.schipper_naam}</div>
                        <div>{item.dag}/{item.maand}/{item.jaar}</div>
                        <div>{item.schipper_plaatsnaam}</div>
                        <div>{item.van_eerste}</div>
                        <div>{item.naar_eerste}</div>
                        <div className="hcFixedLastCol">{type}</div>
                    </div>
                )
            })}
        </div>)
}

export default PassageList;