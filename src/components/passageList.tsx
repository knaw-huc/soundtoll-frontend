import React from "react";
import {IResultPassageList} from "../misc/interfaces";

function PassageList(props: { result: IResultPassageList }) {

    return (
        <div className="hcList hcMarginBottom2">
            {props.result.passages.map((item) => {
                return (
                    <div className="hcListBasicResult">
                        <div className="hcClickable" onClick={() => {
                            window.open( "#detail/" + item.id_doorvaart);
                        }}>{item.schipper_naam}</div>
                        <div>{item.schipper_patroniem}</div>
                        <div>{item.dag}/{item.maand}/{item.jaar}</div>
                        <div>{item.schipper_plaatsnaam}</div>
                        <div>{item.van_eerste}</div>
                        <div>{item.naar_eerste}</div>
                        {item.type === "P" ? (
                            <div className="hcFixedLastColPassage" title="Passage">{item.type}</div>
                        ) : (<div className="hcFixedLastColRegistration" title="Registration">{item.type}</div>)}
                    </div>
                )
            })}
        </div>)
}

export default PassageList;