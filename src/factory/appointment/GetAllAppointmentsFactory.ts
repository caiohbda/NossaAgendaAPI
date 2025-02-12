import { InMemoryAppointmentsRepository } from "repositories/in-memory/in-memory-appointments";
import { GetAllAppointments } from "use-cases/appointment/get-all-appointments";

export const getAllAppointmentsFactory = (): GetAllAppointments => {
  const appointmentRepository = new InMemoryAppointmentsRepository();
  return new GetAllAppointments(appointmentRepository);
};
