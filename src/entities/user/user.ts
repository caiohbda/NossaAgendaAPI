import { randomUUID } from 'node:crypto'

export interface UserProps {
  name: string;
  cpf: string;
  password: string;
  role: string;
}

export class User {
  private _id: string;
  private props: UserProps;

  get name() {
    return this.props.name;
  }

  get id() {
    return this._id;
  }

  get cpf() {
    return this.props.cpf;
  }

  get password() {
    return this.props.password;
  }

  get role() {
    return this.props.role;
  }

  constructor(props: UserProps) {
    this.props = props;
    this._id = randomUUID();
  }
}
