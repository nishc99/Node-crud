const mongoose = require("mongoose");


const mongouri = "mongodb://127.0.0.1:27017/mydata?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0";
const connectDB = () => {
  mongoose.connect(mongouri, () => {
    console.log("mongoDB is Connected");
  });
};

module.exports = connectDB;