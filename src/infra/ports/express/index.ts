import "dotenv/config";
import express from "express";
import { createUserRoutes } from "../../routes/users/create-user-routes";
import { getUsersRoutes } from "infra/routes/users/get-all-users-routes";
import { InMemoryUsersRepository } from "../../../repositories/in-memory/in-memory-user";
import { deleteUserRoutes } from "infra/routes/users/delete-user-routes";
import { findUserByIdRoutes } from "infra/routes/users/find-by-id-routes";
import { updateUserRoutes } from "infra/routes/users/update-user-routes";
import { InMemoryAppointmentsRepository } from "repositories/in-memory/in-memory-appointments";
import { createAppointmentRoutes } from "infra/routes/appointments/create-appointment-routes";
import { getAllAppointmentsRoutes } from "infra/routes/appointments/get-all-appointments";
import { deleteAppointmentRoutes } from "infra/routes/appointments/delete-appointment-routes";
import { findUserByIdAppointmentRoutes } from "infra/routes/appointments/find-by-id-appointment-routes";

const userRepository = new InMemoryUsersRepository();
const appointmentRepository = new InMemoryAppointmentsRepository();

const app = express();

app.use(express.json());
app.use("/users", createUserRoutes(userRepository));
app.use("/users", getUsersRoutes(userRepository));
app.use("/users", deleteUserRoutes(userRepository));
app.use("/users", findUserByIdRoutes(userRepository));
app.use("/users", updateUserRoutes(userRepository));

app.use(
  "/appointment",
  createAppointmentRoutes(appointmentRepository, userRepository)
);
app.use("/appointment", getAllAppointmentsRoutes(appointmentRepository));
app.use("/appointment", deleteAppointmentRoutes(appointmentRepository));
app.use("/appointment", findUserByIdAppointmentRoutes(appointmentRepository));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`);
});

export { app };
