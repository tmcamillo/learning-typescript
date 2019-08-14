import { Negotiation } from './Negotiation';

export class AllNegotiations {

    private _allnegotiations: Negotiation[] = [];

    addInfos(negotiation: Negotiation): void {

        this._allnegotiations.push(negotiation);
    }

    toArray(): Negotiation[] {

        return ([] as Negotiation[]).concat(this._allnegotiations);
    }

}