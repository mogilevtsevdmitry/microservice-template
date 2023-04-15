import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('config')
export class ConfigEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    ident: string;

    @Column()
    description: string;

    @Column('jsonb')
    config: Record<string, unknown>;

    @Column({ name: 'created_at' })
    createdAt: string;

    @Column({ name: 'updated_at' })
    updatedAt: string;
}
