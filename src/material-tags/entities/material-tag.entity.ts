import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { Material } from 'src/material/entities/material.entity';
import { Tag } from 'src/tags/entities/tag.entity';
@Entity()
export class MaterialTag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  materialId: number;

  @ManyToOne(() => Material, (material) => material.tag)
  @JoinColumn({ name: 'materialId' })
  material: Material;

  @Column()
  tagId: number;

  @ManyToOne(() => Tag, (tag) => tag.material)
  @JoinColumn({ name: 'tagId' })
  tag : Tag;
}
