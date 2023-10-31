import 'dotenv/config'
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { User } from '../entities/User.entity';
import AppError from "../errors/AppErrors.error";
import { LoginReturn, UserLogin } from "../interfaces/users.interface";
import { userRepo } from "../repositories";

export const loginService = async (data: UserLogin): Promise<LoginReturn> => {
  const { email, password } = data;
  const user: User | null = await userRepo.findOneBy({ email });

  if (!user) throw new AppError('Invalid credentials', 401);

  const comparePassword = await compare(password, user.password);

  if (!comparePassword) throw new AppError('Invalid credentials', 401);

  const token: string = sign(
    { admin: user.admin },
    process.env.SECRET_KEY!,
    { subject: user.id.toString(), expiresIn: process.env.EXPIRES_IN! }
  );

  return { token };
};