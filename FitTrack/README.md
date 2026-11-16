FitTrack Pro
FitTrack Pro is a full-stack fitness tracking application that allows users to register, authenticate, and track workouts. The application was developed using the MERN architecture with a React frontend, Express backend, MongoDB Atlas database, and JWT-based authentication.

Features
User Registration
Create a new account with name, email, and password
Passwords are securely hashed using bcrypt
User data is stored in MongoDB Atlas
User Authentication
Login using registered credentials
JWT token generation and validation
Protected routes for authenticated users
Logout functionality
Workout Tracking
Create workouts with:
Exercise Type
Duration
Workout Date
Store workouts in MongoDB Atlas
Display workout history
Filter workout history by authenticated user
Dashboard
Personalized greeting
Displays total workout count for the logged-in user
Technology Stack
Frontend
React
React Router
Vite
CSS
Backend
Node.js
Express
Database
MongoDB Atlas
Mongoose
Authentication
JSON Web Token (JWT)
bcryptjs
Testing
Vitest
React Testing Library
Project Structure
FitTrackPro
├── FitTrack
│   ├── src
│   ├── public
│   └── package.json
│
└── FitTrackBackend
    ├── config
    ├── controllers
    ├── models
    ├── routes
    └── package.json
User Stories Completed
US-1 User Registration
User registration form
Account creation
Password hashing
MongoDB persistence
US-2 Authentication
Login functionality
JWT generation
Protected routes
Logout capability
US-3 Workout Tracking
Create workouts
View workout history
Store workouts in MongoDB
Display user-specific workout history
Unit Tests
Basic rendering tests were created for:

Login Page
Register Page
Add Workout Page
Workout History Page
Installation
Frontend
cd FitTrack
npm install
npm run dev
Backend
cd FitTrackBackend
npm install
npm run dev
Environment Variables
Backend (.env)
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Build
npm run build
Deployment
Frontend deployed using Vercel.

Author
Jacob Cogdell