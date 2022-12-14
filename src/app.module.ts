import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';

const ENV = process.env.NODE_ENV;
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: !ENV ? '.env' : `.env.${ENV}` }),
    MongooseModule.forRoot(`${process.env.MONGODB_URI}`, {
      useNewUrlParser: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
