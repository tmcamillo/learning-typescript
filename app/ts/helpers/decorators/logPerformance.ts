export function logPerformance() {

    return function (target: any, propertKey: string, descriptor: PropertyDescriptor) {

        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {

            console.log('-----------------------')
            console.log(`Parâmetros do método ${propertKey}: ${JSON.stringify(args)}`);

            const t1 = performance.now();
            const retorn = originalMethod.apply(this, args);
            console.log(`Resultado do método: ${JSON.stringify(retorn)}`)
            const t2 = performance.now();


            console.log(`${propertKey} demorou ${t2 - t1} ms`);
            console.log('-----------------------')

            return retorn;
        }
        return descriptor;
    }
}