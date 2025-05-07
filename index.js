// index.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// ✅ Enable CORS for frontend to access backend
app.use(cors());

// ✅ Root route
app.get('/', (req, res) => {
  res.send('Welcome to Reddy Panel API');
});

// ✅ Transactions route
app.get('/transactions', (req, res) => {
  const transactions = [
    { id: 1, amount: 100, date: '2025-05-01' },
    { id: 2, amount: 250, date: '2025-05-03' },
  ];
  res.json(transactions);
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
