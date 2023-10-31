import { z } from "zod";
import { Repository } from "typeorm";
import { createNewScheduleSchema } from "../schemas/schedules.schema";
import Schedule from "../entities/Schedule.entity";

export type CreateSchedule = z.infer<typeof createNewScheduleSchema>

export type scheduleRepo = Repository<Schedule>