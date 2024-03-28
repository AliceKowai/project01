import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateCarDTO } from "./dto/create-car.dto";
import { UpdateCarDTO } from "./dto/uptade-car.dto";
import { UpdatePartialCarDTO } from "./dto/update-partial-car.dto";
import { log } from "console";
@Injectable()
export class CarsService {
    constructor(private readonly prisma: PrismaService) {

    }

    async create({name, brand, model, year, km, exteriorColor,fuelType,transmission, entertainment, safety, details, favorite}: CreateCarDTO) {
        return this.prisma.car.create({
            data: {
                name,
                brand,
                model,
                year,
                km,
                exteriorColor,
                fuelType,
                transmission,
                entertainment,
                safety,
                details,
                favorite,
            }
        })
    }

    async list(){
        return this.prisma.car.findMany()
    }
    async searchByName(name: string) {
        return this.prisma.car.findMany({
            where: {
                name: {
                    contains: name,
                    mode: 'insensitive',
                },
            },
        });
    }
    async searchByModel(model: string) {
        if (typeof model !== 'string') {
            throw new BadRequestException('O parâmetro deve ser uma string.');
        }
        return this.prisma.car.findMany({
            where: {
                model: {
                    contains: model,
                    mode: 'insensitive',
                },
            },
        });
    }
    async show(id:number){
        return this.prisma.car.findUnique({
            where:{
                id,
            }
        })
    }
    async update(id:number, data:UpdateCarDTO){
        if(!(await this.show(id))){
            console.log('cu');
            throw new NotFoundException(`carro não encontrado id:${id}`)
            
        }
        return this.prisma.user_login.update({
            data,
            where:{
                id,
            }
        })
    }

    async updatePartial(id:number, data:UpdatePartialCarDTO){
        if(!(await this.show(id))){
            throw new NotFoundException(`carro não encontrado id:${id}`)
        }
        return this.prisma.car.update({
            data,
            where:{
                id,
            }
        })
    }
    async delete(id:number){
        if(!(await this.show(id))){
            throw new NotFoundException(`carro não encontrado id:${id}`)
        }
        return this.prisma.car.delete({
            where:{
                id
            }
        })
    }

}