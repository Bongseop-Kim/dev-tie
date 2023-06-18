import prisma from "@/app/libs/prismadb";

export default async function getInquiry() {
  try {
    const inquiries = await prisma.inquiry.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeInquiries = inquiries.map((inquiry) => ({
      ...inquiry,
      createdAt: inquiry.createdAt.toISOString(),
    }));

    return safeInquiries;
  } catch (error: any) {
    throw new Error(error);
  }
}
