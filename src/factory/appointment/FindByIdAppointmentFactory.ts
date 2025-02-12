import { InMemoryAppointmentsRepository } from "../../repositories/in-memory/in-memory-appointments";
import { FindByIdAppointmentController } from "../../controllers/appointment/FindByIdAppointmentController";
import { FindByIdAppointment } from "../../use-cases/appointment/find-by-id-appointment";

export const FindByIdAppointmentFactory = (
  repository: InMemoryAppointmentsRepository
): FindByIdAppointmentController => {
  const useCase = new FindByIdAppointment(repository);
  return new FindByIdAppointmentController(useCase);
};
