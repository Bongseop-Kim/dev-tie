import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";

interface IParams {
  inquiryId?: number;
}

export async function DELETE(request: Request, { params }: { params: IParams }) {
  const { inquiryId } = params;

  if (!inquiryId || typeof inquiryId !== "number") {
    throw new Error("Invalid ID");
  }

  const reservation = await prisma.inquiry.delete({
    where: {
      id: inquiryId,
    },
  });

  return NextResponse.json(reservation);
}
