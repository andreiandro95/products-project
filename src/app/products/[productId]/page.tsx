import {pestControlProducts} from "@/utils/products"

export default async function Product({ params }: { params: Promise<{ productId: string }> }) {
    const { productId } = await params;
    const product = pestControlProducts.find(el => el.id === +productId)
  return <div className="text-xl font-bold">{product?.productName}</div>;
}
