const express = require("express");
const { request } = require("https");
const mongoose = require("mongoose");
const db = require("./src /helpers/db");
const todoHandler = require("./src /todoHandler/todoHandler");
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());

// database connect
db.connect();

// application route
app.use("/todo", todoHandler);
//  default error handler
function errorHandler(err, req, res, next) {
  if (res.headerSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

app.get("/", async (req, res) => {
  res.send("ok, server running");
});
app.listen(port, () => {
  console.log("server port :", port);
});
