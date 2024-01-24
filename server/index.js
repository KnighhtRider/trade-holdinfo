const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
var cors = require('cors')

const app = express(); 
const PORT = 5000;


// const corsOptions = {
//   origin: 'https://trade-holdinfo.vercel.app',
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

 
app.use(cors())

const mongoURL = 'mongodb+srv://vivekthakur6259:vivek123456@trade-center.lhlmgow.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURL);


const tradeSchema = new mongoose.Schema({
  name: String,
  last: String,
  buy: String,
  sell: String,
  volume: String,
  base_unit: String,
});

// Create a model based on the schema
const Trade = mongoose.model('Trade', tradeSchema);


app.get('/', async (req, res) => {
  
  const api_data = await axios.get('https://api.wazirx.com/api/v2/tickers');

    // Extract the top 10 trade data from the api_data
    const data = Object.values(api_data.data).slice(0, 10); 

    // Save each top 10 trade data to the database
    for (const tradeData of data) {
      const trade = new Trade({
        name: tradeData.name,
        last: tradeData.last,
        buy: tradeData.buy,
        sell: tradeData.sell,
        volume: tradeData.volume,
        base_unit: tradeData.base_unit,
      });

      await trade.save();
    }

    
    // Send the top 10 trade data as a JSON response
    res.json(data);

})

// Create a new route to fetch the stored data from the database



app.get('/trades', async (req, res) => {
  try {
    // Fetch all trade data from the database
    const data = await Trade.find();

    // Send the fetched trade data as a JSON response to the frontend
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.listen(PORT, () => {
  console.log('Server is Listning to port: 5000');
})