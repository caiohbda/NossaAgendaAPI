import { Router } from "express";
import { DeleteAppointmentFactory } from "../../../factory/appointment/DeleteAppointmentFactory";
import { InMemoryAppointmentsRepository } from "../../../repositories/in-memory/in-memory-appointments";

export const deleteAppointmentRoutes = (
  appointmentRepository: InMemoryAppointmentsRepository
) => {
  const deleteAppointmentController = DeleteAppointmentFactory(
    appointmentRepository
  );

  const router = Router();

  router.delete("/delete/:id", async (req, res) => {
    await deleteAppointmentController.handle(req, res);
  });

  return router;
};
