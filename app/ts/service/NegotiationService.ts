import { ParcialNegotiation, Negotiation } from '../models/index';

export class NegotiationService {

    getNegotiations(handler: HandlerFunction): Promise<Negotiation[]> {

        return fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: ParcialNegotiation[]) =>
                dados
                    .map(dado => new Negotiation(new Date(), dado.vezes, dado.montante))
            )
            .catch(err => { throw err.message });

    }
}

export interface HandlerFunction {

    (res: Response): Response
}