import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SentEmail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subject: string;

  @Column()
  to: string;

  @Column()
  cc: string;

  @Column()
  content: string;

  @Column()
  attachments: string;
}