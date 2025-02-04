import { describe, expect, it } from "vitest";
import { CreateAppointment } from "../create-appointment";
import { Appointment } from "../../entities/appointment/appointment";
import { getFutureDate } from "../../tests/utils/get-future-date";
import { InMemoryAppointmentsRepository } from "../../repositories/in-memory/in-memory-appointments";

describe("Create Appointment", () => {
  it("should be able to create an appointment", () => {
    const startsAt = getFutureDate("2025-03-14");
    const endsAt = getFutureDate("2025-03-15");

    const appointmentRepository = new InMemoryAppointmentsRepository();
    const createAppointment = new CreateAppointment(appointmentRepository);

    expect(
      createAppointment.execute({
        customer: "john doe",
        startsAt,
        endsAt,
      })
    ).resolves.toBeInstanceOf(Appointment);
  });
});
