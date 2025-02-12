import { Appointment } from "../../entities/appointment/appointment";
import { AppointmentRepository } from "../../repositories/appointments-repository";

export interface CreateAppointmentRequest {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

type CreateAppointmentResponse = Appointment;

export class CreateAppointment {
  constructor(private appointmentRepository: AppointmentRepository) {}

  async execute({
    customer,
    startsAt,
    endsAt,
  }: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
    const overLappingAppointment =
      await this.appointmentRepository.findOverlappingAppointment(
        startsAt,
        endsAt
      );

    if (overLappingAppointment) {
      throw new Error("Another appointment overlaps this appointment dates");
    }
    const appointment = new Appointment({
      customer,
      startsAt,
      endsAt,
    });

    await this.appointmentRepository.create(appointment);

    return appointment;
  }
}
