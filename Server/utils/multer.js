const multer = require('multer');


// post image
const imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      return cb(null, `${Date.now()}-${file.originalname}`)
    }
  })

const uploadPost = multer({ storage: imageStorage });



// profile image
const profileStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null, './profiles')
    },
    filename: function (req, file, cb) {
      return cb(null, `${req.query.id}-profile.jpg`);
    }
  })

const uploadProfile = multer({ storage: profileStorage });

module.exports = {
  uploadPost,
    uploadProfile,
}