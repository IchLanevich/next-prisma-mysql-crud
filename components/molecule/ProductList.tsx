import API from "@/api/api";
import useSWR from "swr";
import ProductItem from "../atomic/ProductItem";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: number;
  createdAt: any;
};

type ProductList = {
  products: Product[];
};

const ProductList = () => {
  const { data, error, isLoading } = useSWR("products", API.getProducts);

  if (error) return <div>Failed to load</div>;

  if (isLoading) {
    return <h1 className="font-semibold tracking-wide">Loading...</h1>;
  }

  const renderTable = (products: Product[] | undefined) => {
    if (!products) {
      return <h1 className="font-semibold tracking-wide">Loading...</h1>;
    }

    return products.map((product) => {
      return <ProductItem key={product.id} product={product} />;
    });
  };

  return (
    <div className="flex flex-col mt-5 w-full items-center justify-center mx-auto">
      <div className="w-full md:max-w-5xl">
        <div className="flex justify-end w-full add-new">
          <Link
            href="/add_product"
            className="px-4 py-2 font-bold text-white bg-green-500 rounded-md hover:bg-green-600"
          >
            Add New Product
          </Link>
        </div>
        <div className="mt-3 rounded-md shadow-sm">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-300 border-b border-gray-400">
              <tr>
                <th className="px-1 py-2 md:py-3 text-center border-r border-gray-400 rounded-tl">
                  Id
                </th>
                <th className="px-3 py-2 md:px-6 md:py-3 border-r border-gray-400">
                  Product Name
                </th>
                <th className="px-3 py-2 md:px-6 md:py-3 border-r border-gray-400">
                  Price
                </th>
                <th className="px-1 py-2 text-center rounded-tr">Action</th>
              </tr>
            </thead>
            <tbody>{renderTable(data?.products)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
