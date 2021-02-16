require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 3333;

const { getQuote } = require('./services/quote');

app.get('/api/quote', async (req, res) => {
    const theQuote = await getQuote();

    res.send(theQuote);
});

app.listen(port, () => console.log(`Listening on port ${port}`));