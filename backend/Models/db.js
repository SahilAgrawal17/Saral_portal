const mongoose = require('mongoose');
const mongo_url = process.env.MONGO_CONN;

const connectDB = async () => {
  try {
    await mongoose.connect(mongo_url, {
      useNewUrlParser: true,    //ensures the new MongoDB URI connection parser is used giving fewer deprecation warnings
      useUnifiedTopology: true,  //ensures the unified connection management is used for a more stable connection experience
    });
    console.log('Mongo DB connected');
  } catch (err) {
    console.error('Mongo DB Connection Error: ', err);
    process.exit(1);                  // Exit the process if DB connection fails
  }
};

connectDB();

module.exports = mongoose;
