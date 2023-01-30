import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "32mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.get("/",(req,res)=>{
  res.json("Server start")
})
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is Running on port : ${PORT}`))
  )
  .catch((err) => console.log(err.message));

//mongoose.set("useFindAndModify", false);
