const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Import Models
require('./model/artist.model.js');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/artist_api`);

app.use(bodyParser.json());

//Import Routes
require('./routes/artist_route')(app);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })

}

const PORT = process.env.PORT || 5556;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});