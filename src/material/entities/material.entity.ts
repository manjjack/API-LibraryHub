import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,ManyToMany, JoinTable
} from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { Tag } from 'src/tags/entities/tag.entity';

@Entity()
export class Material {
  @PrimaryGeneratedColumn()
  materialId: number;

  @Column()
  titulo: string;

  @Column()
  descricao: string;

  @Column()
  autor: string;

  @Column()
  categoria: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataUpload: Date;

  @Column()
  userId: number;

  @Column({ type: 'longblob', nullable: true })
  arquivo: Buffer;

  @Column({ nullable: true })
  urlArquivo: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'UserId' })
  user: User;

  @OneToMany(() => Comment, (comment) => comment.material)
  comments: Comment[];

  @ManyToMany(() => Tag, (tag) => tag.nome)
  @JoinTable({ name: 'tag' })
  tag: Tag[];
}
