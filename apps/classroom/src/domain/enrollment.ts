import crypto from "node:crypto";
import { Maybe } from "../core/logic/Maybe";

interface EnrollmentProps {
  studentId: string;
  courseId: string;
  createdAt: Date;

  purchasesEnrolledByPurchaseId?: Maybe<string>;
  inactivatedAt?: Maybe<Date>;
}

export class Enrollment {
  private _id: string;
  private props: EnrollmentProps;

  get id(): string {
    return this._id;
  }

  get studentId(): string {
    return this.props.studentId;
  }

  get courseId(): string {
    return this.props.courseId;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get purchasesEnrolledByPurchaseId(): Maybe<string> {
    return this.props.purchasesEnrolledByPurchaseId;
  }

  get inactivatedAt(): Maybe<Date> {
    return this.props.inactivatedAt;
  }

  constructor(props: EnrollmentProps, id?: string) {
    this._id = id ?? crypto.randomUUID();
    this.props = props;
  }
}
