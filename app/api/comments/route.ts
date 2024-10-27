import { NextRequest, NextResponse } from "next/server";
import connect from "../../../lib/data"; 
import Comment from "../../../models/comment";
import jwt from "jsonwebtoken";
import { User } from "@/models/users"; 

const JWT_SECRET = process.env.JWT_SECRET || 'Toomakcompany171878';
export const POST = async (req: NextRequest) => {
  await connect();

  try {
    // Get the JWT token from cookies
    const token = req.cookies.get('token')?.value;

    if (!token) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // Verify the JWT token
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };

    if (!decoded) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { message } = await req.json();
    if (!message) {
      return new NextResponse("Message is required", { status: 400 });
    }

    // Find the user from the token payload
    const user = await User.findById(decoded.userId);
    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Create a new comment
    const newComment = await Comment.create({
      message,
      user: user._id, // Associate comment with the logged-in user
    });

    return new NextResponse(JSON.stringify(newComment), { status: 201 });
  } catch (error) {
    console.error("Error posting comment:", error);
    return new NextResponse("Server error", { status: 500 });
  }
};
export const GET = async () => {
  await connect();
  if(!connect) {
      throw new Error('Database connection error');
  }

  try {
    const comments = await Comment.find().populate("user", "name"); // Fetch user name from User model
    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (error) {
    console.error("Error fetching comments:", error);
    return new NextResponse("Server error", { status: 500 });
  }
};
