const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const todoSchema = require("../schemas/todoSchema");
const Todo = new mongoose.model("Todo", todoSchema);
// get all todo
router.get("/", async (req, res) => {
  await Todo.find({}, (error, data) => {
    console.log(error, data);
    if (error) {
      res.status(500).json({
        error,
      });
    } else {
      res.status(200).json({
        result: data,
        message: "Todo load successfully",
      });
    }
  });
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
        message: "Todo inserted successfully",
      });
    }
  });
});
// post multiple  todo
router.post("/all", async (req, res) => {
  await Todo.insertMany(req.body, (error) => {
    if (error) {
      res.status(500).json({
        error,
      });
    } else {
      res.status(200).json({
        message: "Todos inserted successfully",
      });
    }
  });
});
//  update todo
router.put("/:id", async (req, res) => {
  console.log(req.params.id);
  await Todo.updateOne(
    { _id: req.params.id },
    {
      $set: {
        title: "active",
      },
    },
    (error) => {
      if (error) {
        res.status(500).json({
          error,
        });
      } else {
        res.status(200).json({
          message: "Todo updated successfully",
        });
      }
    }
  );
});
//  delete todo
router.delete("/:id", async (req, res) => {});

module.exports = router;
