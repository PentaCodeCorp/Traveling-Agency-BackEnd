import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SentEmailsService } from './sent-emails.service';
import { CreateSentEmailDto } from './dto/create-sent-email.dto';
import { UpdateSentEmailDto } from './dto/update-sent-email.dto';

@Controller('sent-emails')
export class SentEmailsController {
  constructor(private readonly sentEmailsService: SentEmailsService) {}

  @Post()
  async create(@Body() createSentEmailDto: CreateSentEmailDto) {
    return this.sentEmailsService.create(createSentEmailDto);
  }

  @Get()
  async findAll() {
    return this.sentEmailsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.sentEmailsService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateSentEmailDto: UpdateSentEmailDto) {
    return this.sentEmailsService.update(+id, updateSentEmailDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.sentEmailsService.remove(+id);
  }
}