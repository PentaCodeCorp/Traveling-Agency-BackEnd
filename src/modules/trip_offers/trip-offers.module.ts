import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripOffersController } from './trip-offers.controller'; 
import { TripOffersService } from './trip-offers.service'; 
import { TripOffer } from './entities/trip-offer.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TripOffer]),
  ],
  controllers: [TripOffersController],
  providers: [TripOffersService],
})
export class TripOffersModule {}



