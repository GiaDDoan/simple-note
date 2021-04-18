const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI || '', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('db connected'));

//Imported Routes
const titleRoutes = require('./routes/title-routes');
// const subTitleRoutes = require('./routes/sub-title-route');
// const noteRoute = require('./routes/note-route');
// const historyRoute = require('./routes/history-route');
// const historyStackRoute = require('./routes/history-stack-route');

const PORT = 5000;

app
  // .use(cors())
  .use(express.urlencoded({ extended: false }))
  .use(express.json())

  .use('/title', titleRoutes)
  // .use('/sub-title', subTitleRoutes)
  // .use('/note', noteRoute)
  // .use('/history', historyRoute)
  // .use('/history-stack', historyStackRoute)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
