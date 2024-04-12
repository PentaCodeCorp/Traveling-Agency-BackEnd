import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Staff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  surname: string;

  @Column({ nullable: true })
  citizen_id: string;

  @Column({ nullable: true })
  age: number;

  @Column({ nullable: true })
  sex: string;

  @Column({ nullable: true })
  username: string;

  @Column({ nullable: true })
  password: string; // Hashed password by bcrypt

  @Column({ nullable: true })
  login_token: string;
}