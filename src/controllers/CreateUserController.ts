import { Request, Response } from "express";
import { CreateUserResquest, CreateUser } from "../use-cases/user/create-user";

export class CreateUserController {
  constructor(private readonly useCase: CreateUser) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, cpf, password, role } = req.body as CreateUserResquest;

    const data = { name, cpf, password, role };
    await this.useCase.execute(data);

    return res
      .status(201)
      .send({ message: "User created successfully", user: data });
  }
}
