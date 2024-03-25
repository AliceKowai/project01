import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UsersService } from "./user.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    imports:[PrismaModule],
    exports : [],
    controllers : [UserController],
    providers:[UsersService],  
})
export class UserModule{}