import { Request, Response } from "express"
import { createCategoryService, readCategoriesByRealEstateService, readCategoriesService } from "../services/categories.service"


export const createCategoryController = async (req: Request, res: Response): Promise<Response> => {
    const specialty = await createCategoryService(req.body)

    return res.status(201).json(specialty)
}

export const readCategoryController = async (req: Request, res: Response): Promise<Response> => {
    const specialties = await readCategoriesService()

    return res.status(200).json(specialties)
}

export const readCategoriesByRealEstateController = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const realEstate = await readCategoriesByRealEstateService(Number(id))

    return res.status(200).json(realEstate);
}