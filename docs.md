# Project Directory Structure

## Backend

This directory contains all the backend-related code and configurations.

- **controllers/** - Houses controller logic for handling requests and responses.
- **migrations/** - Contains database migration files for schema changes.
- **models/** - Contains functions that interact with the database, such as queries for fetching, inserting, updating, and deleting data.
- **routes/** - Defines API endpoint routes and request handling.
- **seeds/** - Includes seed files for populating the database with initial data.
- **utils/** - Utility functions and helper modules for the backend.

## Frontend

This directory contains the frontend code for the application.

- **public/** - Static assets and public-facing files.
- **src/** - Main source directory for frontend components and logic.
  - **api/** - Handles API request logic and client-side communication with the backend.
  - **assets/** - Stores images, styles, and other static assets.
  - **components/** - Reusable Vue components used throughout the application.
  - **services/** - Contains business logic, data-fetching, and other utilities.
  - **views/** - Vue pages and view components for different routes in the app.
