import prisma from "@/app/libs/prismadb";
import { getSession } from "./getCurrentUser";

export default async function getMynquiry() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }
    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currentUser) {
      return null;
    }

    const myInquiries = await prisma.inquiry.findMany({
      where: {
        userId: currentUser.id,
      },
    });

    if (!myInquiries) {
      return null;
    }

    const safeInquiries = myInquiries.map((inquiry) => ({
      ...inquiry,
      createdAt: inquiry.createdAt.toISOString(),
    }));

    return safeInquiries;
  } catch (error: any) {
    throw new Error(error);
  }
}
