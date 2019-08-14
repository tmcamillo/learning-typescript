System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logPerformance() {
        return function (target, propertKey, descriptor) {
            const originalMethod = descriptor.value;
            descriptor.value = function (...args) {
                console.log('-----------------------');
                console.log(`Parâmetros do método ${propertKey}: ${JSON.stringify(args)}`);
                const t1 = performance.now();
                const retorn = originalMethod.apply(this, args);
                console.log(`Resultado do método: ${JSON.stringify(retorn)}`);
                const t2 = performance.now();
                console.log(`${propertKey} demorou ${t2 - t1} ms`);
                console.log('-----------------------');
                return retorn;
            };
            return descriptor;
        };
    }
    exports_1("logPerformance", logPerformance);
    return {
        setters: [],
        execute: function () {
        }
    };
});
