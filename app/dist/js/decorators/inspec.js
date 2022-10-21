export function inspec(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`---- Metodos: ${propertyKey}`);
        console.log(`------ parametros: ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`------ retorno: ${JSON.stringify(retorno)}`);
    };
    return descriptor;
}
