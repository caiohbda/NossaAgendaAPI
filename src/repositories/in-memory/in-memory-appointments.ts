import { areIntervalsOverlapping } from "date-fns";

import { Appointment } from "../../entities/appointment/appointment";
import { AppointmentRepository } from "../appointments-repository";

export class InMemoryAppointmentsRepository implements AppointmentRepository {
  public items: Appointment[] = [];

  async create(appointment: Appointment): Promise<void> {
    this.items.push(appointment);
  }

  async getAll(): Promise<Appointment[]> {
    return this.items;
  }

  async findOverlappingAppointment(
    startsAt: Date,
    endsAt: Date
  ): Promise<Appointment | null> {
    const overLappingAppointment = this.items.find((appointment) => {
      return areIntervalsOverlapping(
        { start: startsAt, end: endsAt },
        { start: appointment.startsAt, end: appointment.endsAt },
        { inclusive: true }
      );
    });

    if (!overLappingAppointment) {
      return null;
    }

    return overLappingAppointment;
  }
}
