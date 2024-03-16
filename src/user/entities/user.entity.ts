import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { Material } from 'src/material/entities/material.entity';
import { Comment } from 'src/comments/entities/comment.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({unique: true})
  username: string;

  @Column({unique: true})
  email: string;

  @Column()
  password: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataCadastro: Date;

  @Column()
  imgUrl: string;
  
  @Column({default: false})
  status: boolean;
  @OneToMany(() => Material, material => material.user)
  Materiais: Material[];

  @OneToMany(() => Comment, comment => comment.user)
  comments: Comment[];

}
