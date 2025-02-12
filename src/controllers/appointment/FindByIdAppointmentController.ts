import { Request, Response } from "express";
import { FindByIdAppointment } from "../../use-cases/appointment/find-by-id-appointment";

export class FindByIdAppointmentController {
  constructor(private readonly useCase: FindByIdAppointment) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const user = await this.useCase.execute(id);

      if (!user) {
        return res.status(404).send({ message: "Appointment not found" });
      }

      return res.status(200).send(user);
    } catch (error) {
      console.error("Error fetching Appointment by ID:", error);
      return res
        .status(500)
        .send({ message: "Internal server error", error: String(error) });
    }
  }
}
