import { Schema } from "mongoose";

export const ProductSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  img: {
    type: String,
  },
  size: { type: String, enum: ["SMALL", "MEDIUM", "LARGE"] },
});

ProductSchema.set("toJSON", {
  transform: function (_, ret) {
    ret.id = ret._id;
    delete ret._id;
  },
});
