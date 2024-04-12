import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TripOffer } from './entities/trip-offer.entity';
import { CreateTripOfferDto } from './dto/create-trip-offer.dto';
import { UpdateTripOfferDto } from './dto/update-trip-offer.dto';

@Injectable()
export class TripOffersService {
  constructor(
    @InjectRepository(TripOffer)
    private readonly tripOfferRepository: Repository<TripOffer>,
  ) {}

  async create(createTripOfferDto: CreateTripOfferDto): Promise<TripOffer> {
    const tripOffer = this.tripOfferRepository.create(createTripOfferDto);
    return this.tripOfferRepository.save(tripOffer);
  }

  async findAll(): Promise<TripOffer[]> {
    return this.tripOfferRepository.find();
  }

  async findOne(id: number): Promise<TripOffer> {
    return this.tripOfferRepository.findOneBy({id: id});
  }

  async update(id: number, updateTripOfferDto: UpdateTripOfferDto): Promise<TripOffer> {
    const tripOffer = await this.findOne(id);
    if (!tripOffer) {
      throw new Error('Trip offer not found');
    }
    Object.assign(tripOffer, updateTripOfferDto);
    return this.tripOfferRepository.save(tripOffer);
  }

  async remove(id: number): Promise<void> {
    await this.tripOfferRepository.delete(id);
  }
}