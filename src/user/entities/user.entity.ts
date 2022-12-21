import { TiemstampEntity } from '../../generics/tiemstamp.entity';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Gender } from '../enums/gender.enum';
import { UserRoleEnum } from '../enums/user-role.enum';
import * as bcrypt from 'bcrypt';


@Entity()
export class User extends TiemstampEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 50})
    firstName: string;
    @Column({ length: 50})
    lastName: string;
    @Column({ length: 100, unique: true })
    email: string;
    @Column()
    birthDate: Date;
    @Column()
    city: string;
    @Column({
        type: 'enum',
        enum: Gender,
        default: Gender.male,
    })
    gender: Gender;

    @Column({
        type: 'enum',
        enum: UserRoleEnum,
        default: UserRoleEnum.petOwner,
    }
    )
    role: UserRoleEnum;

    @Column({ select: false })
    password: string;
    @Column({ select: false, nullable: true, name: 'refresh_token' })
    refreshToken: string;



    @BeforeInsert()
    async hashPassword() {
        if (this.password) {
            this.password = await bcrypt.hash(this.password, 10);
        }
    }
}
