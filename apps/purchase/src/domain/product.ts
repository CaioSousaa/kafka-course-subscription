import crypto from "node:crypto";

enum Categories {
  BackEnd,
  FrontEnd,
}

interface IProductProps {
  title: string;
  categories: Categories;
}

export class Product {
  private _id: string;
  private props: IProductProps;

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this.props.title;
  }

  get categories(): Categories {
    return this.props.categories;
  }

  constructor(props: IProductProps, id?: string) {
    this._id = id ?? crypto.randomUUID();
    this.props = props;
  }
}
