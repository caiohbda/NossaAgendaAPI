import { Request, Response } from "express";
import { InMemoryAppointmentsRepository } from "repositories/in-memory/in-memory-appointments";
import { GetAllAppointments } from "use-cases/appointment/get-all-appointments";

export class GetAllAppointmentsController {
  constructor(
    private readonly appointmentRepository: InMemoryAppointmentsRepository
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const getAllAppointmentsUseCase = new GetAllAppointments(
      this.appointmentRepository
    );
    const appointments = await getAllAppointmentsUseCase.execute();

    return res.json(appointments);
  }
}
