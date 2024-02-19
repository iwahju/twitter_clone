import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const connect = () => {
    mongoose.set("strictQuery", false);
    mongoose
      .connect(process.env.MONGO)
      .then(() => {
        console.log("connect to mongodb database");
      })
      .catch((err) => {
        throw err;
      });
  };

app.get("/",(req, res)=>{
    res.send("Hello!");
})

app.listen(8000,() => {
    connect();
    console.log("Listening to port 8000");
});

