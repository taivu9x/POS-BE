import { IProduct } from "@lib";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class ProductService {
  constructor(
    @InjectModel("Product")
    private readonly productModel: Model<IProduct>
  ) {}

  async findAll(): Promise<IProduct[]> {
    return this.productModel.find().exec();
  }
}
