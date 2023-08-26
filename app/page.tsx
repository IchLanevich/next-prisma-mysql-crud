"use client";

import ProductList from "@/components/molecule/ProductList";
import Main from "@/components/page/Main";

export default function Home() {
  return (
    <Main className="flex min-h-screen flex-col items-center justify-between px-2">
      <ProductList />
    </Main>
  );
}
