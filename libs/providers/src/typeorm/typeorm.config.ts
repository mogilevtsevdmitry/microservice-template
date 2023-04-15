import { Logger } from '@nestjs/common';
import { config } from 'dotenv';
import { join } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';
import { ENTITIES } from '@lib/entities';

config({ path: join(process.cwd(), '.env') });

const options = (): DataSourceOptions => {
    const url = process.env.DATABASE_URL;
    if (!url) {
        Logger.error('DATABASE_URL not setted', 'PROVIDERS [TypeOrm]');
        return;
        // throw new Error('DATABASE_URL not setted');
    }
    return {
        type: 'postgres',
        url,
        schema: 'public',
        entities: ENTITIES,
    };
};

export const appDataSource = new DataSource(options());
