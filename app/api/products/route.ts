import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  const products = await prisma.product.findMany({});
  return NextResponse.json({ products });
};

export const POST = async (req: NextRequest) => {
  const { name, price } = await req.json();

  const product = await prisma.product.create({
    data: {
      name,
      price,
    },
  });

  return NextResponse.json({ product });
};

export const PATCH = async (req: NextRequest) => {
  const { name, price, id } = await req.json();

  const product = await prisma.product.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      price: Number(price),
    },
  });

  return NextResponse.json({ product });
};

export const DELETE = async (req: NextRequest) => {
  const url = new URL(req.url).searchParams;
  const id = Number(url.get("id")) || 0;
  console.log("id=" + id);
  const product = await prisma.product.delete({
    where: {
      id: id,
    },
  });

  if (!product) {
    return NextResponse.json({ msg: "Error" }, { status: 500 });
  }

  return NextResponse.json({ product });
};
