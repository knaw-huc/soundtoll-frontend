import React from "react";
import {useState, useEffect} from "react";
import {SONT_SERVICE} from "../../config";
import {facetList, ISendCandidate} from "../../misc/interfaces";


function ChrNameFacet(props: {parentCallback: ISendCandidate}) {

    let [more, setMore] = useState(true);
    const [filter, setFilter] = useState("");
    let [data, setData] = useState<facetList>({"buckets": []});
    let url: string = SONT_SERVICE + "elastic/initial_facet/schipper_voornamen/short";
    const [help, setHelp] = useState(false);
    const [loading, setLoading] = useState(true);
    const facets: facetList = data;

    async function fetchData() {
        if (more) {
            url = SONT_SERVICE + "elastic/facet/schipper_voornamen/short/" + filter;
        } else {
            url = SONT_SERVICE + "elastic/facet/schipper_voornamen/long/" + filter;
        }

        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
    }

    function changeListLength() {
        if (more) {
            if (filter === "") {
                url= SONT_SERVICE + "elastic/initial_facet/schipper_voornamen/short";
            } else {
                url= SONT_SERVICE + "elastic/facet/schipper_voornamen/short/" + filter;
            }
            setMore(false);
        } else {
            if (filter === "") {
                url= SONT_SERVICE + "elastic/initial_facet/schipper_patroniem/long";
            } else {
                url= SONT_SERVICE + "elastic/facet/schipper_patroniem/longnaam/" + filter;
            }
            setMore(true);
        }
    }


    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        if (e.currentTarget.value.length > 1)
        {
            setFilter(e.currentTarget.value);
        }
    }

    useEffect(() => {
        fetchData();
    }, [more, filter]);

    return (
        <div className="hcFacet">
            <div className="hcFacetTitle">
                <span>Given name</span>

                <span className="hcIconHelp" onClick={() => setHelp(!help)}><img
                    src="https://d33wubrfki0l68.cloudfront.net/85886ca3e2d8c36ba06d7773a094512272453181/545f8/images/icons/icon-huc-help.svg"
                    alt=""/></span>
            </div>
            { help &&
            <div className="hcFacetHelp">
                <strong>Christian name facet </strong><br/>
                The names are ordered by their number of passages.
            </div> }

            <div className="hcFacetFilter"><input type="text" name="" onChange={handleChange} id="shipMasterFilter" placeholder="Type to filter"/></div>
            {!loading ? (<div className="hcFacetItems">
                {facets.buckets.map((item) => {
                    return (
                        <div className="hcFacetItem" onClick={() => props.parentCallback({facet: "Chr. name", field: "schipper_voornamen", candidate: item.key})}>
                            {item.key}
                        </div>
                    )
                })}


                <div className="hcClickable" onClick={changeListLength}>
                    { more ? (<div>More...</div>) : (<div>Less...</div>)}

                </div>
            </div>) : (
                <div className="hcfacetLoading">Loading...</div>
            )}
        </div>
    );
}

export default ChrNameFacet;