import { NextResponse, NextRequest } from "next/server";
import connect from "@/lib/data";
import Order from "@/models/order";


export const GET = async () => {
  await connect();
  if (!connect) {
    return new NextResponse("Error connecting to MongoDB", { status: 500 });
  }

  try {
    const users = await Order.find({});
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return new NextResponse("Error fetching users", { status: 500 });
  }
};
export const POST = async (req: NextRequest) => {
  await connect();
  if (!connect) {
    return new NextResponse("Error connecting to MongoDB", { status: 500 });
  }
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const projectType = formData.get("projectType") as string;
    const budget = formData.get("budget") as string;
    const description = formData.get("description") as string;

    if (!name || !phoneNumber || !projectType || !budget || !description) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    
    const newOrder = {
      name,
      phoneNumber,
      projectType,
      budget, 
      description
    };

    const savedUser = await Order.create(newOrder);

    return new NextResponse(JSON.stringify(savedUser), { status: 201 });
  } catch (error) {
    console.error("Error posting users:", error);
    return new NextResponse("Error posting users", { status: 500 });
  }
};
