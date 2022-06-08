const router = require('express').Router();

const { getUsers } = require('../controllers/user.controller');
const { handleAuthVerify } = require('../middlewares/handleAuthVerify.middleware')

router.get('/users', handleAuthVerify, getUsers);

module.exports = router;