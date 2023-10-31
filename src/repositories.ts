import { Repository } from "typeorm";
import { AppDataSource } from "./data-source";
import { User } from "./entities/User.entity";
import { Category } from "./entities/Category.entity";
import RealEstate from "./entities/RealEstate.entity";
import Schedule from "./entities/Schedule.entity";
import { Address } from "./entities/Address.entity";
import { AddressRepo, RealEstateRepo } from "./interfaces/realEstates.interface";
import { CategoryRepo } from "./interfaces/categories.interface";

export const userRepo: Repository<User> = AppDataSource.getRepository(User)
export const categoryRepo: CategoryRepo = AppDataSource.getRepository(Category)
export const realEstateRepo: RealEstateRepo = AppDataSource.getRepository(RealEstate)
export const scheduleRepo: Repository<Schedule> = AppDataSource.getRepository(Schedule)
export const addressRepo: AddressRepo = AppDataSource.getRepository(Address)