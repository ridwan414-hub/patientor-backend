# Patientor Backend

This is the backend for the Patientor application, a medical record system for doctors.

## Running the Application

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

   The server will start on port 3001.

3. For production, build the project and start the server:
   ```
   npm run tsc
   npm start
   ```

## Folder Structure

```
patientor-backend/
├── build/                 # Compiled JavaScript files
├── data/                  # Mock data for patients and diagnoses
├── src/
│   ├── middlewares/       # Custom middleware functions
│   ├── routes/            # API route handlers
│   ├── services/          # Business logic and data access
│   └── utils/             # Utility functions and type guards
├── types.ts               # TypeScript type definitions
├── index.ts               # Main application entry point
├── tsconfig.json          # TypeScript configuration
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```

### Folder Intentions:

- `build/`: Contains the compiled JavaScript files for production.
- `data/`: Stores mock data for patients and diagnoses.
- `src/`: Contains the main source code for the application.
  - `middlewares/`: Custom middleware functions, such as error handling.
  - `routes/`: API route handlers for different endpoints.
  - `services/`: Business logic and data access layer.
  - `utils/`: Utility functions, including type guards and data validation.
- `types.ts`: Centralized type definitions used throughout the application.
- `index.ts`: The main entry point for the application.

## API Endpoints

### GET /api/ping
Health check endpoint.

### GET /api/diagnoses
Retrieve all diagnoses.

### GET /api/patients
Retrieve all patients (non-sensitive data).

### POST /api/patients
Add a new patient.

Request body:
json
{
"name": "John Doe",
"dateOfBirth": "1990-07-31",
"ssn": "250470-555L",
"gender": "male",
"occupation": "Software Developer"
}

### GET /api/patients/:id
Retrieve a specific patient by ID.

### POST /api/patients/:id/entries
Add a new entry to a patient's medical record.

Request body (example for a HealthCheck entry):
json
{
  "type": "HealthCheck",
  "description": "Annual check-up",
  "date": "2023-04-15",
  "specialist": "Dr. House",
  "healthCheckRating": 0
}

Note: The request body varies based on the entry type (HealthCheck, Hospital, or OccupationalHealthcare).