require('dotenv').config();

const Title = require('../models/title');
const uuid = require('uuid4');

const get_all_titles = async (req, res) => {
  try {
    const titles = await Title.find({}).sort({ rank: 1 }).exec();
    const collection = await Title.collection.collectionName;
    let placeholder_name;

    if (collection == 'titles') {
      placeholder_name = 'Title';
    }

    res.status(200).json({
      status: 200,
      message: 'Received all titles',
      collection: collection,
      placeholder_name: placeholder_name,
      titles: titles,
    });
  } catch (err) {
    res.status(404).json({ status: 404, message: err.message });
  }
};

const add_title = async (req, res) => {
  const titles = await Title.find().exec();
  console.log('TITLES: ', titles);

  const added_title = new Title({
    title_name: req.body.userInput,
    rank: titles.length,
  });

  try {
    const newTitle = await added_title.save();

    res.status(201).json({ status: 201, title: newTitle });
  } catch (err) {
    res.status(404).json({
      status: 404,
      message: `Cannot add the title`,
      error: err.message,
    });
  }
};

const find_and_update_title = async (req, res) => {
  //forEach or map over the req.body and update each rank with the Id
  const { items } = req.body;
  //Separate the ID to get the column
  // Object.entries(req.body).map(([id, column]) => {
  //   column.items.map((item) => {
  //     console.log('item ', item);
  //   });
  // });
  // console.log('UPDATE REQ ', Object.entries(req.body));
  try {
    Object.entries(req.body).map(([id, column]) => {
      column.items.map(async (item) => {
        const filter = { _id: item._id };
        const update = { rank: item.rank };

        await Title.findOneAndUpdate(filter, update, { new: true });
      });
    });

    // const filter = { _id: req.body._id };
    // const update = { rank: req.body.rank };

    // let doc = await Title.findOneAndUpdate(filter, update, { new: true });

    res.status(201).json({ status: 201, message: 'Rank updated' });
  } catch (error) {
    res.status(404).json({
      status: 404,
      message: `Cannot update the title`,
      error: err.message,
    });
  }
};

// const put_titles = async (req, res) => {
//   // console.log('COLUMSN BODY: ', Object.values(req.body));
//   console.log('BODY: ', Object.values(req.body));

//   Title.deleteMany({}, function (err, result) {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(result);
//     }
//   });

//   Title.insertMany(Object.values(req.body))
//     .then(function () {
//       console.log('Data inserted');
//     })
//     .catch(function (error) {
//       console.log(error.message);
//     });
// };

// const delete_all_titles = async (req, res) => {
//   // titles.deleteMany
//   Title.deleteMany({}, function (err, result) {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(result);
//     }
//   });
// };

// const delete_title = async (req, res) => {
//   const titleId_ = req.params.titleId;

//   try {
//     await Title.find({ _id: `${titleId_}` })
//       .deleteOne()
//       .exec();

//     // console.log('newSubTitle added: ', newSubTitle);

//     res.status(201).json({
//       status: 201,
//       message: `subTitle with the id: ${titleId_} removed`,
//     });
//   } catch (error) {
//     res
//       .status(404)
//       .json({ status: 404, meesage: `Cannot remove the subTitle`, error });
//   }
// };

module.exports = {
  get_all_titles,
  add_title,
  find_and_update_title,
  // put_titles,
  // delete_all_titles,
  // delete_title,
};
