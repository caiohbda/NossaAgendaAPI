import { InMemoryUsersRepository } from "../../repositories/in-memory/in-memory-user";
import { FindByIdController } from "../../controllers/users/FindByIdController";
import { FindById } from "../../use-cases/user/find-by-id";

export const FindUserByIdFactory = (
  repository: InMemoryUsersRepository
): FindByIdController => {
  const useCase = new FindById(repository);
  return new FindByIdController(useCase);
};
