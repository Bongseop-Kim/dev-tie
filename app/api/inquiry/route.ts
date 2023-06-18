import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    author,
    boxPackage,
    content,
    deadline,
    design,
    designPrice,
    email,
    userId,
    fabric,
    fabricPrice,
    hopePrice,
    label,
    labelPrice,
    password,
    phoneNum,
    privacy,
    quantity,
    tie,
    tiePrice,
    title,
    image,
  } = body;

  const inquiry = await prisma.inquiry.create({
    data: {
      author,
      boxPackage,
      content,
      deadline,
      design,
      designPrice,
      email,
      userId,
      fabric,
      fabricPrice,
      hopePrice,
      label,
      labelPrice,
      password,
      phoneNum,
      privacy,
      quantity,
      tie,
      tiePrice,
      title,
      image,
    },
  });

  return NextResponse.json(inquiry);
}
