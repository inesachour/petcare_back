import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Service } from '../../service_provider/entities/service.entity';

@Entity()
export class ServiceRequest {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  date: Date;
  @Column()
  address: string;
  @Column()
  phone: number;
  @Column({ default: 'pending' })
  status: string;
  @Column()
  animalType: string;
  @ManyToOne(() => User, (user: User) => user.id, {
    onDelete: 'CASCADE',
    eager: true,
  })
  provider: User;
  @ManyToOne(() => User, (user: User) => user.id, {
    onDelete: 'CASCADE',
    eager: true,
  })
  petOwner: User;
  @ManyToOne(() => Service, (service: Service) => service.id, {
    onDelete: 'CASCADE',
    eager: true,
  })
  service: Service;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
