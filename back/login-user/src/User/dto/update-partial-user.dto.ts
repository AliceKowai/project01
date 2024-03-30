import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDTO } from "./create-users.dto";
import { Prisma } from "@prisma/client";

export class UpdatePartialUserDTO extends PartialType(CreateUserDTO) {
    favoriteCars?: Prisma.carUpdateManyWithoutUsersNestedInput;
}
