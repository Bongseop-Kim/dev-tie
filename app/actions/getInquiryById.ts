import prisma from "@/app/libs/prismadb";

interface IParams {
  inquiryId?: number;
}

export default async function getInquiryById(params: IParams) {
  try {
    const inquiryId = Number(params.inquiryId);

    const inquiry = await prisma.inquiry.findUnique({
      where: {
        id: inquiryId,
      },
    });

    if (!inquiry) {
      return null;
    }

    return {
      ...inquiry,
      createdAt: inquiry.createdAt.toISOString(),
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
