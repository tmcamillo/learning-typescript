import { Negotiation } from './Negotiation';
import { MyObject } from './MyObject';

export class AllNegotiations implements MyObject<AllNegotiations> {

    private _allnegotiations: Negotiation[] = [];

    addInfos(negotiation: Negotiation): void {

        this._allnegotiations.push(negotiation);
    }

    toArray(): Negotiation[] {

        return ([] as Negotiation[]).concat(this._allnegotiations);
    }

    toTxt(): void {

        console.log('-- paraTexto --');
        console.log(JSON.stringify(this._allnegotiations));
    }

    isTheSame(negotiations: AllNegotiations): boolean {

        return JSON.stringify(this._allnegotiations) == JSON.stringify(negotiations.toTxt());
    }

}