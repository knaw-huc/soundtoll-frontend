import React from "react";
import {useState} from "react";

function shipmasterFacet() {

    let [more, setMore] = useState(false);

    function changeListLength() {
        if (more) {
            setMore(false);
        } else {
            setMore(true);
        }
    }
    return (
        <div className="hcFacet">
            <div className="hcFacetTitle">
                <span>Full name</span>
                <span className="hcIconHelp"><img
                    src="https://d33wubrfki0l68.cloudfront.net/85886ca3e2d8c36ba06d7773a094512272453181/545f8/images/icons/icon-huc-help.svg"
                    alt=""/></span>
            </div>

            <div className="hcFacetHelp">
                <strong>The full name facet </strong><br/>
                The names of the shipmasters are ordered by their number of passages.
            </div>

            <div className="hcFacetFilter"><input type="text" name="" value=""
                                                  placeholder="Type to filter"/></div>
            <div className="hcFacetItems">
                <div className="hcFacetItem">
                    Jan Jansen
                </div>

                <div className="hcClickable" onClick={changeListLength}>
                    { more ? (<div>More...</div>) : (<div>Less...</div>)}

                </div>
            </div>
        </div>
    );
}

export default shipmasterFacet;