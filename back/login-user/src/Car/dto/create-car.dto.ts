import { MinLength,MaxLength, IsBooleanString, IsNumberString, IsString, IsDate, IsOptional, IsInt, IsNumber} from "class-validator"
import { CarEntity } from "../entities/car.entity"
import { Prisma } from "@prisma/client"

export class CreateCarDTO extends CarEntity{
    @MinLength(3,{message:"O nome deve conter pelo menos 3 caracteres"})
    @MaxLength(50,{message:"O nome não deve ultrapassar 50 caracteres"})
    @IsString({message:"Nome Inválido"})
    name: string
    @MinLength(3,{message:"A marca deve conter pelo menos 3 caracteres"})
    @MaxLength(50,{message:"A marca não deve ultrapassar 50 caracteres"})
    @IsString({message:"Marca Inválida"})
    @IsString()
    brand:string
    @IsString()
    model:string
    @IsString()
    year: string
    @IsString({message:"Por favor, coloque um quilometragem válida"})
    km: string
    @IsString({message:"Por favor, coloque uma cor válida"})
    exteriorColor: string
    @IsString({message:"Por favor, coloque uma tipo de conbustivel válido"})
    fuelType: string
    @IsString({message:"Por favor, coloque um cambio válido, ex: cambio automatico"})
    transmission: string
    @IsString({message:"Por favor, coloque o acessorios de entrenimento do seu carro, ex: som esterio, televisor 14 polegadas"})
    entertainment: string
    @IsString({message:"Por favor, adicione o sistema de segurança do seu carro, ex:alarme, localizador"})
    safety: string
    @IsString({message:"Digite os detalhes do seu veiculo"})
    details: string
    @IsString()
    price: string
    @IsString()
    location: string
    @IsOptional()
    imagens?: Prisma.ImageCarroUncheckedCreateNestedManyWithoutCarInput;
    @IsString()
    urlImage: string
} 