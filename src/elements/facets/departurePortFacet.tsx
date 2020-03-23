import React from "react";
import {useState, useEffect} from "react";
import {SONT_SERVICE} from "../../config";
import {facetList, ISendCandidate} from "../../misc/interfaces";


function DeparturePortFacet(props: {parentCallback: ISendCandidate}) {

    let [more, setMore] = useState(true);
    const [filter, setFilter] = useState("");
    let [data, setData] = useState<facetList>({"buckets": []});
    const [help, setHelp] = useState(false);

    let url: string = SONT_SERVICE + "elastic/initial_facet/van.plaats/short";
    const facets: facetList = data;

    async function fetchData() {
        if (more) {
            url = SONT_SERVICE + "elastic/facet/van.plaats/short/" + filter;
        } else {
            url = SONT_SERVICE + "elastic/facet/van.plaats/long/" + filter;
        }

        const response = await fetch(url);
        const json = await response.json();
        setData(json);
    }

    function changeListLength() {
        if (more) {
            if (filter === "") {
                url= SONT_SERVICE + "elastic/initial_facet/van.plaats/short";
            } else {
                url= SONT_SERVICE + "elastic/facet/van.plaats/short/" + filter;
            }
            setMore(false);
        } else {
            if (filter === "") {
                url= SONT_SERVICE + "elastic/initial_facet/van.plaats/long";
            } else {
                url= SONT_SERVICE + "elastic/facet/van.plaats/long/" + filter;
            }
            setMore(true);
        }
    }


    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        if (e.currentTarget.value.length > 1)
        {
            setFilter(e.currentTarget.value);
        }
        fetchData();
    }

    useEffect(() => {
        fetchData();
    }, [filter, more]);

    return (
        <div className="hcFacet">
            <div className="hcFacetTitle">
                <span>Departure</span>
                <span className="hcIconHelp" onClick={() => setHelp(!help)}><img
                    src="https://d33wubrfki0l68.cloudfront.net/85886ca3e2d8c36ba06d7773a094512272453181/545f8/images/icons/icon-huc-help.svg"
                    alt=""/></span>
            </div>
            {help &&
            <div className="hcFacetHelp">
                <strong>The full name facet </strong><br/>
                The names of the home ports are ordered by their number of passages.
            </div>
            }

            <div className="hcFacetFilter"><input type="text" name="" onChange={handleChange} id="shipMasterFilter" placeholder="Type to filter"/></div>
            <div className="hcFacetItems">
                {facets.buckets.map((item) => {
                    return (
                        <div className="hcFacetItem" onClick={() => props.parentCallback({facet: "Port of departure", field: "van.plaats", candidate: item.key})}>
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

export default DeparturePortFacet;