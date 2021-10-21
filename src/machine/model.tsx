import {assign, Machine} from "xstate";

export const SontMachine = Machine<{
    passage_id: number,
    code: string,
    search_string: string
    language: string
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
        test: {},
        home: {},
        search: {},
        browse: {},
        download: {},
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
        id: "fetch",
        initial: "home",
        context: {
            passage_id: -1,
            code: "none",
            search_string: "none",
            language: "en"
        },
        on: {
            detail: {
                actions: assign({
                    passage_id: (context, event) => event.passage_id
                }),
                target: "detail"
            },
            maps: "maps",
            home: {
                actions: assign({
                    language: (context) => context.language
                }),
                target: "home"
            },
            search: {
                actions: assign({
                    search_string: (context, event) => event.search_string
                }),
                target: "search"
            },
            browse: "browse",
            download: "download",
            commodities: "commodities",
            currencies: "currencies",
            places: "places",
            hist_places: "hist_places",
            names: "names",
            about: {
                actions: assign({
                    language: (context) => context.language
                }),
                target: "about"
            },
            map: {
                actions: assign({
                    code: (context, event) => event.code
                }),
                target: "map"
            },
            test: "test",
            "*": "browse"
        },
        states: {
            fourOhFour: {},
            detail: {},
            map: {},
            maps: {},
            home: {
                on: {
                    SET_LANGUAGE: {
                        actions: assign({
                            language: (context, event) => event.language
                        }),
                        target: "home"
                    }
                }
            },
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
            download: {},
            hist_places: {},
            places: {
                initial: "no_character" as const,
                states: {
                    no_character: {
                        on: {
                            choose_character: "character"
                        }
                    },
                    character: {}
                }

            },
            about: {
                on: {
                    SET_LANGUAGE: {
                        actions: assign({
                            language: (context, event) => event.language
                        }),
                        target: "about"
                    }
                }
            },
            test: {},
            names: {
                initial: "no_character" as const,
                states: {
                    no_character: {
                        on: {
                            choose_character: "character"
                        }
                    },
                    character: {}
                }
            }
        }
    }
);