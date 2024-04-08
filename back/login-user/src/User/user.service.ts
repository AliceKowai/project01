import { Injectable, ConflictException, NotFoundException } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-users.dto";
import { PrismaService } from "../prisma/prisma.service";
import { UpdateUserSTO } from "./dto/update-users.dto";
import { UpdatePartialUserDTO } from "./dto/update-partial-user.dto";
import { LoginUserDTO } from "./dto/login.dto";

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {

    }

    async create({ username, email, password }: CreateUserDTO) {
        // Verificar se o e-mail já existe
        const existingUserEmail = await this.prisma.user_login.findUnique({
            where: { email },
        });
        const existingUser = await this.prisma.user_login.findUnique({
            where: { username, email },
        });

        // Se o username já estiver em uso, lançar uma exceção de conflito
        if (existingUser) {
            throw new ConflictException('username já cadastrado. Por favor, escolha outro username.');
        }

        if (existingUserEmail) {
            throw new ConflictException('email já cadastrado. Por favor, escolha outro email.');
        }


        // Se o e-mail for único, criar o novo usuário
        return this.prisma.user_login.create({
            data: {
                username,
                email,
                password,
            }
        })
    }
    async login({ username, password }: LoginUserDTO) {
        // Verificar se o e-mail já existe
        const existingUser = await this.prisma.user_login.findUnique({
            where: { username },
        });
        
        //Se não encontrar o username
        if (!existingUser) {
            throw new ConflictException('usuario não encontrado');
        }
        if (existingUser) {
            if (existingUser.password == password) {
                return {response: existingUser}
            } else {
                throw new ConflictException('Senha errada'); //se a não senha corresponder

            }

        }
    }

    async list() {
        return this.prisma.user_login.findMany()
    }
    async show(id: number) {
        return this.prisma.user_login.findUnique({
            where: {
                id,
            }
        })
    }
    async update(id: number, data: UpdateUserSTO) {
        return this.prisma.user_login.update({
            data,
            where: {
                id,
            }
        })
    }
    async updatePartial(id: number, data: UpdatePartialUserDTO) {
        return this.prisma.user_login.update({
            data,
            where: {
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
    async listFavorite(userId: number) {
        return this.prisma.user_login.findUnique({
            where: {
                id: userId,
            },
            include: {
                favoriteCars: true, // Isso irá incluir os carros favoritos relacionados ao usuário
            },
        });
    }
    async addFavoriteCar(userId: number, carId: number) {
        const user = await this.show(userId);
        await this.prisma.user_login.update({
            where: { id: userId },
            data: { favoriteCars: { connect: { id: carId } } },
        });
        return user.id
    }
    async removeFavoriteCar(userId: number, carId: number) {
        // const user = await this.show(userId);
        await this.prisma.user_login.update({
            where: { id: userId },
            data: { favoriteCars: { disconnect: { id: carId } } },
        });
        console.log({userId, carId})
    }
}
