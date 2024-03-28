import { Injectable, ConflictException, NotFoundException } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-users.dto";
import { PrismaService } from "../prisma/prisma.service";
import { UpdateUserSTO } from "./dto/update-users.dto";
import { UpdatePartialUserDTO } from "./dto/update-partial-user.dto";

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {

    }

    async create({firstName, lastName, dateOfBirth, email, cpf, password, permission}: CreateUserDTO) {
        // Verificar se o e-mail já existe
        const existingUser = await this.prisma.user_login.findUnique({
            where: { email },
        });

        // Se o e-mail já estiver em uso, lançar uma exceção de conflito
        if (existingUser) {
            throw new ConflictException('E-mail já cadastrado. Por favor, escolha outro e-mail.');
        }
        const existingUserCpf = await this.prisma.user_login.findUnique({
            where: { cpf },
        });

        // Se o e-mail já estiver em uso, lançar uma exceção de conflito
        if (existingUserCpf) {
            throw new ConflictException('CPF cadastrado');
        }

        // Se o e-mail for único, criar o novo usuário
        return this.prisma.user_login.create({
            data: {
                firstName,
                lastName,
                dateOfBirth,
                email,
                cpf,
                password,
                permission
            }
        })
    }

    async list(){
        return this.prisma.user_login.findMany()
    }
    async show(id:number){
        return this.prisma.user_login.findUnique({
            where:{
                id,
            }
        })
    }
    async showCpf(cpf:string){
        return this.prisma.user_login.findUnique({
            where:{
                cpf,
            }
        })
    }
    async update(id:number, data:UpdateUserSTO){
        return this.prisma.user_login.update({
            data,
            where:{
                id,
            }
        })
    }
    async updatePartial(id:number, data:UpdatePartialUserDTO){
        return this.prisma.user_login.update({
            data,
            where:{
                id,
            }
        })
    }
    async delete(id: number) {
        if (!(await this.show(id))) {
            throw new NotFoundException(`Usuário ${id} não encontrado!`)
        }
        return this.prisma.user_login.delete({
            where: {
                id
            }
        }) 
    }
    
}
