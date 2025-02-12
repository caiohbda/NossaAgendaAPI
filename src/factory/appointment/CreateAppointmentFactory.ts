import { CreateAppointmentController } from "controllers/appointment/CreateAppointmentController";
import { InMemoryAppointmentsRepository } from "repositories/in-memory/in-memory-appointments";
import { CreateAppointment } from "use-cases/appointment/create-appointment";

export const CreateAppointmentFactory = (
  repository: InMemoryAppointmentsRepository
): CreateAppointmentController => {
  const useCase = new CreateAppointment(repository);
  return new CreateAppointmentController(useCase);
};
