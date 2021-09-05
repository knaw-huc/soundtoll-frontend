import React from "react";
import {useState, useEffect} from "react";
import {SONT_SERVICE} from "../../config";
import {facetList, ISendCandidate} from "../../misc/interfaces";


function FreeTextFacet(props: {parentCallback: ISendCandidate}) {

    const [help, setHelp] = useState(false);
    const [textField, setTextField] = useState<string>("");

    function handleChange(e: React.FormEvent<HTMLInputElement>): void {
        setTextField(e.currentTarget.value);
    }

    function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>): void {
        if (e.key === 'Enter') {
            setTextFacet();
        }
    }

    function setTextFacet() {
        if (textField !== "") {
            props.parentCallback({facet: "Free text", field: "FREE_TEXT", candidate: textField});
        }
    }




    return (
        <div className="hcFacet">
            <div className="hcFacetTitle">
                <span>Text search</span>

                <span className="hcIconHelp" onClick={() => setHelp(!help)}><img
                    src="https://d33wubrfki0l68.cloudfront.net/85886ca3e2d8c36ba06d7773a094512272453181/545f8/images/icons/icon-huc-help.svg"
                    alt=""/></span>
            </div>
            { help &&
            <div className="hcFacetHelp">
                <strong>Free text facet </strong><br/>
                Search through all indexed fields. Searching with wildcards ('*' and '?') is allowed.
            </div> }

            <div className="hcFacetFilter"><input type="text" name=""  id="freeText" placeholder="Press ENTER to search"  onChange={handleChange} onKeyUp={handleKeyPress}/></div>
            <button className="ftSearchBtn" onClick={setTextFacet}>Search</button>
        </div>
    );
}

export default FreeTextFacet;