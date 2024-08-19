require('dotenv').config();
require('../backend/database/db');

const express = require("express");
const app = express();
const port = process.env.PORT;
const  cors = require("cors");
const userRoute = require("./routes/User");
const imageRoute = require("./routes/Image")
app.use(cors());
app.use(express.json());
app.use("/api/user",userRoute);
app.use("/api/upload",imageRoute);

app.listen(port,()=>{
    console.log("Backend is running...");
})