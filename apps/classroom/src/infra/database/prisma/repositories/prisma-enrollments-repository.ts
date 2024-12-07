import { EnrollmentsRepository } from "../../../../application/repositories/enrollments-repository";
import { Enrollment } from "../../../../domain/enrollment";
import prisma from "../prisma";

export class PrismaEnrollmentRepository implements EnrollmentsRepository {
  async create(enrollment: Enrollment): Promise<void> {
    await prisma.enrollment.create({
      data: {
        id: enrollment.id,
        studentId: enrollment.studentId,
        courseId: enrollment.courseId,
        createdAt: enrollment.createdAt,
        inactivatedAt: enrollment.inactivatedAt,
        purchasesEnrolledByPurchaseId: enrollment.purchasesEnrolledByPurchaseId,
      },
    });
  }
}
