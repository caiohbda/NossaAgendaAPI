import { Request, Response } from "express";
import { DeleteUser } from "../use-cases/user/delete-user";

export class DeleteUserController {
  constructor(private readonly deleteUser: DeleteUser) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      await this.deleteUser.execute(id);
      return res.status(200).json({ message: "Usuário excluído com sucesso" });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro desconhecido";
      return res.status(400).json({ message: errorMessage });
    }
  }
}
