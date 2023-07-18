import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";

interface IParams {
  inquiryId?: string;
}

export async function DELETE(request: Request, { params }: { params: IParams }) {
  const { inquiryId } = params;

  if (!inquiryId || typeof inquiryId !== "string") {
    throw new Error("Invalid ID");
  }

  const reservation = await prisma.inquiry.delete({
    where: {
      id: inquiryId,
    },
  });

  return NextResponse.json(reservation);
}
