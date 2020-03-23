import React from "react";
import {IPassageData} from "../misc/interfaces";

export default function CargoTable(props: {passage: IPassageData}) {

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
                            {item.soort}
                        </div>
                        <div className="hcCargoTableValue">
                            {item.bedrag1} {item.muntsoort1} {item.bedrag2} {item.muntsoort2} {item.bedrag3} {item.muntsoort3}
                        </div>
                    </div>
                })}

            {props.passage.tax.map(item => {
               return  <div className="hcCargoTableRow">
                   <div className="hcCargoTableValue">

                   </div>
                   <div className="hcCargoTableValue">

                   </div>
                   <div className="hcCargoTableValue">

                   </div>
                   <div className="hcCargoTableValue">

                   </div>
                   <div className="hcCargoTableValue">
                       {item.naam}
                   </div>
                   <div className="hcCargoTableValue">
                       {item.bedrag1} {item.muntsoort1} {item.bedrag2} {item.muntsoort2} {item.bedrag3} {item.muntsoort3}
                   </div>
               </div>
            })}


        </div>
    )
}