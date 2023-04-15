import { ProvidersModule } from '@lib/providers';
import { SharedModule } from '@lib/shared';
import { Module } from '@nestjs/common';
import { ChannelsModule } from './channels/channels.module';
import { DomainsModule } from './domains/domains.module';

@Module({
    imports: [SharedModule, ProvidersModule, ChannelsModule, DomainsModule],
})
export class AppModule {}
