import Image from "next/image";
import Link from "next/link";

import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <Link href={`/products/${product._id}`} className="w-[220px] flex flex-col gap-2">
      <Image
        src={product.media[0]}
        alt="product"
        width={250}
        height={100}
        className="h-[250px] rounded-lg object-cover"
      />
      <div>
        <p className="text-base-bold">{product.title}</p>
        <p className="text-small-medium">{product.category}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-body-bold">${product.price}</p>
        <button>
          <FaRegHeart />
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
