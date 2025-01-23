"use client";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Trash2, Settings } from "lucide-react";
import { deleteProduct, Products } from "./products.api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ProductDetailPage from "./card.dialog";
import { useState } from "react";

interface ProductProops {
  product: Products;
}

export function ProductsCard({ product }: ProductProops) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  async function handleRemoveProduct(id: number) {
    await deleteProduct(id);
    router.refresh();
  }
  return (
    <>
      <Card
        key={product.id}
        className="flex flex-col h-[600px] justify-between"
      >
        <CardHeader className="flex items-center justify-between gap-2">
          <p className="text-xl font-semibold">{product.name.toUpperCase()}</p>
          <div className="flex flex-col justify-center items-end h-full">
            <Link className="flex items-end" href={""}>
              <Trash2
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveProduct(product.id);
                }}
                className="h-6 w-6 text-gray-500"
              />
            </Link>
          </div>
        </CardHeader>
        <hr className="w-full" />
        <CardContent className="flex flex-grow justify-center items-center ">
          <img
            src={
              product.image && product.image.trim() !== ""
                ? product.image
                : "/assets/sin_imagen.png"
            }
            alt={product.name || "Imagen no disponible"}
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
            {/* <Link href="/products/new" className="flex items-end"> */}
            <Settings
              onClick={() => {
                setIsOpen(true);
              }}
              className="h-6 w-6 text-gray-500 cursor-pointer"
            />
            {/* </Link> */}
          </div>
        </CardFooter>
      </Card>

      <ProductDetailPage
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        product={product}
      />
    </>
  );
}
