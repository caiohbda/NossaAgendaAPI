import { Router } from "express";
import { InMemoryAppointmentsRepository } from "../../../repositories/in-memory/in-memory-appointments";
import { FindByIdAppointment } from "../../../use-cases/appointment/find-by-id-appointment";
import { FindByIdAppointmentController } from "../../../controllers/appointment/FindByIdAppointmentController";

export const findUserByIdAppointmentRoutes = (
  appointmentRepository: InMemoryAppointmentsRepository
) => {
  const findAppointmentByIdUseCase = new FindByIdAppointment(
    appointmentRepository
  );
  const findByIdAppointmentController = new FindByIdAppointmentController(
    findAppointmentByIdUseCase
  );
  const router = Router();

  router.get("/:id", async (req, res) => {
    await findByIdAppointmentController.handle(req, res);
  });

  return router;
};
