export interface BarberProps {
  name: string;
  cpf: string;
}

export class Barber {
  private props: BarberProps;

  constructor(props: BarberProps) {
    this.props = props;
  }

  get name() {
    return this.props.name;
  }

  get cpf() {
    return this.props.cpf;
  }
}
