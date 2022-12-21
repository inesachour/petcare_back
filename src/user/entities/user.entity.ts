import { TiemstampEntity } from '../../generics/tiemstamp.entity';
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Gender } from '../enums/gender.enum';
import { UserRoleEnum } from '../enums/user-role.enum';

@Entity()
export class User extends TiemstampEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 50, unique: true })
    firstName: string;
    @Column({ length: 50, unique: true })
    lastName: string;
    @Column({ length: 100, unique: true })
    email: string;
    @Column()
    birthDate: Date;
    @Column()
    city: string;
    @Column()
    gender: Gender;
    @Column()
    password: string;
    @Column()
    salt: string;
    @Column()
    role: UserRoleEnum;
}
