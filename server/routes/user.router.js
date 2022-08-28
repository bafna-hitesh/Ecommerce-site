const router = require('express').Router();

const { getUser } = require('../controllers/user.controller');
const { handleAuthVerify } = require('../middlewares/handleAuthVerify.middleware')

router.get('/user', handleAuthVerify, getUser);

module.exports = router;