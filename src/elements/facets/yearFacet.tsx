import React from "react";
import {useState} from "react";
import NumericInput from "react-numeric-input";
import {ISendCandidate} from "../../misc/interfaces";


function YearFacet(props: { parentCallback: ISendCandidate })
{

    const [help, setHelp] = useState(false);
    const [textField, setTextField] = useState<string>("");
    const [single, setSingle] = useState(true);
    const [err, setErr] = useState("");
    const min = 1497;
    const max = 1857
    let from = min;
    let to = max;

    function handleChange(e: React.FormEvent<HTMLInputElement>): void {
        setTextField(e.currentTarget.value);
    }

    function handleFrom(value: number | null, stringValue: string, input: HTMLInputElement) {
        if (!isNaN(Number(stringValue))) {
            from = Number(stringValue);
            setErr("");
        } else {
            setErr("No numeric value given!");
        }
    }

    function handleTo(value: number | null, stringValue: string, input: HTMLInputElement) {
        if (!isNaN(Number(stringValue))) {
            to = Number(stringValue);
            setErr("");
        } else {
            setErr("No numeric value given!");
        }
    }

    function setYearFacet() {
        if (err === "") {
            if (single) {
                props.parentCallback({facet: "Year", field: "jaar", candidate: String(from)});
            } else {
                props.parentCallback({facet: "Period", field: "PERIOD", candidate: String(from) + "-" + String(to)});
            }
        }
        setErr("");
    }


    return (
        <div className="hcFacet">
            <div className="hcFacetTitle">
                {single ? (<span>Year ({min} - {max})</span>) : (<span>Period ({min} - {max})</span>)}

                <span className="hcIconHelp" onClick={() => setHelp(!help)}><img
                    src="https://d33wubrfki0l68.cloudfront.net/85886ca3e2d8c36ba06d7773a094512272453181/545f8/images/icons/icon-huc-help.svg"
                    alt=""/></span>
            </div>
            {help &&
            <div className="hcFacetHelp">
                <strong>Year facet </strong><br/>
                Select single year of period
            </div>}
            <div>
                {single ? (
                    <div><NumericInput className="numSelector" min={from} max={to} value={from}
                                       size={3} onChange={handleFrom}/>
                        <div className="expand_collapse" onClick={() => setSingle(false)}>&#8677;</div>
                    </div>
                ) : (
                    <div><NumericInput className="numSelector" min={from} max={to} value={from}
                                       size={3} onChange={handleFrom}/>
                    <NumericInput className="numSelector" min={1} max={to} value={to} size={3}
                    onChange={handleTo}/><div className="expand_collapse"
                    onClick={() => setSingle(true)}>&#8676;</div></div>
                )}

            </div>
           <button className="ftSearchBtn" onClick={setYearFacet}>Select</button>
            <div className="error">{err}</div>
        </div>
    );
}

export default YearFacet;