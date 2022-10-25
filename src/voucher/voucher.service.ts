import { IVoucher } from "@lib";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class VoucherService {
  constructor(
    @InjectModel("Voucher")
    private readonly voucherModel: Model<IVoucher>
  ) {}

  async findAll(): Promise<IVoucher[]> {
    return this.voucherModel.find().exec();
  }
}
