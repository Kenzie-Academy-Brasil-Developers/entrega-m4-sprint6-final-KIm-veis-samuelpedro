import { Router } from 'express'
import { verifyNameCategoryExists } from '../middlewares/categories.middleware'
import { createCategoryController, readCategoriesByRealEstateController, readCategoryController } from '../controllers/categories.controller'
import { verifyPermissions, verifyToken } from '../middlewares/globals.middleware'

export const categoryRouter: Router = Router()

categoryRouter.post('/', verifyToken, verifyPermissions, verifyNameCategoryExists, createCategoryController)

categoryRouter.get('/', readCategoryController)

categoryRouter.get('/:id/realEstate', readCategoriesByRealEstateController)