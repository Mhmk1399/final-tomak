import mongoose from "mongoose";

const inputFormSchema = new mongoose.Schema({
  //   name: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "users",
  //   },

  message: {
    type: String,
    required: true,
  },
});
