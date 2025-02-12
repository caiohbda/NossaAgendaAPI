import { Request, Response } from "express";
import { DeleteAppointment } from "../../use-cases/appointment/delete-appointment";

export class DeleteAppointmentController {
  constructor(private readonly deleteAppointment: DeleteAppointment) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      await this.deleteAppointment.execute(id);
      return res.status(200).json({ message: "Usuário excluído com sucesso" });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro desconhecido";
      return res.status(400).json({ message: errorMessage });
    }
  }
}
