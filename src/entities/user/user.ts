export interface UserProps {
  name: string;
  cpf: string;
  password: string;
  role: string;
}

export class User {
  private props: UserProps;

  get name() {
    return this.props.name;
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
  }
}
