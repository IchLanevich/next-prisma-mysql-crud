"use client";

import ProductList from "@/components/molecule/ProductList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2">
      <ProductList />
    </main>
  );
}
