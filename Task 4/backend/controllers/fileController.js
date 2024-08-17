const path = require('path');
const fs = require('fs');
const multer = require('multer');

const uploadPath = path.join(__dirname, '../uploads');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const uploadFile = (req, res) => {
  upload.single('file')(req, res, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Error uploading file' });
    }
    res.json({ filePath: `/uploads/${req.file.filename}` });
  });
};

module.exports = { uploadFile };
