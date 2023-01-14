import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from '../../user/entities/user.entity';
import { Gender } from '../../user/enums/gender.enum';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  type: string;
  @Column()
  name: string;
  @Column()
  breed: string;
  @Column()
  birthDate: Date;
  @Column()
  gender: Gender;
  @Column({ nullable: true })
  weight: number;
  @ManyToOne(() => User, (owner: User) => owner.id)
  owner: User;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
