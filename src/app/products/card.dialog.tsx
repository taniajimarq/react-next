import React from "react";

import {
  AlertDialog,
  
  AlertDialogContent,
  AlertDialogDescription,
  
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Products } from "./products.api";
import ProductForm from "./new/product-form";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  product: Products;
}

function ProductDetailPage({ isOpen, onClose, product }: Props) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle asChild>
            <div className="flex justify-between">
              <div>Edición de productos</div>
              <button>PRUEBA</button>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <ProductForm product={product} onClose={onClose}/>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
export default ProductDetailPage;
