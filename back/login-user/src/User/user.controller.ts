import { Body, Controller, Post, Get, Put, Patch, Delete, Param, ParseIntPipe } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-users.dto";
import { UsersService } from "./user.service";
import { UpdateUserSTO } from "./dto/update-users.dto";
import { UpdatePartialUserDTO } from "./dto/update-partial-user.dto";

@Controller('users')
export class UserController{
    constructor(private readonly usersService: UsersService) {}
    @Post()
    async create(@Body() data:CreateUserDTO){
        return this.usersService.create(data)
    }
    @Get()
    async read(){
        return this.usersService.list()
    }
    @Get(':id')
    async readonly(@Param('id', ParseIntPipe) id:number){
        return this.usersService.show(id)
    }
    @Put(':id')
    async update(@Body() data:UpdateUserSTO, @Param('id', ParseIntPipe) id:number){
        return this.usersService.update(id,data)
    }
    @Patch(':id')
    async updatePartial(@Body() data:UpdatePartialUserDTO, @Param('id', ParseIntPipe)id:number){
        return this.usersService.updatePartial(id,data)
    }
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe)id:number){
        return {id}
    }
}