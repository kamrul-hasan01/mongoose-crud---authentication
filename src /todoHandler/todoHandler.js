const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const todoSchema = require("../schemas/todoSchema");
const Todo = new mongoose.model("Todo", todoSchema);
// get all todo
router.get("/", async (req, res) => {
  console.log("test");
  res.send("get");
});
// get   todo by id
router.get("/:id", async (req, res) => {});
// post todo
router.post("/", async (req, res) => {
  const newTodo = new Todo(req.body);
  await newTodo.save((error) => {
    if (error) {
      console.log(error);
      res.status(500).json({
        error,
      });
    } else {
      res.status(200).json({
        message: "Todo was inserted successfully",
      });
    }
  });
});
// post multiple  todo
router.post("/all ", async (req, res) => {});
//  update todo
router.put("/:id", async (req, res) => {});
//  delete todo
router.delete("/:id", async (req, res) => {});

module.exports = router;
