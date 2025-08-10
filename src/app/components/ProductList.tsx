"use client"

import React, { useEffect, useState } from 'react'
import {pestControlProducts, Product} from "@/utils/products"
import { Card,  CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import ChatWithAi from './ChatWithAi';


const ProductList = () => {
  const router = useRouter()
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category") ?? "all";
  const [products,setProducts] = useState<Product[]>(pestControlProducts)
  const [selectedCategory, setSelectedCategory] =
    useState<string>(categoryFromUrl);

  const productCategories = [...new Set(pestControlProducts.map(el => el.category))]

  useEffect(() => {
    let allProducts = pestControlProducts
    if(selectedCategory !== "all"){
      allProducts = pestControlProducts.filter(
        (el) => el.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    setProducts(allProducts)
  },[selectedCategory])
  
  return (
    <>
      <div className="relative">
        <Input
          type="text"
          className="w-96 px-5"
          placeholder="Search product"
          onChange={(e) => {
            if (e.target.value.trim() === "") {
              setProducts(pestControlProducts);
            } else {
              setProducts(
                pestControlProducts.filter((el) =>
                  el.productName
                    .toLowerCase()
                    .includes(e.target.value.trim().toLowerCase())
                )
              );
            }
          }}
        />
        <Search className="absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer" />
      </div>
      <div>
        <select
          value={selectedCategory}
          onChange={e => {
            setSelectedCategory(e.target.value)
            if (e.target.value !== "all") {
              router.push(`?category=${e.target.value}`);
            } else {
              const pathname = window.location.pathname;
              router.push(pathname);
            }
          }}
        >
          <option value="all">All categories</option>
          {productCategories.map((el, index) => (
            <option key={index} value={el}>{el}</option>
          ))}
        </select>
      </div>
      <ChatWithAi />
      <div className="flex gap-2 md:gap-4 flex-wrap">
        {products.map((el, index) => {
          return (
            <Card key={index} className="max-w-52 p-0">
              <CardHeader className="p-0">
                <Image
                  alt="Product image"
                  src={el.imageUrl}
                  width={150}
                  height={150}
                  unoptimized
                  className="w-full"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-1 text-center h-10 truncate-text">
                  <Link href={`/products/${el.id}`}>{el.productName}</Link>
                </CardTitle>
                <div className="font-medium text-center mb-1 h-10">
                  {el.category}
                </div>
                <CardDescription className="mb-2 truncate-text h-15">
                  {el.description}
                </CardDescription>
                <div className="flex justify-between">
                  <span>{el.rating}⭐</span>
                  <span>{el.price}€</span>
                </div>
              </CardContent>
              <CardFooter className="mb-2">
                <button className="py-1 text-center px-2 border w-full rounded-lg flex items-center justify-center font-medium">
                  Add to cart
                </button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default ProductList