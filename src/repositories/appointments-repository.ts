import {
  Appointment,
  AppointmentProps,
} from "../entities/appointment/appointment";

export interface AppointmentRepository {
  create(appointment: Appointment): Promise<void>;
  getAll(): Promise<Appointment[]>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Appointment | undefined>;
  update(
    id: string,
    userData: Partial<Omit<AppointmentProps, "id">>
  ): Promise<Appointment | undefined>;
  findOverlappingAppointment(
    startsAt: Date,
    endsAt: Date
  ): Promise<Appointment | null>;
}
