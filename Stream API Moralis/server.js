// index.js (Express backend)
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Mock data (replace with actual data received from the Moralis stream)
const webhookData = [];

app.get('/transactions', (req, res) => {
  res.json(webhookData);
});

app.post('/webhook', (req, res) => {
  // Process your webhook data and add it to the array
  const newData = req.body;
  webhookData.push(newData);

  console.log('Webhook received:', newData);
  res.status(200).json({ message: 'Webhook received successfully' });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
