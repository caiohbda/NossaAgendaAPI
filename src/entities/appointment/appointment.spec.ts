import { test, expect } from "vitest";
import { Appointment } from "./appointment";
import { getFutureDate } from "../../tests/utils/get-future-date";

test("create an appointment", () => {
  const startsAt = getFutureDate("2025-03-14");
  const endsAt = getFutureDate("2025-03-15");

  const appointment = new Appointment({
    customer: "John Doe",
    startsAt,
    endsAt,
  });

  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual("John Doe");
});

test("cannot create an appointment with end date before start date", () => {
  const startsAt = getFutureDate("2025-03-14");
  const endsAt = getFutureDate("2025-03-13"); // Correção: endsAt antes de startsAt para falhar corretamente

  expect(() => {
    return new Appointment({
      customer: "John Doe",
      startsAt,
      endsAt,
    });
  }).toThrow();
});

test("cannot create an appointment with end date before now", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  endsAt.setDate(endsAt.getDate() - 1);

  expect(() => {
    return new Appointment({
      customer: "John Doe",
      startsAt,
      endsAt,
    });
  }).toThrow();
});
