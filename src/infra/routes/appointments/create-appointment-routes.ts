import { Router } from "express";
import { CreateAppointmentFactory } from "factory/appointment/CreateAppointmentFactory";
import { InMemoryAppointmentsRepository } from "repositories/in-memory/in-memory-appointments";

export const createAppointmentRoutes = (
  appointmentRepository: InMemoryAppointmentsRepository
) => {
  const createAppointmentController = CreateAppointmentFactory(
    appointmentRepository
  );
  const router = Router();

  router.post("/create", (req, res) => {
    createAppointmentController.handle(req, res);
  });

  return router;
};
