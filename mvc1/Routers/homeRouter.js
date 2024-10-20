const homeController = require('../Controllers/homeController');
const express = require('express');
const router = express.Router();
const upload = require('../Utili/multerHomeConfig');

router.post('/', upload.single('image'), homeController.addNewHome);
router.get('/', homeController.getHome);


module.exports = router;