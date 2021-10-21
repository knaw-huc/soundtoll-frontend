import React, {useState} from "react";
import {IPickPlace, IPlace} from "../misc/interfaces";

function PlaceItem(props: { item: IPlace, go: IPickPlace }) {
    const [foldOut, setFoldOut] = useState(true);

    return (
        <div>
            <div  className="hcClickable" onClick={() => {props.go(props.item.name)}}>{props.item.name}</div>
            {foldOut ? (
                <div className="foldArrow" onClick={() => setFoldOut(false)}> +</div>
            ) : (
                <React.Fragment>
                    <div className="foldArrow" onClick={() => setFoldOut(true)}> -</div>
                    <div className="histPlaceList">
                        {props.item.list}
                    </div>
                </React.Fragment>
            )}
        </div>
    )
}

export default PlaceItem;