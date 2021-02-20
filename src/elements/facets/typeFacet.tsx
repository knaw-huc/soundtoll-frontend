import React from "react";
import {useState, useEffect} from "react";
import {SONT_SERVICE} from "../../config";
import {facetList, ISendCandidate} from "../../misc/interfaces";


function TypeFacet(props: { parentCallback: ISendCandidate }) {


    const [help, setHelp] = useState(false);



    return (
        <div className="hcFacet">
            <div className="hcFacetTitle">
                <span>Type</span>

                <span className="hcIconHelp" onClick={() => setHelp(!help)}><img
                    src="https://d33wubrfki0l68.cloudfront.net/85886ca3e2d8c36ba06d7773a094512272453181/545f8/images/icons/icon-huc-help.svg"
                    alt=""/></span>
            </div>
            {help &&
            <div className="hcFacetHelp">
                <strong>Type facet </strong><br/>
                <strong>Passage:</strong> After 1633, each passage was recorded in one entry in the STR.<br/>
                <strong>Registration:</strong> Before 1634, each passage was recorded in one or several entries in the STR. Accordingly, STRO includes one or several registrations per pre-1634 passage.
            </div>}
            <div className="hcFacetItem" onClick={() => {
                props.parentCallback({facet: "Type (P = Passage, R = Registration)", field: "type", candidate: "P"});
            }}>Passage</div>
            <div className="hcFacetItem" onClick={() => {
                props.parentCallback({facet: "Type (P = Passage, R = Registration)", field: "type", candidate: "R"});
            }}>Registration</div>

        </div>
    );
}

export default TypeFacet;