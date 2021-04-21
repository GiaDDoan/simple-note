const mongoose = require('mongoose');
const { Schema } = mongoose;

const titleSchema = new Schema(
  {
    title_name: String, // String is shorthand for {type: String}
    rank: Number,
  },
  { collection: 'titles' }
);

module.exports = mongoose.model('Title', titleSchema);
