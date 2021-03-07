import React from 'react';
import ReactDOM from 'react-dom';
import Browse from "./components/browse";
import Home from "./components/home";
import Search from "./components/search";
import Geomap from "./components/geomap";
import About from "./components/about";
import Maps from "./components/maps";
import Shipmasters from "./components/shipmasters";
import Commodities from "./components/commodities";
import Passage from "./components/passage";
import {StateMachineComponent} from "./renderMachine";
import * as serviceWorker from './serviceWorker';
import {interpret} from "xstate";
import './assets/css/soundtoll.css';
import {SontMachine} from "./machine/model";
import Currency from "./components/currency";
import Places from "./components/places";
import HistoricalPlaces from "./components/historicalPlaces";


const interpreter = interpret(SontMachine);
interpreter.start();

gotoUrl();


function gotoUrl () {
    if (window.location.hash.substr(1).indexOf("detail/") === 0) {
        const id = +window.location.hash.substr(window.location.hash.indexOf("/") + 1);
        interpreter.send("detail", {passage_id: id});
    } else {
        if (window.location.hash.substr(1).indexOf("map/") === 0) {
            const id = window.location.hash.substr(window.location.hash.indexOf("/") + 1)
            interpreter.send("map", {code: id});
        } else {
            if (window.location.hash.substr(1).indexOf("search") === 0) {
                if (window.location.hash.substr(1).length > 6 && window.location.hash.substr(1).indexOf("search") !== -1) {
                    const id = window.location.hash.substr(window.location.hash.indexOf("/") + 1);
                    interpreter.send("search", {search_string: id});
                } else {
                    const id = "none";
                    interpreter.send("search", {search_string: id});
                }
            } else {
                if (window.location.hash.substr(1).indexOf("about") === 0) {
                    const id = window.location.hash.substr(window.location.hash.indexOf("/") + 1)
                    interpreter.send("about", {language: id});
                } else {
                    interpreter.send(window.location.hash.substr(1))
                }

            }

        }
    }
}

window.onhashchange = gotoUrl;

/*if (window.location.hash.substr(1).length > 0) {
    interpreter.send(window.location.hash.substr(1))
}*/
ReactDOM.render(
    <div>
        {StateMachineComponent(interpreter, {
            "detail": ({state}) => <Passage passageId={(state.context || {}).passage_id}/>,
            "home": ({state}) => <Home/>,
            "browse": ({state}) => <Browse/>,
            "search": ({state}) => <Search search_string={(state.context || {}).search_string}/>,
            "maps": ({state}) => <Maps/>,
            "map": ({state}) => <Geomap code={(state.context || {}).code}/>,
            "about": ({state}) => <About language={(state.context || {}).language}/>,
            "currencies": ({state}) => <Currency/>,
            "commodities": ({state}) => <Commodities/>,
            "names": ({state}) => <Shipmasters/>,
            "places": ({state}) => <Places/>,
            "hist_places": ({state}) => <HistoricalPlaces/>,
            "fourOhFour": ({state}) => <div>404</div>,
            "": ({state}) => <div>The GUI for {state.value} is not yet defined</div>
    })}</div>
    , document.getElementById('root'));

serviceWorker.unregister();
