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
    jaar: number,
    soort_korting: string,
    korting_muntsoort1: string,
    korting_bedrag1: string,
    korting_muntsoort2: string,
    korting_bedrag2: string,
    korting_muntsoort3: string,
    korting_bedrag3: string,
    subtotaal1_muntsoort1: string,
    subtotaal1_bedrag1: string,
    subtotaal1_muntsoort2: string,
    subtotaal1_bedrag2: string,
    subtotaal1_muntsoort3: string,
    subtotaal1_bedrag3: string,
    subtotaal2_muntsoort1: string,
    subtotaal2_bedrag1: string,
    subtotaal2_muntsoort2: string,
    subtotaal2_bedrag2: string,
    subtotaal2_muntsoort3: string,
    subtotaal2_bedrag3: string,
    totaal_muntsoort1: string,
    totaal_bedrag1: string,
    totaal_muntsoort2: string,
    totaal_bedrag2: string,
    totaal_muntsoort3: string,
    totaal_bedrag3: string,
    totaal_muntsoort4: string,
    totaal_bedrag4: string,
    totaal_muntsoort5: string,
    totaal_bedrag5: string
    tonnage: string,
    cargo: IPassageCargo[],
    tax: IPassageTax[],
    scans: IPassageScans[],
    opmerking_bron: string,
    section: string,
    register: string,
    locations: IPassageLocation[]
    valuta: IPassageValuta[]
    units: IPassageUnit[]
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
    name: string,
    code: string,
    url: string
}

export interface IPassageUnit {
    unit: string,
    standard_unit: string
}

export interface ICurrencyList {
    itemList: IPassageValuta[]
}

export interface IShipmaster {
    achternaam: string;
    volledige_naam: string;
}

export interface IShipmasterPatronym {
    patroniem: string;
}

export interface IShipmasterChrName {
    voornaam: string;
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

export interface IShipMasterPatronymList {
    itemList: IShipmasterPatronym[],
    page: number,
    number_of_pages: number;
}

export interface IShipMasterChrNameList {
    itemList: IShipmasterChrName[],
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
    schipper_plaatsnaam: string,
    schipper_patroniem: string,
    van_eerste: string,
    naar_eerste: string,
    type: string
}

export interface IResultPassageList {
    amount: number,
    pages: number,
    passages: IResultPassage[]
}

export interface IMapData {
    name: string,
    region: string,
    lat: number,
    long: number,
    zoom: number;
}

export interface ISetAboutPage {
    (aboutPage: string): void;
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
    search: boolean;
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



