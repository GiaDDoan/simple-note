const router = require('express').Router();

const titleControllers = require('../controllers/title-controllers');

// router.get('/get-all-titles', titleController.get_all_titles);
router.get('/get-all-titles', titleControllers.get_all_titles);
router.post('/add-title', titleControllers.add_title);
// router.post('/replace-all-titles', titleController.put_titles);
// router.delete('/delete-all-titles', titleController.delete_all_titles);
// router.delete('/delete-title/:titleId', titleController.delete_title);

module.exports = router;
