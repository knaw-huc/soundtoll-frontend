import React from "react";
import {useState, useEffect} from "react";
import {SONT_SERVICE} from "../../config";
import {facetList, ISendCandidate} from "../../misc/interfaces";


function CommodityFacet(props: {parentCallback: ISendCandidate}) {

    let [more, setMore] = useState(true);
    const [filter, setFilter] = useState("");
    let [data, setData] = useState<facetList>({"buckets": []});
    let commURL: string = SONT_SERVICE + "elastic/initial_facet/lading.soort/short";
    const [help, setHelp] = useState(false);

    const facets: facetList = data;

    async function fetchData() {
        console.log(commURL);
        const response = await fetch(commURL);
        const json = await response.json();
        setData(json);
    }

    function changeListLength() {
        if (more) {
            if (filter === "") {
                commURL= SONT_SERVICE + "elastic/initial_facet/lading.soort/short";
            } else {
                commURL= SONT_SERVICE + "elastic/facet/lading.soort/short/" + filter;
            }
            setMore(false);
        } else {
            if (filter === "") {
                commURL= SONT_SERVICE + "elastic/initial_facet/lading.soort/long";
            } else {
                commURL= SONT_SERVICE + "elastic/facet/lading.soort/long/" + filter;
            }
            setMore(true);
        }
        fetchData();
    }


    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        if (e.currentTarget.value.length > 1)
        {
            setFilter(e.currentTarget.value);
            if (more) {
                commURL = SONT_SERVICE + "elastic/facet/lading.soort/short/" + filter;
            } else {
                commURL = SONT_SERVICE + "elastic/facet/lading.soort/long/" + filter;
            }
        }
        fetchData();
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="hcFacet">
            <div className="hcFacetTitle">
                <span>Type</span>
                <span className="hcIconHelp" onClick={() => setHelp(!help)}><img
                    src="https://d33wubrfki0l68.cloudfront.net/85886ca3e2d8c36ba06d7773a094512272453181/545f8/images/icons/icon-huc-help.svg"
                    alt=""/></span>
            </div>
            { help &&
            <div className="hcFacetHelp">
                <strong>The full name facet </strong><br/>
                The names of the home ports are ordered by their number of passages.
            </div> }

            <div className="hcFacetFilter"><input type="text" name="" onChange={handleChange} id="shipMasterFilter" placeholder="Type to filter"/></div>
            <div className="hcFacetItems">
                {facets.buckets.map((item) => {
                    return (
                        <div className="hcFacetItem" onClick={() => props.parentCallback({facet: "Commodity", field: "lading.soort", candidate: item.key})}>
                            {item.key}
                        </div>
                    )
                })}


                <div className="hcClickable" onClick={changeListLength}>
                    { more ? (<div>More...</div>) : (<div>Less...</div>)}

                </div>
            </div>
        </div>
    );
}

export default CommodityFacet;