import express from 'express';
import saveImage from '../controllers/authControllers.js';
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({});
const upload = multer({storage});

router.post('/',upload.single('image') ,saveImage)

export default router;