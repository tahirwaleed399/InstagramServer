let express = require('express');
const {  createUser,updateUser } = require('../Controllers/user');
let router = express.Router()
router.post('/create-user', createUser);
router.post('/update-user', updateUser);
// router.post('/sample', createSample);

module.exports = router;