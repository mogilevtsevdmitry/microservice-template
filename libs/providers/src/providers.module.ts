import { Module } from '@nestjs/common';
import { AmqpModule } from './amqp';
import { TypeormModule } from './typeorm';

@Module({
    imports: [TypeormModule, AmqpModule],
})
export class ProvidersModule {}
