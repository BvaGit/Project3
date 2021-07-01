const multer = require('multer');


class ImgUploads {

    storage = multer.diskStorage({
        
        destination: (req, file, cb) => {
            console.log("Stor")
             cb(null, "avatar");
        },
        filename: (req, file, cb) => {
            const index = file.originalname.lastIndexOf('.');
            const format = file.originalname.substr(index);
            cb(null, file.originalname = req.params.id + format);
        }
    })

    // fileFilter (req, file, cb) {
    //     if(file.mimetype === "image/jpg" || file.mimetype === "image/jpeg"){
    //         cb(null, true);
    //     } else {
    //         cb(null, false);
    //     }
    // }


}

module.exports = new ImgUploads();