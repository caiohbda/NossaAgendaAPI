import { randomUUID } from "node:crypto";
import { User } from "../user/user";

export interface AppointmentProps {
  id: string;
  customer: User;
  barber: User;
  startsAt: Date;
  endsAt: Date;
}

export class Appointment {
  private readonly props: AppointmentProps;

  get id(): string {
    return this.props.id;
  }

  get customer(): User {
    return this.props.customer;
  }

  get barber(): User {
    return this.props.barber;
  }

  get startsAt(): Date {
    return this.props.startsAt;
  }

  get endsAt(): Date {
    return this.props.endsAt;
  }

  constructor(props: Omit<AppointmentProps, "id">) {
    const { startsAt, endsAt, customer, barber } = props;

    if (!(customer instanceof User)) {
      throw new Error("Invalid customer: Must be a valid 'User' instance.");
    }

    if (!(barber instanceof User)) {
      throw new Error("Invalid barber: Must be a valid 'User' instance.");
    }

    if (startsAt <= new Date()) {
      throw new Error("Invalid start date");
    }

    if (endsAt <= startsAt) {
      throw new Error("Invalid end date");
    }

    if (customer.role !== "client") {
      throw new Error("The customer must have the role 'user'");
    }

    if (barber.role !== "barber") {
      throw new Error("The barber must have the role 'barber'");
    }

    this.props = { id: randomUUID(), ...props };
  }
}
