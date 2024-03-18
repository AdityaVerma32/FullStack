import express from 'express';
import cors from 'cors';
import dataRoutes from './Routes/routes.js';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({ limit: "1mb" }));
app.use(express.static("public"));
//----------------All the middle wares defined Above-----------------------




app.use("/data", dataRoutes);

export { app } 