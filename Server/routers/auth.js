const { registeration, login, updateProfile } = require('../controllers/auth');

const router = require('express').Router();

router.post('/register',registeration);
router.post('/login',login);

module.exports = router;