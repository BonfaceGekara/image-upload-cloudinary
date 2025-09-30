import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import uploadRoutes from './routes/uploadRoutes.js';

dotenv.config();

const app = express();

app.use(cors());

app.use('/api/upload',uploadRoutes);

mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        app.listen(process.env.PORT);
    })
    .catch((error) => {
        console.error(error);
    })