export interface HallProps {
  name: string;
  cnpj: string;
}

export class Hall {
  private props: HallProps;

  get name() {
    return this.props.name;
  }

  get cnpj() {
    return this.props.cnpj;
  }

  get barber() {
    return this.barber;
  }

  get owner() {
    return this.owner;
  }

  constructor(props: HallProps) {
    this.props = props;
  }
}
