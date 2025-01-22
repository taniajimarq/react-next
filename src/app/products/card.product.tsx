"use client";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Delete, Settings } from "lucide-react";
import { deleteProduct, Products } from "./products.api";
import Link from "next/link";
import { useRouter } from "next/navigation";



interface ProductProops {
  product: Products;
}

export function ProductsCard({ product }: ProductProops) {

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
              <Delete
                type="button"
                onClick={() => {
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
    </>
  );
}
