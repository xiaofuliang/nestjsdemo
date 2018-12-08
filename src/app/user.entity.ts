import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 50, unique: true })
    loginid: string;
    @Column({ length: 200 })
    password: string;
    @Column()
    createtime: Date;
    @Column()
    lastlogintime: Date;

}