import { Appointment } from "../../entities/appointment/appointment";
import { AppointmentRepository } from "../../repositories/appointments-repository";

export class FindByIdAppointment {
  constructor(private readonly appointmentRepository: AppointmentRepository) {}

  async execute(id: string): Promise<Appointment | null> {
    const appointment = await this.appointmentRepository.findById(id);
    return appointment ?? null;
  }
}
