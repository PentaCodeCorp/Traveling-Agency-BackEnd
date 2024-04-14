import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TripOffersService } from './trip-offers.service';
import { CreateTripOfferDto } from './dto/create-trip-offer.dto';
import { UpdateTripOfferDto } from './dto/update-trip-offer.dto';

@Controller('trip-offers')
export class TripOffersController {
  constructor(private readonly tripOffersService: TripOffersService) {}

  @Post()
  async create(@Body() createTripOfferDto: CreateTripOfferDto) {
    return this.tripOffersService.create(createTripOfferDto);
  }

  @Get()
  async findAll() {
    return this.tripOffersService.findAll();
  }

  @Get('/newest')
  async findNewest() {
    return this.tripOffersService.findNewest();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.tripOffersService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTripOfferDto: UpdateTripOfferDto) {
    return this.tripOffersService.update(+id, updateTripOfferDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.tripOffersService.remove(+id);
  }
}
