import { Category } from "../entities/Category.entity"
import AppError from "../errors/AppErrors.error"
import { CreateCategory, readAllCategories } from "../interfaces/categories.interface"
import { categoryRepo } from "../repositories"

export const createCategoryService = async (data: CreateCategory): Promise<Category> => {
    return await categoryRepo.save(data)
}

export const readCategoriesService = async (): Promise<readAllCategories> => {
    return await categoryRepo.find()
}

export const readCategoriesByRealEstateService = async (id: number): Promise<Category> => {
    const categorie: Category | null = await categoryRepo.findOne({
      where: {
        id
      },
      relations: {
        realEstate: true
      }
    })
  
    if(!categorie) throw new AppError('Category not found', 404)
  
    return categorie
}
