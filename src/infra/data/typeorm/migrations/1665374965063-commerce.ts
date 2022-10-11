import { MigrationInterface, QueryRunner } from "typeorm";

export class commerce1665374965063 implements MigrationInterface {
    name = 'commerce1665374965063'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`commerce\` (\`id\` int NOT NULL AUTO_INCREMENT, \`pk_develop\` varchar(255) NOT NULL, \`pk_test\` varchar(255) NOT NULL, \`pk_production\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`commerce\``);
    }

}
