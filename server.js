
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api', require('./server/routes/auth'));
app.use('/api', require('./server/routes/layout')); // Add layout routes

const PORT =  5200;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});