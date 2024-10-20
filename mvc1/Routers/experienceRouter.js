const experienceController = require('../Controllers/experienceController');
const express = require('express');
const router = express.Router();

router.post('/', experienceController.addNewExperience);
router.get('/', experienceController.getExperience);
router.delete('/:id', experienceController.deleteExperience);

module.exports = router;