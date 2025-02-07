import { InMemoryUsersRepository } from "../repositories/in-memory/in-memory-user";
import { GetAllUsers } from "../use-cases/user/get-all-users";

export const GetAllUsersUseCaseFactory = (): GetAllUsers => {
  const userRepository = new InMemoryUsersRepository();
  return new GetAllUsers(userRepository);
};
