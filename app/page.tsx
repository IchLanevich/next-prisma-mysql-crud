"use client";

import ProductList from "@/components/molecule/ProductList";
import Main from "@/components/page/Main";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ProductList />
    </main>
  );
}
