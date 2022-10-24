import { NegociacaoDeHoje } from "../interfaces/negociacaoDeHoje";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {

    public obterNegociacoesDodia(): Promise<Negociacao[]> {
        const http = 'http://localhost:8080/dados'
        return fetch(http)
            .then( resp => resp.json())
            .then((dados: NegociacaoDeHoje[]) => {
                return dados.map(dado => {
                    return new Negociacao(new Date(), dado.vezes, dado.montante)
                })
            })
    }
}