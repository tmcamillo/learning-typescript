System.register(["../views/index", "../models/index", "../helpers/decorators/index", "../service/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, index_4, NegotiationController, WeekDays;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            }
        ],
        execute: function () {
            alert('oi');
            NegotiationController = class NegotiationController {
                constructor() {
                    this._allnegotiation = new index_2.AllNegotiations();
                    this._negotiationsview = new index_1.NegotiationsView('#negotiationsview');
                    this._mensagemview = new index_1.MensagemView('#mensagemView');
                    this._service = new index_4.NegotiationService();
                    this._negotiationsview.update(this._allnegotiation);
                }
                addInfos() {
                    let date = new Date(this._inputDate.val().replace(/-/g, ','));
                    if (!this._workingDays(date)) {
                        this._mensagemview.update('Somente negociações em dias úteis, por favor');
                        return;
                    }
                    const negotiation = new index_2.Negotiation(date, parseInt(this._inputAmount.val()), parseFloat(this._inputValue.val()));
                    this._allnegotiation.addInfos(negotiation);
                    this._negotiationsview.update(this._allnegotiation);
                    this._mensagemview.update('Negociação adicionada com sucesso!');
                }
                _workingDays(date) {
                    return date.getDay() != WeekDays.Sunday && date.getDay() != WeekDays.Saturday;
                }
                importData() {
                    this._service
                        .getNegotiations(res => {
                        if (res.ok)
                            return res;
                        throw new Error(res.statusText);
                    })
                        .then(allnegotiations => {
                        allnegotiations.forEach(negotiation => this._allnegotiation.addInfos(negotiation));
                        this._negotiationsview.update(this._allnegotiation);
                    });
                }
            };
            __decorate([
                index_3.domInject('#data')
            ], NegotiationController.prototype, "_inputDate", void 0);
            __decorate([
                index_3.domInject('#quantidade')
            ], NegotiationController.prototype, "_inputAmount", void 0);
            __decorate([
                index_3.domInject('#valor')
            ], NegotiationController.prototype, "_inputValue", void 0);
            __decorate([
                index_3.throttle()
            ], NegotiationController.prototype, "addInfos", null);
            __decorate([
                index_3.throttle()
            ], NegotiationController.prototype, "importData", null);
            exports_1("NegotiationController", NegotiationController);
            (function (WeekDays) {
                WeekDays[WeekDays["Sunday"] = 0] = "Sunday";
                WeekDays[WeekDays["Monday"] = 1] = "Monday";
                WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
                WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
                WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
                WeekDays[WeekDays["Friday"] = 5] = "Friday";
                WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
            })(WeekDays || (WeekDays = {}));
        }
    };
});
