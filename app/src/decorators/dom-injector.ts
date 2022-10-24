export function domInjector(seletor:string) {

    return function(target:any, propertkey: string) {
        console.log(`Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertkey}`);

        let elemento: HTMLElement | null = null

        const getter = function() {
            if(!elemento) {
                elemento = document.querySelector(seletor)
                console.log(`buscando elemento do DOM com o seletor ${seletor} para injetar em  ${propertkey}`);
            }
            return elemento
        }
        
        Object.defineProperty(
            target,
            propertkey,
            { get: getter}
        )
    }
}