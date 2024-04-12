import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TripOffer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  destinationName: string;

  @Column()
  pictureUrl: string;

  @Column()
  departureDate: Date;

  @Column()
  duration: number;

  @Column()
  maxPlaces: number;

  @Column()
  reservedPlaces: number;

  @Column()
  hotelName: string;

  @Column()
  hotelAddress: string;

  @Column()
  tripPlan: string;

  @Column('text', { array: true })
  includedServices: string[];

  @Column('text', { array: true })
  additionalServices: string[];

  @Column()
  basePrice: number;

  @Column()
  pricePerAdditionalService: number;

  @Column()
  vehicleInformation: string;
}
