import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class NoMaterial {
    @PrimaryColumn()
    idNoMaterial: number

    @Column() 
    titulo:string

    @Column()
    autor: string

    @Column()
    categoria: string
}

