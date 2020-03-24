import React from "react";
import {IResultPassageList} from "../misc/interfaces";

function PassageList(props: { result: IResultPassageList}) {

    return (
        <div className="hcList hcMarginBottom2">
            {props.result.passages.map((item) => {
                return (
                    <div className="hcListBasicResult">
                        <div className="hcClickable" onClick={() => {
                            window.scroll(0,0); window.location.href = "#detail/" + item.id_doorvaart
                        }}>{item.schipper_naam}</div>
                        <div>{item.jaar}</div>
                        <div>{item.schipper_plaatsnaam}</div>
                    </div>
                )
            })}
        </div>)
}

export default PassageList;