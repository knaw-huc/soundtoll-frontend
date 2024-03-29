import React from 'react';
import ReactDOM from 'react-dom';
import Browse from "./components/browse";
import Home from "./components/home";
import Search from "./components/search";
import Geomap from "./components/geomap";
import About from "./components/about";
import Contact from "./components/contact";
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
import DownloadResults from "./components/download_results";
import BigRegions from "./components/bigRegions";
import SmallRegions from "./components/smallRegions";
import {ISetLangEvent, ISetValue} from "./misc/interfaces";
import Download from "./components/download";


const interpreter = interpret(SontMachine);
interpreter.start();

gotoUrl();

const setLanguage: ISetLangEvent = (struc: ISetValue) => {
    interpreter.send(struc);
}

function gotoUrl() {
    if (window.location.hash.substr(1).indexOf("detail/") === 0) {
        const id = window.location.hash.substr(window.location.hash.indexOf("/") + 1);
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
                if (window.location.hash.substr(1).indexOf("download_results") === 0) {
                    const id = window.location.hash.substr(window.location.hash.indexOf("/") + 1);
                    interpreter.send("download_results", {search_string: id});
                } else {
                    if (window.location.hash.substr(1).indexOf("about") === 0) {
                        //const id = window.location.hash.substr(window.location.hash.indexOf("/") + 1)
                        interpreter.send("about");
                    } else {
                        if (window.location.hash.substr(1).indexOf("download") === 0) {
                            interpreter.send("download");
                        } else {
                            interpreter.send(window.location.hash.substr(1))
                        }
                    }
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
            "home": ({state}) => <Home language={(state.context || {}).language} setLanguage={setLanguage}/>,
            "browse": ({state}) => <Browse/>,
            "search": ({state}) => <Search search_string={(state.context || {}).search_string}/>,
            "maps": ({state}) => <Maps/>,
            "map": ({state}) => <Geomap code={(state.context || {}).code}/>,
            "about": ({state}) => <About language={(state.context || {}).language} setLanguage={setLanguage}/>,
            "currencies": ({state}) => <Currency/>,
            "download": ({state}) => <Download/>,
            "download_results": ({state}) => <DownloadResults search_string={(state.context || {}).search_string}/>,
            "commodities": ({state}) => <Commodities/>,
            "names": ({state}) => <Shipmasters/>,
            "places": ({state}) => <Places/>,
            "contact": ({state}) => <Contact/>,
            "hist_places": ({state}) => <HistoricalPlaces/>,
            "big_regions": ({state}) => <BigRegions/>,
            "small_regions": ({state}) => <SmallRegions/>,
            "fourOhFour": ({state}) => <div>404</div>,
            "": ({state}) => <div>The GUI for {state.value} is not yet defined</div>
        })}</div>
    , document.getElementById('root'));

serviceWorker.unregister();
