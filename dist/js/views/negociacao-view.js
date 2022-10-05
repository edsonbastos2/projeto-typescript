export class NegociacaoView {
    constructor(seletor) {
        this.seletor = document.querySelector(seletor);
    }
    template(model) {
        return `
                <table class="table table-hove table-bordered">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${model.listar().map(negociacao => {
            return `
                                <tr>
                                    <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                                    <td>${negociacao.quantidade}</td>
                                    <td>${negociacao.valor}</td>
                                </tr>
                            `;
        })}
                    </tbody>
                </table>
            `;
    }
    update(model) {
        this.seletor.innerHTML = this.template(model);
    }
}
