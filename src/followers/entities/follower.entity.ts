import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Follower {
  @PrimaryColumn()
  id: number;

  @Column()
  idUser: number;

  @Column()
  idFollower: number;

  
}
