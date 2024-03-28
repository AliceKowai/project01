import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './User/user.module';
import { CarModule } from './Car/car.module';

@Module({
  imports: [UserModule, CarModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
