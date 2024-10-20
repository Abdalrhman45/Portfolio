const aboutController = require('../Controllers/aboutController');
const express = require('express');
const router = express.Router();
const upload = require('../Utili/multerAboutConfig');

router.post('/', upload.single('image'), aboutController.addNewAbout);
router.get('/', aboutController.getAbout);


module.exports = router;