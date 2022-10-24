export function domInjector(seletor) {
    return function (target, propertkey) {
        console.log(`Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertkey}`);
        let elemento = null;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`buscando elemento do DOM com o seletor ${seletor} para injetar em  ${propertkey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertkey, { get: getter });
    };
}
