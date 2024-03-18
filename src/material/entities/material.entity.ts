import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
  JoinTable
} from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { Tag } from 'src/tags/entities/tag.entity';
import { Rating } from 'src/rating/entities/rating.entity';
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

  @Column()
  rating : number;

  @Column({ nullable: true })
  urlArquivo: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' }) 
  user: User;

  @OneToMany(() => Comment, (comment) => comment.material)
  comments: Comment[];
  
  @OneToMany(() => Rating, rating => rating.material)
  ratings: Rating[];

  @ManyToMany(() => Tag)
  @JoinTable({
    name: 'material_tags',
    joinColumn: {
      name: 'materialId',
      referencedColumnName: 'materialId'
    },
    inverseJoinColumn: {
      name: 'id',
      referencedColumnName: 'id'
    }
  })
  tag: Tag[]; 
}
