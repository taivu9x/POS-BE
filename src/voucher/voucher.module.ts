import { Module } from "@nestjs/common";
import { VoucherService } from "./voucher.service";
import { VoucherController } from "./voucher.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { VoucherSchema } from "./voucher.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: "Voucher",
        schema: VoucherSchema,
      },
    ]),
  ],
  providers: [VoucherService],
  controllers: [VoucherController],
})
export class VoucherModule {}
