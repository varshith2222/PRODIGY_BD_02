const express = require('express');
const connectDB = require('./config/database');

// Initialize Express
const app = express();

// Connect to Database
connectDB();

// Middleware for parsing JSON
app.use(express.json());

// Define Routes
app.use('/api/users', require('./routes/users'));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
