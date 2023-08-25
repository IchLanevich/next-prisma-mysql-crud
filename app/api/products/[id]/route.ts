import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { parseArgs } from "util";

const prisma = new PrismaClient();

export const GET = async (
  req: NextRequest,
  context: { params: { id: string } }
) => {
  const id = Number(context.params.id) || 0;
  const product = await prisma.product.findFirst({
    where: {
      id: id,
    },
  });

  return NextResponse.json({ product });
};
