# StudioSpace — Server

StudioSpace Server is the backend API for the StudioSpace application. It manages studio listings, bookings, database operations, and protected API requests.

## Live API
https://studiospace-ms6z.onrender.com

## Health Check
https://studiospace-ms6z.onrender.com/api/health

## Server Repository
https://github.com/Ummeaymanwebdev/StudioSpace-Server

## Features

- RESTful API using Express.js.
- MongoDB database integration.
- Create, read, update, and delete studio listings.
- Studio booking management.
- Retrieve user-specific studio listings.
- Retrieve user-specific bookings.
- Cancel pending bookings.
- Authentication middleware for protected routes.
- Environment-based configuration.
- API health check endpoint.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JavaScript
- JSON Web Token (JWT)
- dotenv

## Installation

Clone the repository:

```bash
git clone https://github.com/Ummeaymanwebdev/StudioSpace-Server.git
```

Go to the project directory:

```bash
cd StudioSpace-Server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the root directory:

```env
PORT=5000
MONGODB_URI=mongodb+srv://umme12ayman_db_user:afiyan.12.ummeayman@cluster0.nsv2my8.mongodb.net/
JWT_SECRET=ad4c2e7fd22c29f2010c39edb23dce20bb2dd2a3e2477a30b1a01eefdb83062e
CLIENT_URL=http://localhost:3000
```

Run the server:

```bash
node index.js
```

The server will run at:

http://localhost:5000

## API Health Check

```text
GET /api/health
```

Expected response:

```json
{
  "ok": true,
  "service": "StudioSpace API"
}
```

## Database Seeding

To insert the sample studio data into MongoDB, run:

```bash
npm run seed
```

## Frontend

https://studiospace-server-eta-two.vercel.app

## Author

Umme Ayman

