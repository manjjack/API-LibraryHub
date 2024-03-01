import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { Material } from 'src/material/entities/material.entity';
import { Comment } from 'src/comments/entities/comment.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  dataCadastro: Date;

  @Column()
  imgUrl: string;
  
  @OneToMany(() => Material, material => material.user)
  Materiais: Material[];

  @OneToMany(() => Comment, comment => comment.user)
  comments: Comment[];

}
