import { GetAllAppointmentsController } from "controllers/appointment/GetallAppointmentsController";
import { Router } from "express";
import { InMemoryAppointmentsRepository } from "repositories/in-memory/in-memory-appointments";

export const getAllAppointmentsRoutes = (
  appointmentRepository: InMemoryAppointmentsRepository
) => {
  const getAllAppointmentsController = new GetAllAppointmentsController(
    appointmentRepository
  );
  const router = Router();

  router.get("/", async (req, res) => {
    await getAllAppointmentsController.handle(req, res);
  });

  return router;
};
