import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/data";
import Order from "@/models/order";

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

    const savedOrder = await Order.create(newOrder);
    return new NextResponse(JSON.stringify(savedOrder), { status: 201 });
    
  } catch (error) {
    console.error("Error creating order:", error);
    return new NextResponse("Error creating order", { status: 500 });
  }
};

export const GET = async () => {
  await connect();
  if (!connect) {
    return new NextResponse("Error connecting to MongoDB", { status: 500 });
  }

  try {
    const orders = await Order.find({}).sort({ createdAt: -1 });
    return NextResponse.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return new NextResponse("Error fetching orders", { status: 500 });
  }
};
