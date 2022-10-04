import { NegociacaoController } from "./controllers/negociacao-controller.js";
const form = document.querySelector('.form');
const negociacao = new NegociacaoController;
form.addEventListener('submit', event => {
    event.preventDefault();
    negociacao.adicionar();
});
