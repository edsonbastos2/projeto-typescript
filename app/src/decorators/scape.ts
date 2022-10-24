export function scape(
    target: any,
    propertykey: string,
    descriptor: PropertyDescriptor
){
    const metodoOriginal = descriptor.value
    descriptor.value = function(...args: any[]){
        let retorno = metodoOriginal.apply(this, args)

        if(typeof retorno === 'string') {
            // console.log(`@scape em ação na classe: ${this.constructor.name} para o metodo: ${propertykey}`);
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retorno
    }

    return descriptor
}