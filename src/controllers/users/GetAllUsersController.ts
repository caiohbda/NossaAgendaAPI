import { Request, Response } from "express";
import { InMemoryUsersRepository } from "../../repositories/in-memory/in-memory-user";
import { GetAllUsers } from "../../use-cases/user/get-all-users";

export class GetAllUsersController {
  constructor(private userRepository: InMemoryUsersRepository) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const getAllUsersUseCase = new GetAllUsers(this.userRepository);
    const users = await getAllUsersUseCase.execute();

    return res.json(users);
  }
}
