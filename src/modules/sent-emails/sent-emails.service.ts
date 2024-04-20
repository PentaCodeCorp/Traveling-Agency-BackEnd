import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SentEmail } from './entities/sent-email.entity';
import { CreateSentEmailDto } from './dto/create-sent-email.dto';
import { UpdateSentEmailDto } from './dto/update-sent-email.dto';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class SentEmailsService {

  private transporter;

  constructor(
    @InjectRepository(SentEmail)
    private readonly sentEmailRepository: Repository<SentEmail>,
    private readonly configService: ConfigService,
  ) {
    // Set up nodemailer transporter
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        user: this.configService.get<string>('GMAIL_USER'),
        pass: this.configService.get<string>('GMAIL_PASSWORD'),
      },
    });
  }

  async create(createSentEmailDto: CreateSentEmailDto): Promise<SentEmail> {
    const sentEmail = this.sentEmailRepository.create(createSentEmailDto);

    // Send email using nodemailer
    const mailOptions = {
      from: this.configService.get<string>('GMAIL_USER'),
      to: sentEmail.to,
      subject: sentEmail.subject,
      text: sentEmail.content,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      return this.sentEmailRepository.save(sentEmail);
    } catch (error) {
      // Handle error
      throw new Error('Failed to send email: ' + error);
    }
  }

  async findAll(): Promise<SentEmail[]> {
    return this.sentEmailRepository.find();
  }

  async findOne(id: number): Promise<SentEmail> {
    return this.sentEmailRepository.findOneBy({id: id});
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