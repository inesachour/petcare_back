import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Gender } from '../../user/enums/gender.enum';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  category: string;
  @Column()
  description: string;
  @Column()
  price: number;
  @Column()
  city: string;
  @ManyToOne(() => User, (owner: User) => owner.id, { onDelete: 'CASCADE' })
  user: User;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
