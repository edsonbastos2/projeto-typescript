export function inspec(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
){
    const metodoOriginal = descriptor.value
    descriptor.value = function(...args: any[]) {
        console.log(`---- Metodos: ${propertyKey}`);
        console.log(`------ parametros: ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args)
        console.log(`------ retorno: ${JSON.stringify(retorno)}`);
    }
    return descriptor
}