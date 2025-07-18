import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDb } from './lib/db.js';
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use('/api/auth',authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    connectDb();
})
