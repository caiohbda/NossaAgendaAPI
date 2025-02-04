import { randomUUID } from 'node:crypto'

export interface AppointmentProps {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

export class Appointment {
  private props: AppointmentProps;
  private _id: string;

  get customer() {
    return this.props.customer;
  }

  get id() {
    return this._id;
  }

  get startsAt() {
    return this.props.startsAt;
  }

  get endsAt() {
    return this.props.endsAt;
  }

  constructor(props: AppointmentProps) {
    const { startsAt, endsAt } = props;

    if (startsAt <= new Date()) {
      throw new Error("invalid Date");
    }

    if (endsAt <= startsAt) {
      throw new Error("invalid date");
    }
    this.props = props;
    this._id = randomUUID();
  }
}
