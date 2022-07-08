import React from "react";
import {useState, useEffect} from "react";
import {ELASTIC_URL, SONT_SERVICE} from "../../config";
import {ICheckStruc} from "../../misc/interfaces";
import {Base64} from "js-base64";


function GoDetailFacet() {

    const [help, setHelp] = useState(false);
    const [textField, setTextField] = useState<string>("");
    const [error, setError] = useState(false);


    async function check_id() {
        const url = SONT_SERVICE + "check_id/" + textField;
        const response = await fetch(url);
        const json: ICheckStruc = await response.json();
        if (json.amount === "1") {
            setError(false);
            window.location.href = "#detail/" + textField;
        } else {
            setError(true);
        }
        console.log(json);
    }

    function handleChange(e: React.FormEvent<HTMLInputElement>): void {
        setTextField(e.currentTarget.value);
    }

    function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>): void {
        if (e.key === 'Enter') {
            goForIt();
        }
    }

    function goForIt() {
        if (textField !== "") {
            check_id();
        } else {
            setError(true);
        }
    }


    return (
        <div className="hcFacet">
            <div className="hcFacetTitle">
                <span>Passage ID</span>

                <span className="hcIconHelp" onClick={() => setHelp(!help)}><img
                    src="https://d33wubrfki0l68.cloudfront.net/85886ca3e2d8c36ba06d7773a094512272453181/545f8/images/icons/icon-huc-help.svg"
                    alt=""/></span>
            </div>
            {help &&
            <div className="hcFacetHelp">
                <strong>Shortcut</strong><br/>
                Go directly to a specific passage/registration by entering its passage ID..
            </div>}

            <div className="hcFacetFilter"><input type="text" id="shortcut"
                                                  placeholder="Press ENTER to go to detail view" onChange={handleChange}
                                                  onKeyUp={handleKeyPress}/></div>
            <button className="ftSearchBtn" onClick={goForIt}>Go</button>
            {error && (<div className="error">Not a valid ID!</div>)}
        </div>
    );
}

export default GoDetailFacet;