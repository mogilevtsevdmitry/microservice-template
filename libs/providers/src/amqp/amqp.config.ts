import { RabbitMQConfig, RabbitMQExchangeConfig } from '@golevelup/nestjs-rabbitmq';
import { ConfigService } from '@nestjs/config';

const AMQP_EXCHANGES: RabbitMQExchangeConfig[] = [];

export const amqpConfig = (configService: ConfigService): RabbitMQConfig => {
    const connectionString = configService.get<string>('AMQP_URI');
    if (!connectionString) {
        throw new Error('ENV: "AMQP_URI" not found. Check ".env" file or server variables.');
    }
    return {
        exchanges: AMQP_EXCHANGES,
        uri: connectionString,
        connectionInitOptions: { wait: false },
        connectionManagerOptions: {
            heartbeatIntervalInSeconds: 15,
            reconnectTimeInSeconds: 30,
        },
    };
};
