import { areIntervalsOverlapping } from "date-fns";

import {
  Appointment,
  AppointmentProps,
} from "../../entities/appointment/appointment";
import { AppointmentRepository } from "../appointments-repository";

export class InMemoryAppointmentsRepository implements AppointmentRepository {
  public items: Appointment[] = [];

  async create(appointment: Appointment): Promise<void> {
    this.items.push(appointment);
  }

  async getAll(): Promise<Appointment[]> {
    return this.items;
  }

  async delete(id: string): Promise<void> {
    const index = this.items.findIndex((appointment) => appointment.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  async update(
    id: string,
    appointmentData: Partial<Omit<AppointmentProps, "id">>
  ): Promise<Appointment | undefined> {
    const appointment = this.items.find((appointment) => appointment.id === id);
    if (!appointment) {
      return undefined;
    }

    const updatedAppointmentProps: AppointmentProps = {
      id: appointment.id,
      barber: appointmentData.barber ?? appointment.customer,
      customer: appointmentData.customer ?? appointment.customer,
      startsAt: appointmentData.startsAt ?? appointment.startsAt,
      endsAt: appointmentData.endsAt ?? appointment.endsAt,
    };

    const updatedAppointment = new Appointment(updatedAppointmentProps);

    const index = this.items.findIndex((appointment) => appointment.id === id);
    this.items[index] = updatedAppointment;

    return updatedAppointment;
  }

  async findById(id: string): Promise<Appointment | undefined> {
    const appointment = this.items.find((appointment) => appointment.id === id);
    return appointment;
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
