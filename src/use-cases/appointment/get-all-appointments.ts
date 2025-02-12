import { Appointment } from "entities/appointment/appointment";
import { AppointmentRepository } from "repositories/appointments-repository";

export class GetAllAppointments {
  constructor(private readonly appointmentRepository: AppointmentRepository) {}

  async execute(): Promise<Appointment[]> {
    return this.appointmentRepository.getAll();
  }
}
