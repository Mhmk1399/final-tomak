import mongoose, { Schema, Document } from 'mongoose';

interface IOrder extends Document {
  name: string;
  phoneNumber: string;
  projectType: string;
  budget: number;
  description: string;
  status: string;
}

const OrderSchema: Schema = new Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  projectType: { type: String, required: true },
  budget: { type: Number, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true ,default:'Pending'},
});

export default mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);
