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
// Variable que contiene la URL de la API
const urlApi = "http://localhost:3002/api/products/";

/* Crear productos */
export async function createProduct(productData: FieldValues) {
  const res = await fetch(urlApi, {
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
export async function getProducts(): Promise<Products[]> {
  const data = await fetch(urlApi);
  return await data.json();
}

/* Eliminar productos */
export async function deleteProduct(id: number) {
  const resp = await fetch(`${urlApi}${id}`, {
    method: "DELETE",
  });
  return await resp.json();
}

/* Editar productos */
export async function updateProduct(id: number, newProduct: FieldValues) {
  const res = await fetch(`${urlApi}${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
    cache: "no-store",
  });

  return await res.json();
}
