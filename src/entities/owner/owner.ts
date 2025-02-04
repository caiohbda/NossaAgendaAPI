export interface OwnerProps {
  name: string;
  cpf: string;
}

export class Owner {
  private props: OwnerProps;

  get name() {
    return this.props.name;
  }

  get cpf() {
    return this.props.cpf;
  }

  constructor(props: OwnerProps) {
    this.props = props;
  }
}
