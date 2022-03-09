import React from "react";
import {IRegionDataList, ISendCandidate} from "../../misc/interfaces";
import {useState, useEffect} from "react";
import {SONT_SERVICE} from "../../config";

function BigRegionFacet(props: {parentCallback: ISendCandidate}) {
    const [data, setData] = useState<IRegionDataList>({regions: []});
    const url: string = SONT_SERVICE + "big_regions_facets";
    const port: string = 'Home';
    const [help, setHelp] = useState(false);
    const [count, setCount] = useState(0);

    async function fetchData() {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
    }

    function sendCandidate(value: string) {
        let header: string = "Home port big region";
        let field: string = "plaats_regio_groot";

       /* switch (props.port) {
            case "Home port":
                header = "Home port big region";
                field = "plaats_regio_groot";
                break;
            case "Departure":
                header = "Departure port big region";
                field = "van_regio_groot.name";
                break;
            case "Arrival":
                header = "Arrival port big region";
                field = "naar_regio_groot.name";
                break;
            default:
                header = "Home port big region";
                field = "plaats_regio_groot";
                break;
        }*/
        props.parentCallback({facet: header, field: field, candidate: value});
    }

    useEffect(() => {
        fetchData();
    }, [count]);



    return (
        <div className="hcFacet">
            <div className="hcFacetTitle">
                <span>{port}: big region</span>
                <span className="hcIconHelp" onClick={() => setHelp(!help)}><img
                    src="https://d33wubrfki0l68.cloudfront.net/85886ca3e2d8c36ba06d7773a094512272453181/545f8/images/icons/icon-huc-help.svg"
                    alt=""/></span>
            </div>
            { help &&
            <div className="hcFacetHelp">
                <strong>The small region facet </strong><br/>
                Select the region of the shipmasters home ports.
            </div> }
            <div className="hcFacetItems">
                <select className="hcFacetSelector" onChange={(e) => sendCandidate(e.target.value)}>
                    <option value="none">--- Select region ---</option>
                    {data.regions.map((item) => {
                        return <option value={item.region}>{item.region}</option>
                    })}
                </select>
            </div>
        </div>
    );

}

export default BigRegionFacet;