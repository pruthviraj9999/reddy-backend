const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000; // Render pe deploy karte waqt yeh default port ho sakta hai

// Middleware
app.use(cors());  // CORS enable kar raha hai, taaki frontend se request bheji ja sake
app.use(express.json());  // Incoming JSON request body ko parse karne ke liye

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to Reddy Panel API');
});

// Mock Database for users (This is temporary; real data should be stored in a database)
let users = [
  { id: 1, username: 'admin', coins: 100 },
  { id: 2, username: 'john', coins: 50 },
];

// Users route to get all users
app.get('/users', (req, res) => {
  res.json(users);  // Yeh sab users ko return karega
});

// Create a new user
app.post('/users', (req, res) => {
  const { username, password, coins } = req.body;  // Client se aane wala data

  // Basic validation for missing fields
  if (!username || !password || coins == undefined) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // New user object
  const newUser = {
    id: users.length + 1,  // Simple increment to generate a unique ID
    username,
    coins,
  };

  // Add new user to the mock users list
  users.push(newUser);

  res.status(201).json(newUser);  // Return newly created user
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
