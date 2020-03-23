import {assign, Machine} from "xstate";

export const SontMachine = Machine<{
    passage_id: number,
    code: string,
    search_string: string
}, {
    states: {
        fourOhFour: {},
        detail: {
            states: {
                scan: {},
                no_scan: {}
            }
        },
        map: {},
        maps: {},
        test:{},
        home: {},
        search: {},
        browse: {},
        about: {},
        commodities: {},
        currencies: {},
        places: {
            states: {
                no_character: {},
                character: {}
            }
        },
        hist_places: {},
        names: {
            states: {
                no_character: {},
                character: {}
            }
        }
    }
}>(
    {
        id: 'fetch',
        initial: 'home',
        context: {
            passage_id: -1,
            code: "none",
            search_string: "none"
        },
        on: {
            detail: {
                actions: assign({
                    passage_id: (context, event) => event.passage_id
                }),
                target: "detail"
            },
            maps: "maps",
            home: "home",
            search: {
                actions: assign({
                    search_string: (context, event) => event.search_string
                }),
                target: "search"
            },
            browse: "browse",
            commodities: "commodities",
            currencies: "currencies",
            places: "places",
            hist_places: "hist_places",
            names: "names",
            about: "about",
            map: {actions: assign({
                    code: (context, event) => event.code
                }),
                target: "map"},
            test: "test",
            "*": "fourOhFour"
        },
        states: {
            fourOhFour: {},
            detail: {
                initial: "no_scan" as const,
                states: {
                    scan: {
                        on: {
                            close_scan: "no_scan"
                        }
                    },
                    no_scan: {
                        on: {
                            select_scan: "scan",
                            select_map: "#fetch.map"
                        }
                    }
                }
            },
            map: {

            },
            maps: {},
            home: {},
            search: {
                on: {
                    item: "detail"
                }
            },
            browse: {
                on: {
                    check_commodities: "commodities",
                    check_names: "names",
                    check_valuta: "currencies",
                    chech_places: "places"
                }
            },
            commodities: {},
            currencies: {},
            hist_places: {},
            places: {
                initial: "no_character" as const,
                states: {
                    no_character: {
                        on: {
                            choose_character: "character"
                        }
                    },
                    character: {

                    }
                }

            },
            about: {},
            test: {},
            names: {
                initial: "no_character" as const,
                states: {
                    no_character: {
                        on: {
                            choose_character: "character"
                        }
                    },
                    character: {

                    }
                }
            }
        }
    }
);