export interface IResult {
    number_of_records: number,
    data: object
}

export interface IPassageData {
    id_doorvaart: number,
    volgnummer: number,
    schipper_voornamen: string,
    schipper_patroniem: string,
    schipper_tussenvoegsel: string,
    schipper_achternaam: string,
    schipper_plaatsnaam: string,
    schipper_naam: string,
    datum: string,
    tonnage: string,
    cargo: IPassageCargo[],
    tax: IPassageTax[],
    scans: IPassageScans[],
    section: string,
    register: string,
    locations: IPassageLocation[]
    valuta: IPassageValuta[]
    units: string[]
}

export interface IPassageScans {
    bestandsnaam: string,
    url: string
}

export interface IPassageTax {
    id_doorvaart: number,
    regel: number,
    naam: string,
    muntsoort1: string,
    bedrag1: string,
    muntsoort2: string,
    bedrag2: string,
    muntsoort3: string,
    bedrag3: string,
    korting: string,
    hulp: string
}

export interface IPassageCargo {
    id_doorvaart: number,
    regel: number,
    van: string,
    naar: string,
    maat: string,
    aantal: string,
    soort: string,
    muntsoort1: string,
    bedrag1: string,
    muntsoort2: string,
    bedrag2: string,
    muntsoort3: string,
    bedrag3: string,
    maat_alt: string,
    aantal_alt: string,
    hulp: string
}

export interface IPassageLocation {
    code: string,
    name: string,
    mname: string,
    longitude: string;
    latitude: string;
    zoom: string;
}

export interface IPassageValuta {
    name: string;
    code: string;
    url: string;
}

export interface ICurrencyList {
    itemList: IPassageValuta[]
}

export interface IShipmaster {
    achternaam: string;
    volledige_naam: string;
}

export interface ICommodity {
    name: string;
}

export interface ICommodityList {
    itemList: ICommodity[],
    page: number,
    number_of_pages: number;
}

export interface IShipMasterList {
    itemList: IShipmaster[],
    page: number,
    number_of_pages: number;
}

export interface IPlace {
    name: string;
}

export interface IPlaceList {
    itemList: IPlace[],
    page: number,
    number_of_pages: number;
}

export interface facetData {
    key: string,
    doc_count: number
}

export interface facetList {
    buckets: facetData[]
}

export interface IRegionData {
    region: string,
    code: number
}

export interface IRegionDataList {
    regions: IRegionData[]
}

export interface IResultPassage {
    schipper_achternaam: string,
    schipper_naam: string,
    jaar: number,
    maand: string,
    dag: string,
    id_doorvaart: string,
    schipper_plaatsnaam: string;
    van_eerste: string,
    naar_eerste: string
}

export interface IResultPassageList {
    amount: number,
    passages: IResultPassage[]
}

export interface IMapData {
    name: string,
    region: string,
    lat: number,
    long: number,
    zoom: number;
}


export interface IFacetCandidate {
    facet: string,
    field: string,
    candidate: string
}

export interface ISendCandidate {
    (data: IFacetCandidate):void
}

export interface ISendPage {
    (data: number): void
}

export interface ISortOrder {
    (data: string): void
}

export interface IResetFacets {
    (): void
}

export interface IRemoveFacet {
    (field: string, value: string): void
}

export interface IFacetState {
    shipmaster: boolean;
    departure: boolean;
    arrival: boolean,
    standard: boolean,
    misc: boolean;
}

export interface ISearchValues {
    name: string,
    field: string,
    values: string[]
}

export interface ISearchObject {
    facetstate: IFacetState,
    searchvalues: ISearchValues[] | string,
    page: number,
    sortorder: string;
}



