export class MesagemView {
    constructor(seletor) {
        this.seletor = document.querySelector(seletor);
    }
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
    update(model) {
        this.seletor.innerHTML = this.template(model);
    }
}
