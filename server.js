const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files (index.html is at repo root)
app.use(express.static(path.join(__dirname, '/')));

// Simple test endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the Node/Express backend!' });
});

// Example contact endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact request received:', { name, email, message });
  // In a real app you'd validate and store/send this data
  res.json({ status: 'ok', received: { name, email, message } });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
