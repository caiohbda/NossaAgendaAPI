import { randomUUID } from 'node:crypto'

export interface HallProps {
  name: string;
  cnpj: string;
}

export class Hall {
  private _id: string;
  private props: HallProps;

  get name() {
    return this.props.name;
  }

  get id() {
    return this._id;
  }

  get cnpj() {
    return this.props.cnpj;
  }

  constructor(props: HallProps) {
    this.props = props;
    this._id = randomUUID();
  }
}
