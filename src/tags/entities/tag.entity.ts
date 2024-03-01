import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Material } from 'src/material/entities/material.entity';

@Entity()
export class Tag{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToMany(() => Material, material => material.tag)
  material: Material[];

}