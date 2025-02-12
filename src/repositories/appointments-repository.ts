import { Appointment } from "../entities/appointment/appointment";

export interface AppointmentRepository {
  create(appointment: Appointment): Promise<void>;
  getAll(): Promise<Appointment[]>;
  findOverlappingAppointment(
    startsAt: Date,
    endsAt: Date
  ): Promise<Appointment | null>;
}
