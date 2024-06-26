import { IsString, IsEmail, IsStrongPassword,  MinLength, MaxLength} from "class-validator";

export class CreateUserDTO{
    @MinLength(3,{message:"O nome deve conter pelo menos 3 caracteres"})
    @MaxLength(22,{message:"O nome não deve ultrapassar 22 caracteres"})
    @IsString({message:"Nome Inválido"})
    username: string
    @IsEmail(undefined,{message:"Digite um email válido"})
    email: string
    @IsStrongPassword({
        minLength: 6,
        minUppercase:1,
        minLowercase:0,
        minSymbols:0,
        minNumbers:1,
    },{message:"A senha deve ter pelo menos 6 caracteres e conter uma letra maiuscula e um número"})
    password: string
}