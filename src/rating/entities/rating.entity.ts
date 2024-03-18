import {
  Entity,
  PrimaryGeneratedColumn,
  Column,  ManyToOne, JoinColumn
} from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { IsInt, Min, Max } from 'class-validator';
import { Material } from 'src/material/entities/material.entity';

@Entity()
export class Rating {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
   @IsInt({ message: 'O rating deve ser um número inteiro.' })
   @Min(0, { message: 'O rating não pode ser menor que 0.' })
   @Max(5, { message: 'O rating não pode ser maior que 5.' })
   rating: number;

  @Column()
  materialId: number;

  @Column()
  userId:number;

  @ManyToOne(() => Material, (material) => material.ratings)
  @JoinColumn({ name: 'materialId' })
  material: Material;

  @ManyToOne(() => User, (user) => user.ratings)
  @JoinColumn({ name: 'userId' })
  user: User;


}
