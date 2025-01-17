import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { getProducts } from "./products/products.api";
import { Settings } from "lucide-react";

async function Home() {
  const products = await getProducts();
  console.log(products);

  return (
    <>
      <div className="p-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left text-cyan-950">
            Inventario de productos
          </h1>
          <Link
            href="/products/new"
            className="bg-slate-600 text-white py-2 px-4 rounded hover:bg-slate-700"
          >
            Crear nuevo producto
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="flex flex-col h-[600px] justify-between"
            >
              <CardHeader className="flex items-center justify-between gap-2">
                <p className="text-xl font-semibold">
                  {product.name.toUpperCase()}
                </p>
              </CardHeader>
              <hr className="w-full" />
              <CardContent className="flex flex-grow justify-center items-center ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-full h-auto rounded p-5"
                />
              </CardContent>
              <hr className="w-full" />
              <CardFooter className="grid grid-rows grid-flow-col items-start mt-2 w-full ">
                <div className="flex flex-col items-start">
                  <p className="mt-2">{product.description}</p>
                  <p className="text-lg font-semibold mt-2">${product.price}</p>
                </div>
                <div className="flex flex-col justify-center items-end h-full">
                  <Link href="/products/new" className="flex items-end">
                    <Settings className="h-6 w-6 text-gray-500" />
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
