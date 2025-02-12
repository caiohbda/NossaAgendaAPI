import { CreateAppointmentController } from "controllers/appointment/CreateAppointmentController";
import { InMemoryAppointmentsRepository } from "repositories/in-memory/in-memory-appointments";
import { InMemoryUsersRepository } from "../../repositories/in-memory/in-memory-user";
import { CreateAppointment } from "use-cases/appointment/create-appointment";

export const CreateAppointmentFactory = (
  appointmentsRepository: InMemoryAppointmentsRepository,
  usersRepository: InMemoryUsersRepository
): CreateAppointmentController => {
  const useCase = new CreateAppointment(
    appointmentsRepository,
    usersRepository
  );
  return new CreateAppointmentController(useCase);
};
