import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

import ProductForm from "./product-form";

function ProductsNewPage() {
  return (
    <>
      {/* Contenido principal */}
      <div className="flex flex-col h-screen bg-white overflow-hidden">
        <div className="flex flex-col md:flex-row flex-grow sm:justify-center max-[576px]:min-[360px]:justify-center">
          {/* Columna izquierda (Imagen) */}
          <div className="flex justify-center items-center w-full md:w-1/2 px-4 sm:mb-[60px] max-[576px]:min-[360px]:mt-8 max-[576px]:min-[360px]:mb-5">
            <Image
              src="/assets/COMPRAS.webp"
              width={600}
              height={400}
              alt="compras"
              className="max-w-full h-auto"
            />
          </div>

          {/* Columna derecha (Formulario) */}
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-4 md:px-8 lg:px-12">
            <Card className="w-full md:w-[750px]">
              <CardHeader>
                <CardTitle>
                  <p className="text-center text-[#5D83A0] text-3xl md:text-3xl font-bold mt-8">
                    Registro de productos
                  </p>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ProductForm/>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsNewPage;
