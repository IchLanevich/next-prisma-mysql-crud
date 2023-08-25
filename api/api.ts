import { POST } from "./../app/api/products/route";
import axios from "axios";
import { mutate } from "swr";

const API_URL = "http://localhost:3000/api";

type Product = {
  id: number;
  name: string;
  price: number;
  createdAt: any;
};

type APIType = {
  getProducts: () => Promise<{ products: Product[] }>;

  getProductById: (id: string) => Promise<Product>;

  createProduct: (name: string, price: string | number) => Promise<void>;

  updateProduct: (
    id: number,
    name: string,
    price: string | number
  ) => Promise<void>;

  deleteProduct: (id: number) => Promise<void>;
};

const API: APIType = {
  getProducts: async () => {
    const response = await axios.get(`/api/products`);

    return response.data;
  },

  getProductById: async (id) => {
    const response = await axios.get(`/api/products?id=${id}`);

    return response.data;
  },

  createProduct: async (name, price) => {
    await axios.post(`/api/products`, {
      name: name,
      price: price,
    });

    mutate("products");
  },

  updateProduct: async (id, name, price) => {
    await axios.patch(`/api/products`, {
      id: id,
      name: name,
      price: Number(price),
    });

    mutate("products");
  },

  deleteProduct: async (id) => {
    await axios.delete(`/api/products?id=${id}`);

    mutate("products");
  },
};

export default API;
