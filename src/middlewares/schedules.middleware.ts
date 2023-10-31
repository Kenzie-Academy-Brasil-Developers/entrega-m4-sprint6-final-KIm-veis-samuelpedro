import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppErrors.error";
import Schedule from "../entities/Schedule.entity";
import { scheduleRepo } from "../repositories";

export const verifyTimeTableExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { realEstateId, hour, date } = req.body;
  const schedule: Schedule | null = await scheduleRepo.findOne({
    where: {
      realEstate: {
        id: Number(realEstateId),
      },
      hour,
      date,
    },
  });

  if (schedule) throw new AppError("this date and time already exists", 409);

  return next();
};
