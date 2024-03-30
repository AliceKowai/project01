import { Injectable, OnModuleInit, INestApplication } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{
    constructor() {
        super({
            log: [{
                emit: "event",
                level:"query"
            }]
        })
    }
    
    async onModuleInit() {
        await this.$connect()
    }
    async enableShutdownHooks (app: INestApplication){
        process.on('beforeExit', async()=>{
            await app.close()
        })
    }
}