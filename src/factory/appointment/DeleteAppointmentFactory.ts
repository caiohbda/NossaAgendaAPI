import { InMemoryAppointmentsRepository } from "../../repositories/in-memory/in-memory-appointments";
import { DeleteAppointmentController } from "../../controllers/appointment/DeleteAppointmentController";
import { DeleteAppointment } from "../../use-cases/appointment/delete-appointment";

export const DeleteAppointmentFactory = (
  repository: InMemoryAppointmentsRepository
): DeleteAppointmentController => {
  const useCase = new DeleteAppointment(repository);
  return new DeleteAppointmentController(useCase);
};
