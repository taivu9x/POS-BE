import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
@Module({
  imports: [
    OrderModule,
    MongooseModule.forRoot('mongodb://localhost:27017/POS'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
