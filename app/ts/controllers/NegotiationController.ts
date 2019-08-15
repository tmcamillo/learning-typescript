import { NegotiationsView, MensagemView } from '../views/index';
import { Negotiation, AllNegotiations, ParcialNegotiation } from '../models/index';
import { logPerformance, domInject, throttle } from '../helpers/decorators/index';
import { NegotiationService } from '../service/index';
import { print } from '../helpers/index';

export class NegotiationController {

    @domInject('#data')
    private _inputDate: JQuery;

    @domInject('#quantidade')
    private _inputAmount: JQuery;

    @domInject('#valor')
    private _inputValue: JQuery;

    private _allnegotiation = new AllNegotiations();
    private _negotiationsview = new NegotiationsView('#negotiationsview');
    private _mensagemview = new MensagemView('#mensagemView');
    private _service = new NegotiationService();

    constructor() {
        this._negotiationsview.update(this._allnegotiation);
    }

    @throttle()
    addInfos() {
        let date = new Date(this._inputDate.val().replace(/-/g, ','))
        if (!this._workingDays(date)) {
            this._mensagemview.update('Somente negociações em dias úteis, por favor')
            return
        }

        const negotiation = new Negotiation(
            date,
            parseInt(this._inputAmount.val()),
            parseFloat(this._inputValue.val())
        );

        this._allnegotiation.addInfos(negotiation);
        this._negotiationsview.update(this._allnegotiation);
        this._mensagemview.update('Negociação adicionada com sucesso!');
        print(negotiation, this._allnegotiation);
    }

    private _workingDays(date: Date) {
        return date.getDay() != WeekDays.Sunday && date.getDay() != WeekDays.Saturday;
    }

    @throttle()
    importData() {

        this._service
            .getNegotiations(res => {
                if (res.ok) return res;
                throw new Error(res.statusText);
            })
            .then(negotiationsToImport => {

                const negotiationsImported = this._allnegotiation.toArray();
                negotiationsToImport.
                    filter(negotiation =>
                        !negotiationsImported.some(importedBefore =>
                            negotiation.isTheSame(importedBefore)))
                    .forEach(negotiation =>
                        this._allnegotiation.addInfos(negotiation));

                this._negotiationsview.update(this._allnegotiation);
            });
    }
}

enum WeekDays {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}   