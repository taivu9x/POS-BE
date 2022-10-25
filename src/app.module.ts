import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { VoucherModule } from "./voucher/voucher.module";
import { ProductModule } from "./product/product.module";
@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/POS"),
    VoucherModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
