import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SentEmail } from './entities/sent-email.entity';
import { CreateSentEmailDto } from './dto/create-sent-email.dto';
import { UpdateSentEmailDto } from './dto/update-sent-email.dto';

@Injectable()
export class SentEmailsService {
  constructor(
    @InjectRepository(SentEmail)
    private readonly sentEmailRepository: Repository<SentEmail>,
  ) {}

  async create(createSentEmailDto: CreateSentEmailDto): Promise<SentEmail> {
    const sentEmail = this.sentEmailRepository.create(createSentEmailDto);
    return this.sentEmailRepository.save(sentEmail);
  }

  async findAll(): Promise<SentEmail[]> {
    return this.sentEmailRepository.find();
  }

  async findOne(id: number): Promise<SentEmail> {
    return this.sentEmailRepository.findOne(id);
  }

  async update(id: number, updateSentEmailDto: UpdateSentEmailDto): Promise<SentEmail> {
    const sentEmail = await this.findOne(id);
    if (!sentEmail) {
      throw new Error('Sent email not found');
    }
    Object.assign(sentEmail, updateSentEmailDto);
    return this.sentEmailRepository.save(sentEmail);
  }

  async remove(id: number): Promise<void> {
    await this.sentEmailRepository.delete(id);
  }
}