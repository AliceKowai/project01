import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDTO } from "./create-users.dto";

export class UpdatePartialUserDTO extends PartialType(CreateUserDTO){}