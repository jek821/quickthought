require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// Import your example routes
const exampleRoutes = require('./routes/example');
app.use('/api', exampleRoutes);

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace to the console
  res.status(500).json({ error: 'Something went wrong!' }); // Send a generic error response
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});