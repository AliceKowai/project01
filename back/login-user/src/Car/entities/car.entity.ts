import {Prisma} from '@prisma/client'


export class CarEntity implements Prisma.carUncheckedCreateInput{
    name: string
    brand: string
    model: string
    year: string
    km: string
    exteriorColor: string
    fuelType: string
    transmission: string
    entertainment: string
    safety: string
    details: string
    location: string
    price: string
    imagens?: Prisma.ImageCarroUncheckedCreateNestedManyWithoutCarInput
    urlImage1: string
    urlImage2: string
    urlImage3: string


}