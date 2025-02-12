import { Router } from "express";
import { CreateAppointmentFactory } from "factory/appointment/CreateAppointmentFactory";
import { InMemoryAppointmentsRepository } from "repositories/in-memory/in-memory-appointments";
import { InMemoryUsersRepository } from "repositories/in-memory/in-memory-user";

export const createAppointmentRoutes = (
  appointmentRepository: InMemoryAppointmentsRepository,
  userRepository: InMemoryUsersRepository
) => {
  const createAppointmentController = CreateAppointmentFactory(
    appointmentRepository,
    userRepository
  );
  const router = Router();

  router.post("/create", (req, res) => {
    createAppointmentController.handle(req, res);
  });

  return router;
};
