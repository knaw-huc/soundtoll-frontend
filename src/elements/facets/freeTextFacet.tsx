import React from "react";
import {useState, useEffect} from "react";
import {SONT_SERVICE} from "../../config";
import {facetList, ISendCandidate} from "../../misc/interfaces";


function FreeTextFacet(props: {parentCallback: ISendCandidate}) {

    let [more, setMore] = useState(true);
    const [filter, setFilter] = useState("");
    let [data, setData] = useState<facetList>({"buckets": []});
    let url: string = SONT_SERVICE + "elastic/initial_facet/schipper_voornamen/short";
    const [help, setHelp] = useState(false);
    const [loading, setLoading] = useState(true);




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
                Press ENTER to search
            </div> }

            <div className="hcFacetFilter"><input type="text" name=""  id="freeText" placeholder="Press ENTER to search"/></div>
        </div>
    );
}

export default FreeTextFacet;