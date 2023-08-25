import API from "@/api/api";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: number;
  createdAt: any;
};

const ProductItem = ({ product }: { product: Product }) => {
  const { id, name, price } = product;

  return (
    <tr key={id} className="bg-white border-b even:bg-slate-100">
      <td className="px-2 py-1 text-center border-r">{id}</td>
      <td className="px-2 py-1 md:px-6 md:py-2 font-medium text-gray-900 border-r">
        {name}
      </td>
      <td className="px-2 py-1 md:px-6 md:py-2 font-medium text-gray-900 border-r">
        {price}
      </td>
      <td className="flex justify-center gap-1 md:gap-4 px-1 py-2 text-center">
        <button className="px-4 py-1 font-medium text-white bg-blue-400 rounded hover:bg-blue-500">
          <Link href={`/edit_product/${id}`} className="">
            Edit
          </Link>
        </button>
        <button
          aria-label="delete button"
          onClick={() => {
            API.deleteProduct(id);
          }}
          className="flex items-center justify-center p-1 bg-red-400 rounded hover:bg-red-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-2xl text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
