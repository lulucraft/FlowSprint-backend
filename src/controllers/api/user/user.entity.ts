import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail, IsOptional, IsString } from 'class-validator';
import { Role } from "../role/role.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ nullable: true })
    @IsString()
    @IsOptional()
    firstName?: string;

    @Column({ nullable: true })
    @IsString()
    @IsOptional()
    lastName?: string;

    @Column()
    @IsEmail()
    email!: string;

    @Column()
    password!: string;

    @Column({ default: true })
    isActive!: boolean;

    @OneToMany(() => User, user => user.roles)
    roles?: Role;
}