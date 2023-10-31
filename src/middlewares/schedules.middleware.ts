import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppErrors.error";
import Schedule from "../entities/Schedule.entity";
import { realEstateRepo, scheduleRepo } from "../repositories";
import RealEstate from "../entities/RealEstate.entity";

export const verifyRealEstateId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { realEstateId } = req.body;

  const realEstate = await realEstateRepo.findOneBy({ id: realEstateId });

  if (!realEstate) {
    throw new AppError('RealEstate not found', 404);
  }

  return next();
};

export const verifyScheduleExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { realEstatedId } = req.body
  const realEstate: RealEstate | null = await realEstateRepo.findOne({
    where: {
      id: Number(realEstatedId)
    }
  })

  if(!realEstate) throw new AppError('RealEstate not found', 404)

  return next()
}

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

  if (schedule) throw new AppError("Schedule to this real estate at this date and time already exists", 409);

  return next();
};

export const verifyUserScheduleConflict = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { userId, date, hour } = req.body;

  const existingSchedule = await scheduleRepo.findOne({
    where: {
      user: {
        id: userId,
      },
      date,
      hour,
    },
  });

  if (existingSchedule) {
    throw new AppError('User schedule to this real estate at this date and time already exists', 409);
  }

  return next();
};

export const verifyScheduleHoursExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { hour } = req.body;

  const scheduleHoursStart = 8;
  const scheduleHoursEnd = 18;

  const scheduleHour = parseInt(hour);

  if (scheduleHour < scheduleHoursStart || scheduleHour >= scheduleHoursEnd) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  return next();
};
