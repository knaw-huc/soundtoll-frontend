import React from "react";
import {IPassageData} from "../misc/interfaces";
import {Fragment} from "react";

export default function CargoTable(props: { passage: IPassageData }) {
    const subtotaal1: string = props.passage.subtotaal1_bedrag1 + " " + props.passage.subtotaal1_muntsoort1 + " " + props.passage.subtotaal1_bedrag2 + " " + props.passage.subtotaal1_muntsoort2 + " " + props.passage.subtotaal1_bedrag3 + " " + props.passage.subtotaal1_muntsoort3;
    const korting: string = props.passage.korting_bedrag1 + " " + props.passage.korting_muntsoort1 + " " + props.passage.korting_bedrag2 + " " + props.passage.korting_muntsoort2 + " " + props.passage.korting_bedrag3 + " " + props.passage.korting_muntsoort3;
    return (
        <div className="hcCargoTable">
            <div className="hcCargoTableRow">
                <div className="hcCargoTableLabel">
                    Depart.
                </div>
                <div className="hcCargoTableLabel">
                    Dest.
                </div>
                <div className="hcCargoTableLabel">
                    Amount
                </div>
                <div className="hcCargoTableLabel">
                    Unit
                </div>
                <div className="hcCargoTableLabel">
                    Commodity
                </div>
                <div className="hcCargoTableLabel">
                    Toll
                </div>
            </div>


            {props.passage.cargo.map(item => {
                return <div className="hcCargoTableRow">
                    <div className="hcCargoTableValue">
                        {item.regel}. {item.van}
                    </div>
                    <div className="hcCargoTableValue">
                        {item.naar}
                    </div>
                    <div className="hcCargoTableValue">
                        {item.aantal}
                    </div>
                    <div className="hcCargoTableValue">
                        {item.maat}
                    </div>
                    <div className="hcCargoTableValue">
                        {item.maat_alt === '' ? (<Fragment>{item.soort}</Fragment>) : (<Fragment>{item.soort} ({item.aantal_alt} {item.maat_alt})</Fragment>)}
                    </div>
                    <div className="hcCargoTableValue">
                        {item.bedrag1} {item.muntsoort1} {item.bedrag2} {item.muntsoort2} {item.bedrag3} {item.muntsoort3}
                    </div>
                </div>
            })}

            <div className="hcCargoTableRow">
                <div className="hcCargoTableValue">

                </div>
                <div className="hcCargoTableValue">

                </div>
                <div className="hcCargoTableValue">

                </div>
                <div className="hcCargoTableValue">

                </div>
                <div className="hcCargoTableValue">

                </div>
                {subtotaal1.trim() === "" ? (<div/>) : (
                    <div className="hcCargoTableValue hcUpperLine">
                        {subtotaal1}
                    </div>
                )}

            </div>

            <div className="hcCargoTableRow">
                <div className="hcCargoTableValue">

                </div>
                <div className="hcCargoTableValue">

                </div>
                <div className="hcCargoTableValue">

                </div>
                <div className="hcCargoTableValue">

                </div>
                <div className="hcCargoTableValue">
                    {props.passage.soort_korting}
                </div>
                {korting.trim() === "" ? (<div/>) : (<div className="hcCargoTableValue hcLowerLine">
                    {korting}
                </div>)}

            </div>

            <div className="hcCargoTableRow">
                <div className="hcCargoTableValue">

                </div>
                <div className="hcCargoTableValue">

                </div>
                <div className="hcCargoTableValue">

                </div>
                <div className="hcCargoTableValue">

                </div>
                <div className="hcCargoTableValue">

                </div>
                <div className="hcCargoTableValue">
                    {props.passage.subtotaal2_bedrag1} {props.passage.subtotaal2_muntsoort1} {props.passage.subtotaal2_bedrag2} {props.passage.subtotaal2_muntsoort2} {props.passage.subtotaal2_bedrag3} {props.passage.subtotaal2_muntsoort3}
                </div>
            </div>

            {props.passage.tax.map(item => {
                return <div className="hcCargoTableRow">
                    <div className="hcCargoTableValue">

                    </div>
                    <div className="hcCargoTableValue">

                    </div>
                    <div className="hcCargoTableValue">

                    </div>
                    <div className="hcCargoTableValue">

                    </div>
                    <div className="hcCargoTableValue">
                        {item.naam} {item.korting === 'J' && ' (rebate)'}
                    </div>
                    <div className="hcCargoTableValue">
                        {item.bedrag1} {item.muntsoort1} {item.bedrag2} {item.muntsoort2} {item.bedrag3} {item.muntsoort3}
                    </div>
                </div>
            })}
            <div className="hcCargoTableRow">
                <div className="hcCargoTableValue">

                </div>
                <div className="hcCargoTableValue">

                </div>
                <div className="hcCargoTableValue">

                </div>
                <div className="hcCargoTableValue">

                </div>
                <div className="hcCargoTableValue">
                    <strong>Total</strong>
                </div>
                <div className="hcCargoTableValue hcUpperLine">
                    {props.passage.totaal_bedrag1} {props.passage.totaal_muntsoort1} {props.passage.totaal_bedrag2} {props.passage.totaal_muntsoort2} {props.passage.totaal_bedrag3} {props.passage.totaal_muntsoort3}
                </div>
            </div>

        </div>
    )
}