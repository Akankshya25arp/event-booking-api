#  Event Booking API

A RESTful API for event booking, built with Node.js, Express, MongoDB, and JWT.

## Live API

**Base URL:**  
https://event-booking-api-3hzv.onrender.com

##  Auth Routes

| Method | Endpoint              | Description       |
|--------|-----------------------|-------------------|
| POST   | `/api/auth/register`  | Register a user   |
| POST   | `/api/auth/login`     | Login and get JWT |

##  Events Routes

| Method | Endpoint            | Description           |
|--------|---------------------|-----------------------|
| GET    | `/api/events`       | Get all events        |
| POST   | `/api/events`       | Create event (admin)  |
| PUT    | `/api/events/:id`   | Update event (admin)  |
| DELETE | `/api/events/:id`   | Delete event (admin)  |

## Booking Routes

| Method | Endpoint                   | Description              |
|--------|----------------------------|--------------------------|
| POST   | `/api/bookings/:eventId`   | Book an event (user)     |
| GET    | `/api/bookings`            | View my bookings (user)  |
| DELETE | `/api/bookings/:bookingId` | Cancel booking (user)    |

##  Tech Stack

- Node.js
- Express
- MongoDB Atlas
- JWT Authentication
- Mongoose

