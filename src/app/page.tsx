import Image from "next/image";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start p-2 md:p-4 max-w-[1200px] mx-auto">
      <h1 className="text-xl font-bold">Product list</h1>
      <ProductList />
    </main>
  );
}
