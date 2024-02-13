const { getUser, updateProfile } = require('../controllers/user');
const { uploadProfile } = require('../utils/multer');

const router = require('express').Router();

router.get("/:id",getUser);
router.post('/update',uploadProfile.single("profileImage"),updateProfile);


module.exports = router;