const express = require('express');
const app = express();
const PORT = 3000;

app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: "iPhone 15", price: 80000 },
    { id: 2, name: "Shoes", price: 2000 }
  ]);
});

app.get('/health', (req, res) => {
  res.send("OK");
});

app.get('/load', (req, res) => {
  let total = 0;
  for (let i = 0; i < 1e7; i++) {
    total += i;
  }
  res.send("Load generated " + total);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});