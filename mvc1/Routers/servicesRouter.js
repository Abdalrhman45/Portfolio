const servicesController = require('../Controllers/servicesController');
const express = require('express');
const router = express.Router();

router.post('/', servicesController.addNewService);
router.get('/', servicesController.getServices);
router.delete('/:id', servicesController.deleteService);

module.exports = router;