import { Maybe } from "../core/logic/Maybe";
import crypto from "node:crypto";

interface CourseProps {
  title: string;
  purchaseProductId: Maybe<string>;
}

export class Coure {
  private _id: string;
  private props: CourseProps;

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this.props.title;
  }

  get purchaseProductId(): Maybe<string> {
    return this.props.purchaseProductId;
  }

  constructor(props: CourseProps, id?: string) {
    this._id = id ?? crypto.randomUUID();
    this.props = props;
  }
}
