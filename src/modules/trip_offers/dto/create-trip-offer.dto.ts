export class CreateTripOfferDto {
    destinationName: string;
    pictureUrl: string;
    departureDate: Date;
    duration: number;
    maxPlaces: number;
    reservedPlaces: number;
    hotelName: string;
    hotelAddress: string;
    tripPlan: string;
    includedServices: string[];
    additionalServices: string[];
    basePrice: number;
    pricePerAdditionalService: number;
    vehicleInformation: string;
  }