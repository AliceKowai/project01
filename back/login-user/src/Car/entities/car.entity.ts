import {Prisma} from '@prisma/client'


export class CarEntity implements Prisma.carUncheckedCreateInput{
    id?: number
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
    urlImage: string
}