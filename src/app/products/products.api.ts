import { FieldValues } from "react-hook-form";

export interface Products {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  createdAt: string;
  updatedAt: string;
}
/* Crear productos */
export async function createProduct(productData: FieldValues) {
  const res = await fetch("http://localhost:4001/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });
  const data = await res.json();
  console.log(data);
}
/*Consultar productos*/
export async function getProducts():Promise<Products[]> {
  const data = await fetch("http://localhost:4001/api/products");
  return await data.json();
}

/* Eliminar productos */

export async function deleteProduct(id:number) {
  const resp = await fetch(`http://localhost:4001/api/products/${id}`,{
    method: "DELETE",
  });
  return await resp.json();
}
