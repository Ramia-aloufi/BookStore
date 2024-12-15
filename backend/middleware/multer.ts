import multer from 'multer';

// Configure storage
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`); // Customize filename
  },
});

// Create Multer instance
export const upload = multer({ storage });
