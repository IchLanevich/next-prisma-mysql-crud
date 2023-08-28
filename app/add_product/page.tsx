"use client";
import API from "@/api/api";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Home() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/");
    await API.createProduct(name, parseInt(price));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div id="formWrapper" className="mt-14 w-full max-w-2xl">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="p-8 bg-slate-100 dark:bg-slate-700 rounded-md"
        >
          <div className="flex flex-col gap-3 inputs">
            <div className="flex flex-col gap-1 form-control">
              <label
                htmlFor="name"
                className="font-medium text-slate-600 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="product_name"
                placeholder="Product Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="px-4 py-2 bg-white border-2 rounded-md focus:ring-2 focus:outline-none text-slate-800 dark:bg-slate-500 dark:text-white dark:focus:ring-slate-300 dark:border-slate-400"
              />
            </div>
            <div className="flex flex-col gap-1 form-control">
              <label
                htmlFor="name"
                className="font-medium m text-slate-600 dark:text-white"
              >
                Price
              </label>
              <input
                type="number"
                id="product_price"
                min={0}
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                placeholder="Product Price"
                className="px-4 py-2 bg-white border-2 rounded-md focus:ring-2 focus:outline-none text-slate-800 dark:bg-slate-500 dark:text-white dark:focus:ring-slate-300 dark:border-slate-400"
              />
            </div>
          </div>
          <button className="w-full px-6 py-3 mt-8 text-white font-semibold bg-blue-400 rounded-md hover:bg-blue-500">
            Add Product
          </button>
        </form>
      </div>
    </main>
  );
}
