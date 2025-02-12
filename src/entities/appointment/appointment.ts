import { randomUUID } from "node:crypto";

export interface AppointmentProps {
  id: string;
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

export class Appointment {
  private readonly props: AppointmentProps;

  get customer() {
    return this.props.customer;
  }

  get id(): string {
    return this.props.id;
  }

  get startsAt() {
    return this.props.startsAt;
  }

  get endsAt() {
    return this.props.endsAt;
  }

  constructor(props: Omit<AppointmentProps, "id">) {
    const { startsAt, endsAt } = props;

    if (startsAt <= new Date()) {
      throw new Error("invalid Date");
    }

    if (endsAt <= startsAt) {
      throw new Error("invalid date");
    }
    this.props = { id: randomUUID(), ...props };
  }
}
