import { IsStrongPassword, IsString} from "class-validator";

export class LoginUserDTO{
    @IsString()
    username: string
    @IsStrongPassword({
        minLength: 6,
        minUppercase:1,
        minLowercase:0,
        minSymbols:0,
        minNumbers:1,
    },{message:"A senha deve ter pelo menos 6 caracteres e conter uma letra maiuscula e um número"})
    password: string
}