import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
  },
  { timestamps: true } // Automatically create `createdAt` and `updatedAt`
);

const Comment = mongoose.models.Comment || mongoose.model("Comment", CommentSchema);

export default Comment;
