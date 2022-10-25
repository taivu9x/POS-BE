import { ESize, EVoucherType } from "@lib";
import { Schema } from "mongoose";

export const VoucherSchema = new Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
    enum: ["DISCOUNT", "DISCOUNT_PERCENT", "DEAL"],
  },
  deal: {
    from: Number,
    to: Number,
  },
  discount: {
    type: Number,
  },
  size: { type: String, enum: ["SMALL", "MEDIUM", "LARGE"] },
});

VoucherSchema.set("toJSON", {
  transform: function (_, ret) {
    ret.id = ret._id;
    delete ret._id;
  },
});
