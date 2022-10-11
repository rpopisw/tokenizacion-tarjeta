import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Commerce {
    @PrimaryGeneratedColumn()
    id?: number

    @Column( { name: "pk_develop" } )
    pkDevelop?: string

    @Column( { name: "pk_test" } )
    pkTest?: string

    @Column( { name: "pk_production" } )
    pkProduction?: string

    @Column( { name: "name" } )
    name?: string

    @Column( { name: "description" } )
    description?: string

    @CreateDateColumn({
      name: 'created_at',
      nullable: false,
      default: () => 'CURRENT_TIMESTAMP(6)',
    })
    createdAt?: string;
  
    @UpdateDateColumn({
      name: 'updated_at',
      nullable: false,
      default: () => 'CURRENT_TIMESTAMP(6)',
      onUpdate: 'CURRENT_TIMESTAMP(6)',
    })
    updatedAt?: Date;

}