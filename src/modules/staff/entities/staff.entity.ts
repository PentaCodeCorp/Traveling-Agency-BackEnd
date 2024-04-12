import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Staff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  citizenId: string;

  @Column()
  age: number;

  @Column()
  sex: string;

  @Column()
  username: string;

  @Column()
  password: string; // Hashed password by bcrypt

  @Column()
  loginToken: string;
}