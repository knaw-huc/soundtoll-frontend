import {IFacetCandidate, ISearchObject} from "./interfaces";

export function goOut(url: string): void {
    window.open(url);
}

export function addFacetToSearchData(candidate: IFacetCandidate, searchData: ISearchObject): ISearchObject {
    let searchBuffer: ISearchObject = searchData;


    return searchBuffer;
}

