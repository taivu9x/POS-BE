import { IVoucher } from "@lib";
import { listVoucher } from "./voucher.mock";
import { HttpServer, INestApplication } from "@nestjs/common";
import { getModelToken, MongooseModule } from "@nestjs/mongoose";
import { Test, TestingModule } from "@nestjs/testing";
import { Model } from "mongoose";
import { VoucherModule } from "./voucher.module";
import * as request from "supertest";

describe("VoucherController", () => {
  let app: INestApplication;
  let httpServer: HttpServer;
  let voucherModel: Model<IVoucher>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot("mongodb://localhost:27017/POS_TEST"),
        VoucherModule,
      ],
    }).compile();

    voucherModel = module.get(getModelToken("Voucher"));

    app = module.createNestApplication();
    await app.init();
    httpServer = app.getHttpServer();
  });

  beforeEach(async () => {
    await voucherModel.insertMany(listVoucher);
  });

  afterEach(async () => {
    await voucherModel.deleteMany().exec();
  });

  it("should return an array of cats", async () => {
    const res = await request(httpServer).get("/voucher").expect(200);
    const vouchers = res.body;
    expect(vouchers).toHaveLength(3);
  });
});
