import { Controller, Post, Body, Get, ParseIntPipe, Put, Param, Patch, Delete, Query } from "@nestjs/common";
import { CarsService } from "./car.service";
import { CreateCarDTO } from "./dto/create-car.dto";
import { UpdateCarDTO } from "./dto/uptade-car.dto";
import { UpdatePartialCarDTO } from "./dto/update-partial-car.dto";

@Controller('cars')
export class CarController{
    constructor(private readonly carsService: CarsService) {}
    @Post()
    async create(@Body() data: CreateCarDTO){
        return this.carsService.create(data)
    }
    @Get()
    async read(){
        return this.carsService.list()
    }
    @Get(':id')
    async readOnly(@Param('id', ParseIntPipe) id:number){
        return this.carsService.show(id)
    }
    // @Get('search')
    // async searchByName(@Query('name') name: string) {
    //     return this.carsService.searchByName(name);
    // }
    @Put(':id')
    async update(@Body() data: UpdateCarDTO, @Param('id', ParseIntPipe) id:number){
        return this.carsService.update(id,data)
    }
    @Patch(':id')
    async updatePartial(@Body() data:UpdatePartialCarDTO, @Param('id', ParseIntPipe)id:number){
        return this.carsService.updatePartial(id,data)
    }
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe)id:number){
        return this.carsService.delete(id)
    }

}