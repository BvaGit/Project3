const multer = require('multer');
class ImgUploads {

    storage = multer.diskStorage({
        
        destination: (req, file, cb) => {
             cb(null, "avatar");
        },
        filename: (req, file, cb) => {
            const index = file.originalname.lastIndexOf('.');
            const format = file.originalname.substr(index);
            cb(null, file.originalname = req.params.id + format);
        }
    })

}

module.exports = new ImgUploads();