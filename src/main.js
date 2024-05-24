import express from "express";
//import dotenv from 'dotenv';
import connectDB from "./config/database.js";

import { routerAPI } from "./routes/index.js";

const app = express();
const port = process.env.PORT || 5000;
connectDB();

routerAPI(app);

app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
});