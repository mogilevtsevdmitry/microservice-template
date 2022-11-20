import { QueueOptions } from '@golevelup/nestjs-rabbitmq';

/**
 * Описание очереди
 */
export interface QueueDeclaration {
    exchange: RabbitMQExchangeConfig;
    routingKey: string;
    queue: string;
    queueOptions?: QueueOptions;
}

/**
 * Параметры Exchange
 */
export interface RabbitMQExchangeConfig {
    name: string;
    type?: 'topic' | 'direct' | 'fanout';
    options?: AssertExchange;
}

/**
 * Опции Exchange
 */
interface AssertExchange {
    durable?: boolean;
    internal?: boolean;
    autoDelete?: boolean;
    alternateExchange?: string;
    arguments?: unknown | unknown[];
}
