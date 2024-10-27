import connect from "@/lib/data";
import { NextRequest,NextResponse } from "next/server";
import Order from "@/models/order";
import order from "@/models/order";



export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
    await connect();
    if(!connect) {
        return new NextResponse('Database connection error', { status: 500 });
    }
    const orderId = params.id; 
    if (!orderId) {
        return new NextResponse('order ID is required', { status: 400 });
    }
    try {
        const deletedOrder = await order.findByIdAndDelete(orderId);
        if (!deletedOrder) {
            return new NextResponse('order not found', { status: 404 });
        }
        return new NextResponse(JSON.stringify({ message: 'order deleted successfully' }), { status: 200 });
    } catch (error) {
        console.error('Error deleting order:', error);
        return new NextResponse('Error deleting order', { status: 500 });
    }}

export const PATCH=async (req: NextRequest, { params }: { params: { id: string } }) => {
    await connect();
    if(!connect) {
        return new NextResponse('Database connection error', { status: 500 });
    }
    const orderId = params.id;
    if (!orderId) {
        return new NextResponse('order ID is required', { status: 400 });
    }
    try {
        const body = await req.json();
        const { name, phoneNumber, projectType, description, budget,status } = body;
        const updatedOrder = await Order.findByIdAndUpdate(
            orderId,
            {  name, phoneNumber, projectType, description, budget,status},
            { new: true }
        );
        if (!updatedOrder) {
            return new NextResponse('order not found', { status: 404 });
        }
        return new NextResponse(JSON.stringify({ message: 'order updated successfully' }), { status: 200 });
    } catch (error) {
        console.error('Error updating order:', error);
        return new NextResponse('Error updating order', { status: 500 });
    }
}