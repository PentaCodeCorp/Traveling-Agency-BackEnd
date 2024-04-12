import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  offerId: number;

  @Column()
  passengerName: string;

  @Column()
  passengerSurname: string;

  @Column()
  passportNumber: string;

  @Column()
  age: number;

  @Column()
  residentCountry: string;

  @Column()
  sex: string;
}