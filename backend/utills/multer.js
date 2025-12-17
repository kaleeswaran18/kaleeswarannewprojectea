const multer = require('multer');

const multerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images');
    },
    filename: function (req, file, cb) {
        console.log(req,req.file,"multer")
        console.log(file.originalname,"file.originalname")
        cb(null, Date.now() + '-' + file.originalname); // Prevent duplicate filenames
    }
});

// Multer Filter
const multerFilter = (req, file, cb) => {
    console.log(req,file,"checkdata")
    let allowedExtensions = ["png", "jpg", "jpeg", "svg", "vnd.openxmlformats-officedocument.spreadsheetml.sheet"];
    if (allowedExtensions.includes(file.mimetype.split("/")[1])) {
        cb(null, true);
    } else {
        cb(new Error("Not a valid File!!"), false);
    }
};

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // Set file size limit to 5MB
});

module.exports = upload;
