/* eslint-disable @typescript-eslint/ban-types */
import { Logger as NestjsLogger } from '@nestjs/common';

export function Logger(): ClassDecorator {
    return function (target: Function) {
        if (['production', 'prod'].includes(String(process.env.NODE_ENV))) {
            return;
        }
        const logger = new NestjsLogger(target.name);
        const originalMethod = target.prototype.constructor;

        for (const propertyKey of Object.getOwnPropertyNames(originalMethod.prototype)) {
            if (propertyKey === 'constructor') {
                continue;
            }
            const original = originalMethod.prototype[propertyKey];

            originalMethod.prototype[propertyKey] = function (...args: any[]) {
                logger.debug(`[${propertyKey}]-[Input data]: ${JSON.stringify(args)}`);
                const result = original.apply(this, args);
                logger.debug(`[${propertyKey}]-[Output data]: ${JSON.stringify(result)}`);
                return result;
            };
        }
    };
}
