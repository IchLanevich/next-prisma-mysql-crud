import { updateProduct } from "./../../backend/controllers/ProductController";
import axios from "axios";
import { mutate } from "swr";

const API_URL = "http://localhost:4000";

type Product = {
  id: number;
  name: string;
  price: number;
  createdAt: any;
};

type APIType = {
  getProducts: () => Promise<Product[]>;
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
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  },

  getProductById: async (id) => {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
  },

  createProduct: async (name, price) => {
    await axios.post(`http://localhost:4000/products`, {
      name: name,
      price: price,
    });
    mutate("products");
  },

  updateProduct: async (id, name, price) => {
    await axios.patch(`${API_URL}/products/${id}`, {
      name: name,
      price: price,
    });
    mutate("products");
  },

  deleteProduct: async (id) => {
    await axios.delete(`${API_URL}/products/${id}`);
    mutate("products");
  },
};

export default API;
