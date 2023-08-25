import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (
  req: NextRequest,
  context: { params: { id: string } }
) => {
  // const id = Number(context.params.id) || 0;
  const id = req.url.slice(req.url.lastIndexOf("/") + 1);
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
  });

  return NextResponse.json({ product });
};
