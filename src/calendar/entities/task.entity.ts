import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TiemstampEntity } from "../../generics/tiemstamp.entity";
import { User } from "../../user/entities/user.entity";
import { JoinColumn } from "typeorm";

@Entity()
export class TaskEntity extends TiemstampEntity  {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  date: Date;
  @Column()
  content: string;
  @ManyToOne(type => User)
  @JoinColumn({referencedColumnName:"id"})
  user: User;
}