import { AppointmentRepository } from "repositories/appointments-repository";

export class DeleteAppointment {
  constructor(private appointmentRepository: AppointmentRepository) {}

  async execute(id: string): Promise<void> {
    await this.appointmentRepository.delete(id);
  }
}
