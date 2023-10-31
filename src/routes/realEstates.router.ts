import { Router } from 'express'
import { verifyAddressExists } from '../middlewares/realEstates.middleware'
import { validateBody, verifyAdmin, verifyPermissions, verifyToken } from '../middlewares/globals.middleware'
import { createRealEstateController, readAllRealEstateController } from '../controllers/realEstates.controller'
import { createRealEstateSchema } from '../schemas/realEstates.schema'

export const realEstateRouter: Router = Router()

realEstateRouter.post('/', verifyToken, verifyPermissions, validateBody(createRealEstateSchema), verifyAddressExists, createRealEstateController)

realEstateRouter.get('/', readAllRealEstateController)