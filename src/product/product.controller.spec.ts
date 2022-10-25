import { IProduct } from "@lib";
import { HttpServer, INestApplication } from "@nestjs/common";
import { getModelToken, MongooseModule } from "@nestjs/mongoose";
import { Test, TestingModule } from "@nestjs/testing";
import { Model } from "mongoose";
import { ProductModule } from "./product.module";
import * as request from "supertest";
import { listProduct } from "./product.mock";

describe("ProductController", () => {
  let app: INestApplication;
  let httpServer: HttpServer;
  let productModel: Model<IProduct>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot("mongodb://localhost:27017/POS_TEST"),
        ProductModule,
      ],
    }).compile();

    productModel = module.get(getModelToken("Product"));

    app = module.createNestApplication();
    await app.init();
    httpServer = app.getHttpServer();
  });

  beforeEach(async () => {
    await productModel.insertMany(listProduct);
  });

  afterEach(async () => {
    await productModel.deleteMany().exec();
  });

  it("should return an array of cats", async () => {
    const res = await request(httpServer).get("/product").expect(200);
    const products = res.body;
    expect(products).toHaveLength(3);
  });
});
