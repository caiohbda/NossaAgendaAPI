import { Request, Response } from "express";
import { UpdateUser } from "../../use-cases/user/update-user";

export class UpdateUserController {
  constructor(private readonly useCase: UpdateUser) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, password, role } = req.body;

    try {
      console.log(`Attempting to update user with ID: ${id}`); // Log para verificar qual ID está sendo passado
      const updatedUser = await this.useCase.execute({
        id,
        name,
        password,
        role,
      });

      if (!updatedUser) {
        return res.status(404).send({ message: "User not found" });
      }

      console.log("User updated successfully:", updatedUser); // Log para verificar os dados retornados
      return res
        .status(200)
        .send({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
      console.error("Error during user update:", error); // Log do erro
      return res.status(500).send({ message: "Internal server error" });
    }
  }
}
