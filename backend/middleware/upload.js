//const path=require("path")
const multer=require("multer")

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
      const extension = file.originalname.split('.').pop();
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, `${uniqueSuffix}.${extension}`);
    },
  });
  
  const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'text/plain' || file.mimetype === 'application/pdf' || file.mimetype === 'text/csv') {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  };
  
  const upload = multer({ storage, fileFilter });

  module.exports=upload
  
