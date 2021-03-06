System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AllNegotiations;
    return {
        setters: [],
        execute: function () {
            AllNegotiations = class AllNegotiations {
                constructor() {
                    this._allnegotiations = [];
                }
                addInfos(negotiation) {
                    this._allnegotiations.push(negotiation);
                }
                toArray() {
                    return [].concat(this._allnegotiations);
                }
                toTxt() {
                    console.log('-- paraTexto --');
                    console.log(JSON.stringify(this._allnegotiations));
                }
                isTheSame(negotiations) {
                    return JSON.stringify(this._allnegotiations) == JSON.stringify(negotiations.toTxt());
                }
            };
            exports_1("AllNegotiations", AllNegotiations);
        }
    };
});
