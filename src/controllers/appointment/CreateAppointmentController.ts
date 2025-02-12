import { Request, Response } from "express";
import {
  CreateAppointment,
  CreateAppointmentRequest,
} from "../../use-cases/appointment/create-appointment";

export class CreateAppointmentController {
  constructor(private readonly usecase: CreateAppointment) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { customerId, barberId, startsAt, endsAt } =
      req.body as CreateAppointmentRequest;

    console.log("Received data:", { customerId, barberId, startsAt, endsAt });

    const data = { customerId, barberId, startsAt, endsAt };

    await this.usecase.execute(data);

    return res
      .status(201)
      .send({ message: "Appointment created successfully" });
  }
}
