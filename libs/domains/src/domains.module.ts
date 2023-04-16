import { Module } from '@nestjs/common';
import { ConfigDomainModule } from './config-domain';

@Module({
    imports: [ConfigDomainModule],
})
export class DomainsModule {}
