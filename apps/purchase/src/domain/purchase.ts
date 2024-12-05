import crypto from "node:crypto";

interface IPurchaseProps {
  id_customer: string;
  id_product: string;
  created_at: Date;
}

export class Purchase {
  private _id: string;
  private props: IPurchaseProps;

  get id(): string {
    return this._id;
  }

  get id_customer(): string {
    return this.props.id_customer;
  }

  get id_product() {
    return this.props.id_product;
  }

  constructor(props: IPurchaseProps, id?: string) {
    this._id = id ?? crypto.randomUUID();
    this.props = props;
  }
}
