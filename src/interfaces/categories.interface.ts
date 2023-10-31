import { z } from "zod";
import { Repository } from "typeorm";
import { createCategorySchema, readAllCategoriesSchema } from "../schemas/categories.schema";
import { Category } from "../entities/Category.entity";

export type CreateCategory = z.infer<typeof createCategorySchema>
export type readAllCategories = z.infer<typeof readAllCategoriesSchema>
export type CategoryRepo = Repository<Category>