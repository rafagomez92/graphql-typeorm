// Archivo para generar las tablas 
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity } from 'typeorm'
import { Field, Int, ObjectType } from 'type-graphql'

@ObjectType()
@Entity()
export class Product extends BaseEntity {
    
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;  //siempre agregar el ! para quitar el error de configurar el constructor
    
    @Field(() => String)
    @Column()
    name!: String;
    
    @Field(() => Int)
    @Column("int", { default: 0 })
    quantity!: number;
    
    @Field(() => String)
    @CreateDateColumn({ type: 'timestamp' })
    createdAt!: string;
}