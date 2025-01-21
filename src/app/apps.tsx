"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Apps() {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };
  const handleCancel = () => {
    setState(false); // Regresa al estado inicial
  };
  return (
    <>
      <div className="p-10">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end w-full">
            {/* Nombre de la aplicación */}
            <div className="col-span-12 md:col-span-3">
              <label className="block whitespace-nowrap font-medium mb-2">
                Nombre de la aplicación
              </label>
              <Input
                className="w-full border border-gray-300 rounded-md px-4"
                placeholder="Nombre de la aplicación"
              />
            </div>

            {state && (
              <div className="col-span-12 md:col-span-3">
                <label className="block whitespace-nowrap font-medium mb-2">
                  URL de la aplicación
                </label>
                <Input
                  className="w-full border border-gray-300 rounded-md px-4"
                  placeholder="URL de la aplicación"
                />
              </div>
            )}

            {/* Botones */}
            <div className="col-span-12 md:col-span-3 flex flex-col md:flex-row gap-4 justify-start">
              {state ? (
                <>
                  <Button
                    type="button"
                    onClick={handleCancel}
                    className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-300 flex items-center justify-center w-full md:w-[150px]"
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="button"
                    onClick={handleClick}
                    className="bg-primary text-white px-6 py-3 rounded-md hover:bg-blue-900 flex items-center justify-center w-full md:w-[150px]"
                  >
                    Guardar
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    type="button"
                    onClick={handleClick}
                    className="bg-primary text-white px-6 py-3 rounded-md hover:bg-blue-900 flex items-center justify-center w-full md:w-[150px]"
                  >
                    Buscar
                  </Button>
                  <Button
                    type="button"
                    onClick={handleClick}
                    className="text-[#465055] bg-complementary hover:bg-gray-400 px-6 py-3 rounded-md flex items-center justify-center w-full md:w-[150px]"
                  >
                    Crear nueva
                  </Button>
                </>
              )}
            </div>
          </div>
        </form>
        <h1 className="pb-4 text-primary text-lg font-semibold text-center md:text-left mt-7">
          Listado de aplicaciones
        </h1>
        <hr />
      </div>
    </>
  );
}
export default Apps;
