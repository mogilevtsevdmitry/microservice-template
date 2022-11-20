import { config } from 'dotenv';
import { join } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

config({ path: join(process.cwd(), '.env') });

const options = (): DataSourceOptions => {
    const url = process.env.DATABASE_URL;
    if (!url) {
        throw new Error('DATABASE_URL not setted');
    }
    return {
        type: 'postgres',
        url,
        schema: 'public',
        entities: [join(process.cwd(), 'dist', 'libs', 'entities', '**', '*.entity.js')],
        migrations: [join(process.cwd(), 'dist', 'migrations', '*migration.js')],
        migrationsTableName: process.env.MIGRATIONS_TABLE_NAME || 'migrations',
        migrationsRun: true,
    };
};

export const appDataSource = new DataSource(options());
