import { InMemoryUsersRepository } from "../repositories/in-memory/in-memory-user"
import { CreateUserController } from "../controllers/CreateUserController"
import { CreateUser } from "../use-cases/user/create-user"

export const CreateUserFactory = (): CreateUserController => {
  const repository = new InMemoryUsersRepository()
  const useCase = new CreateUser(repository)
  const controller = new CreateUserController(useCase)

  return controller
}