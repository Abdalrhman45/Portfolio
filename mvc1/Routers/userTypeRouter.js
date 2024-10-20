const userTypeController = require('../Controllers/UserTypeController');
const express = require('express');
const router = express.Router();

router.post('/',userTypeController.addNewUserType);
router.get('/',userTypeController.getUserTypes);

module.exports = router;