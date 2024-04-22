import Image from "next/image";

import Collections from "../components/Collections";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <>
      <Image
        src="/banner-image.jpg"
        alt="banner"
        width={1200}
        height={600}
        className="w-screen"
      />
      <Collections />
      <ProductList />
    </>
  );
}
