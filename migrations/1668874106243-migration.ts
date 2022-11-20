import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1668874106243 implements MigrationInterface {
    name = 'migration1668874106243'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "config" ("id" integer NOT NULL, "ident" character varying NOT NULL, "description" character varying NOT NULL, "config" jsonb NOT NULL, "created_at" character varying NOT NULL, "updated_at" character varying NOT NULL, CONSTRAINT "PK_d0ee79a681413d50b0a4f98cf7b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "config"`);
    }

}
