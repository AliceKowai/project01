import { IsString, IsEmail, IsStrongPassword, IsDateString, MinLength, MaxLength, IsNotEmpty} from "class-validator";

export class CreateUserDTO{
    @MinLength(3,{message:"O nome deve conter pelo menos 3 caracteres"})
    @MaxLength(22,{message:"O nome não deve ultrapassar 22 caracteres"})
    @IsString({message:"Nome Inválido"})
    firstName: string
    @MinLength(3,{message:"O sobrenome deve conter pelo menos 3 caracteres"})
    @MaxLength(50,{message:"O sobrenome não deve ultrapassar 50 caracteres"})
    @IsString({message:"Sobrenome Inválido"})
    lastName: string
    @IsDateString(undefined,{message:"Coloque uma data valida"})
    dateOfBirth: string
    @IsNotEmpty({ message: 'Email não pode ser vazio' })
    @IsEmail(undefined, {message:"O email deve ser valido"})
    email: string
    @MinLength(11,{message:"Por favor, coloque o cpf sem espaços, pontos e traços"})
    @IsString({message:"Por favor, coloque o cpf sem pontos e traços"})
    cpf: string
    @IsStrongPassword({
        minLength: 6,
        minUppercase:1,
        minLowercase:0,
        minSymbols:0,
        minNumbers:1,
    },{message:"A senha deve ter pelo menos 6 caracteres e conter uma letra maiuscula e um número"})
    password: string
    @IsString()
    permission: string
}