import React from "react";
import {IResult, IPassageData} from "../misc/interfaces";
import CargoTable from "../elements/cargoTable";

function PassageDetails(props: {passage: IResult}) {
    const pass: IPassageData = props.passage.data as IPassageData;
    const locations = pass.locations;
    const units = pass.units;
    const currencies = pass.valuta;

    function showMap(code: string): void {
        window.location.href = '#map/' + code;
    }

    return (
        <div className="hcPassageBasicInfo">
            <div className="hcPassageRow">
                <div className="hcPassageLabel">
                    ID
                </div>
                <div className="hcPassageValue">
                    {pass.id_doorvaart}
                </div>
            </div>
            <div className="hcPassageRow">
                <div className="hcPassageLabel">
                    Date
                </div>
                <div className="hcPassageValue">
                    {pass.datum}
                </div>
            </div>
            <div className="hcPassageRow">
                <div className="hcPassageLabel">
                    Passage
                </div>
                <div className="hcPassageValue">
                    {pass.volgnummer}
                </div>
            </div>
            <div className="hcPassageRow">
                <div className="hcPassageLabel">
                    Shipmaster
                </div>
                <div className="hcPassageValue">
                    {pass.schipper_naam} from {pass.schipper_plaatsnaam}
                </div>
            </div>
            {/*<div className="hcPassageRow">
                <div className="hcPassageLabel">
                    Patronymic
                </div>
                <div className="hcPassageValue">
                    {pass.schipper_patroniem}
                </div>
            </div>*/}
            <div className="hcPassageRow">
                <div className="hcPassageLabel">
                    Section
                </div>
                <div className="hcPassageValue">
                    {pass.section}
                </div>
            </div>
            <div className="hcPassageRow">
                <div className="hcPassageLabel">
                    Register
                </div>
                <div className="hcPassageValue">
                    {pass.register}
                </div>
            </div>
            <div className="hcPassageRow">
                <div className="hcPassageLabel">
                    Tonnage
                </div>
                <div className="hcPassageValue">
                    {pass.tonnage}
                </div>
            </div>
            <div className="hcPassageRow">
                <div className="hcPassageLabel hcCargoLabel">
                    Cargo
                </div>
                <div className="hcPassageValue">
                    &nbsp;
                </div>
            </div>

            <CargoTable passage={pass as IPassageData}/>

            <div className="hcPassageRow">
                <div className="hcPassageLabel">
                    Geographical locations
                </div>
                <div className="hcPassageValue">
                    {locations.map(place => {
                        if (place.name !== "-") {
                            return <div>{place.name} (<div className="hcClickable" onClick={() => showMap(place.code)}>{place.mname}</div>)</div>
                        }
                    })}
                </div>
            </div>
            <div className="hcPassageRow">
                <div className="hcPassageLabel">
                    Units
                </div>
                <div className="hcPassageValue">
                    {units.map(unit => {
                        return <div>{unit.unit} ({unit.standard_unit})</div>
                    })}
                </div>
            </div>
            <div className="hcPassageRow">
                <div className="hcPassageLabel">
                    Currencies
                </div>
                <div className="hcPassageValue">
                    {currencies.map(currency => {
                        return <div>{currency.name} (<a href={currency.url} target="new">{currency.code}</a>)</div>
                    })}
                </div>
            </div>
            <div className="hcPassageRow">
                <div className="hcPassageLabel">
                    Remarks
                </div>
                <div className="hcPassageValue">
                    {pass.opmerking_bron}
                    {pass.vide_list.length > 0 ? (
                        <div>See also:
                            {pass.vide_list.map((item, index) => {
                                return (<div className="hcClickable" key={index} onClick={() => {
                                    window.open( "#detail/" + item);
                                }}><br/>{item}</div>)
                            })}
                        </div>
                    ) : (<div/>)}
                </div>
            </div>
        </div>
    )
}

export default PassageDetails;
