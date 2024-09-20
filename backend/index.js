// const express = require('express')
// const app = express()
// const dotenv =require('dotenv');

// const port = 3000
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js"
import cors from  "cors";
import userRoute from "./route/user.route.js"
app.use(cors());
app.use(express.json());
const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;
const URI =process.env.MongoDBURI;

// app.get('/', (req, res) => {
//   res.send('bookstore app')
// })
// connect to mongodb
try {
   mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
   }
   );
   console.log("connected to mongoDB")
} catch (error) {
    console.log("Error: ",error)
}
// defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})