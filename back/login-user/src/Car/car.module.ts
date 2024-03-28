import { Module } from "@nestjs/common";
import { CarController } from "./car.controllers";
import { CarsService } from "./car.service";
import { PrismaModule } from "src/prisma/prisma.module";
@Module({
    imports:[PrismaModule],
    exports:[],
    controllers:[CarController],
    providers:[CarsService],
})
export class CarModule {}