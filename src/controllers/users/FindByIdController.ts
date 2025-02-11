import { Request, Response } from "express";
import { FindById } from "../../use-cases/user/find-by-id";

export class FindByIdController {
  constructor(private readonly useCase: FindById) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const user = await this.useCase.execute(id);

      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }

      return res.status(200).send(user);
    } catch (error) {
      console.error("Error fetching user by ID:", error);
      return res
        .status(500)
        .send({ message: "Internal server error", error: String(error) });
    }
  }
}
