import crypto from "node:crypto";

interface ICustomerProps {
  name: string;
  email: string;
  cpf: string;
}

export class Customer {
  private _id: string;
  private props: ICustomerProps;

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this.props.name;
  }

  get email(): string {
    return this.props.email;
  }

  get cpf(): string {
    return this.props.cpf;
  }

  constructor(props: ICustomerProps, id?: string) {
    this._id = id ?? crypto.randomUUID();
    this.props = props;
  }
}
