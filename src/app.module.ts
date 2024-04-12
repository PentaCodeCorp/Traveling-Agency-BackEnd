import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingsModule } from './modules/bookings/bookings.module'; 
import { StaffModule } from './modules/staff/staff.module';
import { TripOffersModule } from './modules/trip_offers/trip-offers.module';
import { SentEmailsModule } from './modules/sent-emails/sent-emails.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'seemingly-careful-rooster.a1.pgedge.io',
      port: 5432, 
      username: 'app',
      password: 'jz30Fv8735N4f3XRaf5qC7fC',
      database: 'legends_travel',
      ssl: true, // Enable SSL certificate
      extra: {
        ssl: {
          rejectUnauthorized: false, // Disable SSL certificate validation (for development only)
        },
      },
      synchronize: true, // Set to false in production
      autoLoadEntities: true, // Automatically load entity files
    }),
    BookingsModule,
    StaffModule,
    TripOffersModule,
    SentEmailsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
