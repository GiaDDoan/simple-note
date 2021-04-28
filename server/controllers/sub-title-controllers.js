// require('dotenv').config();

const SubTitle = require('../models/sub-title');
const uuid = require('uuid4');

const get_all_documents = async (req, res) => {
  try {
    const subTitles__ = await SubTitle.find({}).sort({ rank: 1 }).exec();
    const collection = await SubTitle.collection.collectionName;
    let placeholder_name;

    if (collection == 'sub-titles') {
      placeholder_name = 'Sub Title';
    }

    res.status(200).json({
      status: 200,
      message: 'Received all sub titles',
      collection: collection,
      placeholder_name: placeholder_name,
      sub_titles: subTitles__,
    });
  } catch (err) {
    res.status(404).json({ status: 404, message: err.message });
  }
};

// const add_title = async (req, res) => {
//   const titles = await Title.find().exec();
//   console.log('TITLES: ', titles);

//   const added_title = new Title({
//     title_name: req.body.userInput,
//     rank: titles.length,
//     isInEditMode: false,
//   });

//   try {
//     const newTitle = await added_title.save();

//     res.status(201).json({ status: 201, title: newTitle });
//   } catch (err) {
//     res.status(404).json({
//       status: 404,
//       message: `Cannot add the title`,
//       error: err.message,
//     });
//   }
// };

// const find_and_update_title = async (req, res) => {
//   //forEach or map over the req.body and update each rank with the Id
//   const { items } = req.body;
//   //Separate the ID to get the column
//   // Object.entries(req.body).map(([id, column]) => {
//   //   column.items.map((item) => {
//   //     console.log('item ', item);
//   //   });
//   // });
//   // console.log('UPDATE REQ ', Object.entries(req.body));
//   try {
//     Object.entries(req.body).map(([id, column]) => {
//       column.items.map(async (item) => {
//         const filter = { _id: item._id };
//         const update = { rank: item.rank };

//         await Title.findOneAndUpdate(filter, update, { new: true });
//       });
//     });

//     // const filter = { _id: req.body._id };
//     // const update = { rank: req.body.rank };

//     // let doc = await Title.findOneAndUpdate(filter, update, { new: true });

//     res.status(201).json({ status: 201, message: 'Rank updated' });
//   } catch (error) {
//     res.status(404).json({
//       status: 404,
//       message: `Cannot update the title`,
//       error: err.message,
//     });
//   }
// };

// const delete_document = async (req, res) => {
//   const document_id = req.params.documentId;

//   try {
//     await Title.find({ _id: `${document_id}` })
//       .deleteOne()
//       .exec();

//     res.status(201).json({
//       status: 201,
//       message: `subTitle with the id: ${document_id} removed`,
//     });
//   } catch (error) {
//     res
//       .status(404)
//       .json({ status: 404, meesage: `Cannot remove the subTitle`, error });
//   }
// };

module.exports = {
  get_all_documents,
  // add_title,
  // find_and_update_title,
  // delete_document,
  // put_titles,
  // delete_all_titles,
  // delete_title,
};
