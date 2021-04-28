const mongoose = require('mongoose');
const { Schema } = mongoose;

const subTitleSchema = new Schema(
  {
    title_name: String, // String is shorthand for {type: String}
    main_name: String,
    rank: Number,
    isInEditMode: Boolean,
  },
  { collection: 'sub-titles' }
);

module.exports = mongoose.model('SubTitle', subTitleSchema);
