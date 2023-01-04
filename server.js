const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
// import dotenv from 'dotenv';
const dotenv = require('dotenv');


dotenv.config(); //read .env file

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASE_URI, () => {
  
    try {
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error + " cannot connect. please see admin")
    }
})


// mongoose
//   .connect("mongodb://localhost:27017/netflix", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("DB Connetion Successfull");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

app.use("/api/user", userRoutes);

app.listen(3000, () => {
  console.log("server started on port 3000");
});
