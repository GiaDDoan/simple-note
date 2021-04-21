require('dotenv').config();

const Title = require('../models/title');
const uuid = require('uuid4');

const get_all = async (req, res) => {
  try {
    const titles = await Title.find().exec();

    //##FILTER if we somehow get an empty title
    // const filteredTitles = new Array();
    // titles.filter((title) => {
    //   if (title.title && title.title !== '') {
    //     filteredTitles.push(title);
    //   }
    // });
    // console.log('titles: ', filteredTitles);
    // const titlesWithRank = await titles.map((title, index) => {
    //   console.log('NUu ', title.rank);
    //   if (title.rank == undefined) {
    //     console.log('title ', title.rank);
    //     const query = { _id: title._id };
    //     const addRank = { $set: { rank: index } };

    //     Title.updateOne(query, addRank);

    //     // console.log('TITLE: ', title, 'INDEX ', index);
    //     // title.rank = index
    //   } else {
    //     return title;
    //   }
    // });

    console.log('wut ', titles);
    // console.log('get');
    res.status(200).json({
      status: 200,
      message: 'Received all titles',
      titles: titles,
    });
  } catch (err) {
    res.status(404).json({ status: 404, message: err.message });
  }
};

const add_title = async (req, res) => {
  const titles = await Title.find().exec();
  console.log(titles.length, titles.length + 1);

  const added_title = new Title({
    title_name: req.body.title_name,
    rank: titles.length,
  });

  try {
    const newTitle = await added_title.save();
    console.log('newTitle added: ', newTitle);

    res.status(201).json({ status: 201, title: newTitle });
  } catch (err) {
    res.status(404).json({
      status: 404,
      message: `Cannot add the title`,
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
  get_all,
  add_title,
  // put_titles,
  // delete_all_titles,
  // delete_title,
};
