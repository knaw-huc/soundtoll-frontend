import React from "react";
import {useState, useEffect} from "react";
import {SONT_SERVICE} from "../../config";
import {facetList, ISendCandidate} from "../../misc/interfaces";


function FreeTextFacet(props: {parentCallback: ISendCandidate}) {

    const [help, setHelp] = useState(false);
    const [textField, setTextField] = useState<string>("");
    const [searchField, setSearchField] = useState("fulltext");
    const [searchLabel, setSearchlabel] = useState("All indexed fields");

    function handleChange(e: React.FormEvent<HTMLInputElement>): void {
        setTextField(e.currentTarget.value);
    }

    function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>): void {
        if (e.key === 'Enter') {
            setTextFacet();
            e.currentTarget.value = "";
            //setSearchField("fulltext");
        }
    }

    function setTextFacet() {
        if (textField !== "") {
            props.parentCallback({facet: "Free text (" + searchLabel +")", field: "FREE_TEXT:" + searchField, candidate: textField});
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
                Search through all indexed fields. Searching with wildcards ('*' and '?') is allowed.<br/>
                * = 0, 1 or more possible characters<br/>
                ? = 1 possible character
            </div> }

            <div className="hcFacetFilter"><input type="text" name=""  id="freeText" placeholder="Press ENTER to search"  onChange={handleChange} onKeyUp={handleKeyPress}/></div>
            <div><strong>Search in:</strong></div>
            <select onChange={(e) => {
                setSearchField(e.target.value);
                setSearchlabel(e.target.options[e.target.selectedIndex].text);
            } } value={searchField}>
                <option value="fulltext">All indexed fields</option>
                <option value="schipper_achternaam">Shipmaster surname</option>
                <option value="schipper_voornamen">Shipmaster given name</option>
                <option value="schipper_patroniem">Shipmaster patronymic</option>
                <option value="schipper_plaatsnaam">Home port</option>
                <option value="plaats_standaard">Home port standard</option>
                <option value="plaats_regio_groot">Home port big region</option>
                <option value="plaats_regio_klein">Home port small region</option>
                <option value="van.plaats">Port of departure</option>
                <option value="van_standaard.plaats">Port of departure standard</option>
                <option value="van_regio_groot.name">Port of departure big region</option>
                <option value="van_regio_klein.name">Port of departure small region</option>
                <option value="naar.plaats">Port of destination</option>
                <option value="naar_standaard.plaats">Port of destination standard</option>
                <option value="naar_regio_groot.name">Port of destination big region</option>
                <option value="naar_regio_klein.name">Port of destination small region</option>
                <option value="lading.soort">Commodity</option>
                <option value="opmerking_bron">Remarks</option>


            </select>
            <button className="ftSearchBtn" onClick={setTextFacet}>Search</button>
        </div>
    );
}

export default FreeTextFacet;