import prisma from "@/app/libs/prismadb";

interface IParams {
  inquiryId?: string;
}

export default async function getInquiryById(params: IParams) {
  try {
    const { inquiryId } = params;

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
