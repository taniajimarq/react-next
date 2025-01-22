import React from "react";
import Link from "next/link";
import { getProducts } from "./products/products.api";
import { ProductsCard } from "./products/card.product";
//import Login from "./login";
//import Perfil from "./perfil";
//import Apps from "./apps";

async function Home() {
  const products = await getProducts();
  return (
    <>
      <div className="p-10">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductsCard product={product} key={product.id}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
