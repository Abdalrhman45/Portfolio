const educationController = require('../Controllers/educationController');
const express = require('express');
const router = express.Router();

router.post('/', educationController.addNewEducation);
router.get('/', educationController.getEducation);
router.delete('/:id', educationController.deleteEducation);

module.exports = router;