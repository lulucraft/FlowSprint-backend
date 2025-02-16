import { AppDataSource } from "@configs/data-source";
import { User } from "src/entities/User";

export const UserRepository = AppDataSource.getRepository(User);
