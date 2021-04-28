const mongoose = require('mongoose');
const { Schema } = mongoose;

const titleSchema = new Schema(
  {
    main_name: String, // String is shorthand for {type: String}
    rank: Number,
    isInEditMode: Boolean,
  },
  { collection: 'titles' }
);

module.exports = mongoose.model('Title', titleSchema);
