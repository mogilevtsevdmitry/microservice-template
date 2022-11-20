import { RabbitHandlerConfig, RABBIT_HANDLER } from '@golevelup/nestjs-rabbitmq';
import { applyDecorators, SetMetadata } from '@nestjs/common';
import { QueueDeclaration } from '../interfaces';

const getConfigFromExchange = <C extends Pick<QueueDeclaration, Exclude<keyof QueueDeclaration, keyof C>>>(contract: { queue: QueueDeclaration }): Partial<RabbitHandlerConfig> => {
    const { queue: { exchange, queue, routingKey, queueOptions } } = contract;
    return {
        type: 'rpc',
        exchange: exchange.name,
        routingKey,
        queue,
        queueOptions,
    };
};

const makeRabbitRPCDecorator = <T extends { queue: QueueDeclaration }>() => (input: T) => applyDecorators(SetMetadata(RABBIT_HANDLER, { ...input, ...getConfigFromExchange(input) }));

export const RPC = makeRabbitRPCDecorator();
