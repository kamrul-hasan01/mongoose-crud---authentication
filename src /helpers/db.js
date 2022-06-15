const mongoose = require("mongoose");
const { env } = require("../config/config");

let db = {};
db.config = {
  mongoUri: `mongodb+srv://${env.dbUser}:${env.dbPass}@cluster0.sbsxy.mongodb.net/Mongoose?retryWrites=true&w=majority`,
};
db.connect = async () => {
  try {
    mongoose
      .connect(db.config.mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Database connected!"));
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = db;
