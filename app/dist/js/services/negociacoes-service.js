import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    obterNegociacoesDodia() {
        const http = 'http://localhost:8080/dados';
        return fetch(http)
            .then(resp => resp.json())
            .then((dados) => {
            return dados.map(dado => {
                return new Negociacao(new Date(), dado.vezes, dado.montante);
            });
        });
    }
}
