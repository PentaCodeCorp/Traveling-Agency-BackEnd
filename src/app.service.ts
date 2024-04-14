import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Legends travel backend<br/>'
      + '                                                                              <br/>'
      + '/trip-offers<br/>'
      + 'POST /trip-offers: Creates a new trip offer.									<br/>'
      + 'GET /trip-offers: Retrieves all trip offers.                                  <br/>'
      + 'GET /trip-offers/newest: Retrieves the newest trip offers.                    <br/>'
      + 'GET /trip-offers/:id: Retrieves a specific trip offer by its ID.              <br/>'
      + 'PUT /trip-offers/:id: Updates a specific trip offer by its ID.                <br/>'
      + 'DELETE /trip-offers/:id: Deletes a specific trip offer by its ID.             <br/>'
      + '/staff                                                              <br/>'
      + '                                                                              <br/>'
      + 'POST /staff: Creates a new staff member.                                      <br/>'
      + 'GET /staff: Retrieves all staff members.                                      <br/>'
      + 'GET /staff/:id: Retrieves a specific staff member by its ID.                  <br/>'
      + 'PUT /staff/:id: Updates a specific staff member by its ID.                    <br/>'
      + 'DELETE /staff/:id: Deletes a specific staff member by its ID.                 <br/>'
      + '/sent-emails                                                         <br/>'
      + '                                                                              <br/>'
      + 'POST /sent-emails: Creates a new sent email record.                           <br/>'
      + 'GET /sent-emails: Retrieves all sent email records.                           <br/>'
      + 'GET /sent-emails/:id: Retrieves a specific sent email record by its ID.       <br/>'
      + 'PUT /sent-emails/:id: Updates a specific sent email record by its ID.         <br/>'
      + 'DELETE /sent-emails/:id: Deletes a specific sent email record by its ID.      <br/>'
      + '/bookings                                                           <br/>'
      + '                                                                              <br/>'
      + 'POST /bookings: Creates a new booking.                                        <br/>'
      + 'GET /bookings: Retrieves all bookings.                                        <br/>'
      + 'GET /bookings/:id: Retrieves a specific booking by its ID.                    <br/>'
      + 'PUT /bookings/:id: Updates a specific booking by its ID.                      <br/>'
      + 'DELETE /bookings/:id: Deletes a specific booking by its ID.                 <br/>'
      + '                                                                              <br/>'
      + 'example body for POST bookings											<br/>'
      + '{                                                                         <br/>'
      + '  "offerId": 123,                                                         <br/>'
      + '  "passengerName": "John",                                                <br/>'
      + '  "passengerSurname": "Doe",                                              <br/>'
      + '  "passportNumber": "AB123456",                                           <br/>'
      + '  "age": 30,                                                              <br/>'
      + '  "residentCountry": "USA",                                               <br/>'
      + '  "sex": "Male",                                                          <br/>'
      + '  "tripDate": "2024-05-01",                                               <br/>'
      + '  "tripDuration": 7                                                       <br/>'
      + '}                                                                         <br/>'
      + '                                                                          <br/>'
      + 'example body for POST /sent-emails                                        <br/>'
      + '{                                                                         <br/>'
      + '  "subject": "Hello",                                                     <br/>'
      + '  "to": "recipient@example.com",                                          <br/>'
      + '  "cc": "cc@example.com",                                                 <br/>'
      + '  "content": "This is a test email.",                                     <br/>'
      + '  "attachments": "attachment_url"                                         <br/>'
      + '}                                                                         <br/>'
      + '                                                                          <br/>'
      + 'example body for POST /staff                                              <br/>'
      + '{                                                                         <br/>'
      + '  "name": "Alice",                                                        <br/>'
      + '  "surname": "Smith",                                                     <br/>'
      + '  "citizen_id": "AB123456",                                               <br/>'
      + '  "age": 35,                                                              <br/>'
      + '  "sex": "Female",                                                        <br/>'
      + '  "username": "alice_smith",                                              <br/>'
      + '  "password": "password123"                                               <br/>'
      + '}                                                                         <br/>'
      + '                                                                          <br/>'
      + 'example body for POST /trip-offers                                        <br/>'
      + '{                                                                         <br/>'
      + '  "destinationName": "Paris",                                             <br/>'
      + '  "pictureUrl": "https://example.com/paris.jpg",                          <br/>'
      + '  "departureDate": "2024-05-01",                                          <br/>'
      + '  "duration": 7,                                                          <br/>'
      + '  "maxPlaces": 50,                                                        <br/>'
      + '  "reservedPlaces": 10,                                                   <br/>'
      + '  "hotelName": "Grand Hotel",                                             <br/>'
      + '  "hotelAddress": "123 Avenue des Champs-Élysées, Paris",                 <br/>'
      + '  "tripPlan": "Sightseeing and cultural activities",                      <br/>'
      + '  "includedServices": ["Breakfast", "Airport transfers"],                 <br/>'
      + '  "additionalServices": ["Spa", "Excursions"],                            <br/>'
      + '  "basePrice": 1000,                                                      <br/>'
      + '  "pricePerAdditionalService": 50,                                        <br/>'
      + '  "vehicleInformation": "Luxury Bus"                                      <br/>'
      + '}                                                                         <br/>'
      + '                                                                          <br/>'
      + 'example body PUT bookings                                                 <br/>'
      + '{                                                                         <br/>'
      + '  "passengerName": "Jane",                                                <br/>'
      + '  "age": 40,                                                              <br/>'
      + '  "residentCountry": "Canada"                                             <br/>'
      + '}                                                                         <br/>'
      + '                                                                          <br/>'
      + 'example body PUT sent-emails                                              <br/>'
      + '{                                                                         <br/>'
      + '  "subject": "Updated Subject",                                           <br/>'
      + '  "content": "This is the updated content of the email."                  <br/>'
      + '}                                                                         <br/>'
      + '                                                                          <br/>'
      + 'example body PUT staff                                                    <br/>'
      + '{                                                                         <br/>'
      + '  "name": "Updated Name",                                                 <br/>'
      + '  "surname": "Updated Surname",                                           <br/>'
      + '  "age": 40,                                                              <br/>'
      + '  "username": "updated_username"                                          <br/>'
      + '}                                                                         <br/>'
      + '                                                                          <br/>'
      + '                                                                          <br/>'
      + 'example body PUT trip-offers                                              <br/>'
      + '{                                                                         <br/>'
      + '  "destinationName": "Updated Destination",                               <br/>'
      + '  "duration": 10,                                                         <br/>'
      + '  "maxPlaces": 60,                                                        <br/>'
      + '  "tripPlan": "Updated trip plan details",                                <br/>'
      + '  "includedServices": ["Updated Breakfast", "Updated Airport transfers"], <br/>'
      + '  "additionalServices": ["Updated Spa", "Updated Excursions"],            <br/>'
      + '  "basePrice": 1200,                                                      <br/>'
      + '  "pricePerAdditionalService": 60                                         <br/>'
      + '}                                                                         <br/>'
      ;
  }
}
