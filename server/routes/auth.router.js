const router = require('express').Router();
const { handleSignUp, handleLogin } = require('../controllers/user.controller');

router.post('/signup', handleSignUp);
router.post('/login', handleLogin);

module.exports = router;
