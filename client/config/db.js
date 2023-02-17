const mongoose = require("mongoose");
const colors = require("colors");

// connection function
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`mongoDB connect ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`MongoDb Server Issue ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
