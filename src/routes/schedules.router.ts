import { Router } from 'express'
import { validateBody, verifyAdmin, verifyPermissions, verifyToken } from '../middlewares/globals.middleware'
import { createNewScheduleSchema } from '../schemas/schedules.schema'
import { verifyRealEstateId, verifyScheduleExists, verifyScheduleHoursExists, verifyTimeTableExists, verifyUserScheduleConflict } from '../middlewares/schedules.middleware'
import { createScheduleController, readAllSchedulesRealEstateController } from '../controllers/schedules.controller'

export const scheduleRouter: Router = Router()

scheduleRouter.post('/', verifyToken, validateBody(createNewScheduleSchema), verifyTimeTableExists, verifyUserScheduleConflict, verifyRealEstateId,verifyScheduleHoursExists,  createScheduleController)

scheduleRouter.get('/realEstate/:id', verifyToken, verifyAdmin, readAllSchedulesRealEstateController)