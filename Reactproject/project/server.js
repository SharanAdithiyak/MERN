const express =require("express");
const dotenv=require("dotenv");
const connectDB=require("./config/db");
const studentroutes=require("./routes/studentroutes");

dotenv.config();
connectDB();

const app=express();
app.use(express.json());
app.use("/api/students",studentroutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));