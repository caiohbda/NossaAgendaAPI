import { BarberProps } from "../barber/barber";
import { OwnerProps } from "../owner/owner";

export interface HallProps {
  name: string;
  cnpj: string;
  owner: OwnerProps;
  barber: BarberProps;
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
}
