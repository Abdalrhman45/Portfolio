const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images/home');
    },
    filename: (req, file, cb) => {
        // cb(null, Date.now() + "_" + file.originalname);
        cb(null, file.originalname);
    }
});

const upload = multer({storage});

module.exports = upload;

