
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Material } from 'src/material/entities/material.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  commentId: number;

  @Column()
  content: string;

  @Column({ type: 'datetime' })
  dateTime: Date;

  @ManyToOne(() => User, user => user.comments)
  user: number;

  @ManyToOne(() => Material, material => material.comments)
  material: number;
}