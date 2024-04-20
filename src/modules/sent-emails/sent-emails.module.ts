import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'; 
import { SentEmailsController } from './sent-emails.controller'; 
import { SentEmailsService } from './sent-emails.service';
import { SentEmail } from './entities/sent-email.entity'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([SentEmail]),
    ConfigModule.forRoot(), 
  ],
  controllers: [SentEmailsController], 
  providers: [SentEmailsService], 
})
export class SentEmailsModule {}
