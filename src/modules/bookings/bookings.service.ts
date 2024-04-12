import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './entities/booking.entity';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>,
  ) {}

  async create(createBookingDto: CreateBookingDto): Promise<Booking> {
    const booking = this.bookingRepository.create(createBookingDto);
    return this.bookingRepository.save(booking);
  }

  async findAll(): Promise<Booking[]> {
    return this.bookingRepository.find();
  }

  async findOne(id: number): Promise<Booking> {
    return this.bookingRepository.findOne(id);
  }

  async update(id: number, updateBookingDto: UpdateBookingDto): Promise<Booking> {
    const booking = await this.findOne(id);
    if (!booking) {
      throw new Error('Booking not found');
    }
    Object.assign(booking, updateBookingDto);
    return this.bookingRepository.save(booking);
  }

  async remove(id: number): Promise<void> {
    await this.bookingRepository.delete(id);
  }
}