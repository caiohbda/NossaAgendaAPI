import { randomUUID } from "node:crypto";

export interface UserProps {
  id: string;
  name: string;
  cpf: string;
  password: string;
  role: string;
}

export class User {
  private readonly props: UserProps;

  get id(): string {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  get cpf(): string {
    return this.props.cpf;
  }

  get password(): string {
    return this.props.password;
  }

  get role(): string {
    return this.props.role;
  }

  constructor(props: Omit<UserProps, "id">) {
    this.validateCpf(props.cpf);
    this.validatePassword(props.password);
    this.props = { id: randomUUID(), ...props };
  }

  private validateCpf(cpf: string): void {
    if (!/\d{11}/.test(cpf)) {
      throw new Error("CPF inválido");
    }
  }

  private validatePassword(password: string): void {
    if (password.length < 6) {
      throw new Error("A senha deve ter pelo menos 6 caracteres");
    }
  }
}
