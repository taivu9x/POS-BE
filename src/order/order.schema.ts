import { ESize } from '@lib';
import { Schema } from 'mongoose';

export const OrderSchema = new Schema({
  _id: {
    type: String,
    unique: true,
    required: true,
  },
  total: {
    type: Number,
  },
  items: [
    {
      id: { type: String },
      size: { type: ESize },
    },
  ],
});
