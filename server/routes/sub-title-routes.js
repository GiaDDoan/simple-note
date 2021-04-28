const router = require('express').Router();

const subTitleControllers = require('../controllers/sub-title-controllers');

// router.get('/get-all-titles', titleController.get_all_titles);
router.get('/get-all-documents', subTitleControllers.get_all_documents);
// router.post('/add-document', titleControllers.add_title);
// router.patch(
//   '/find-and-update-document',
//   titleControllers.find_and_update_title
// );
// router.delete('/delete-document/:documentId', titleControllers.delete_document);

module.exports = router;
