"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

function Perfil() {

  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  return (
    <>
      {/* Contenido principal */}
      <div className="flex h-screen justify-center p-6 md:p-10">
        <div className="flex flex-col md:flex-row w-full max-w-7xl">
          {/* Columna izquierda (Imagen) */}
          <div className="flex justify-center items-center w-full md:w-1/3 mb-8 md:mb-0">
            <div
              className={`
              bg-primary rounded-full w-64 h-64 md:w-96 md:h-96 flex justify-center items-center
            `}
            >
              {/* Imagen centrada */}
              <Image
                src="/assets/logo_gris.svg"
                width={340}
                height={300}
                alt="Logo SPPJ"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Columna derecha (Formulario) */}
          <div className="flex justify-center items-center w-full p-4 sm:px-6 md:px-8 lg:px-12">
            <Card className="w-full max-w-3xl">
              <CardHeader>
                <CardTitle>
                  <h1 className="pb-4 text-secondary text-lg font-semibold">
                    Mis datos personales
                  </h1>
                  <hr />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="flex flex-col md:flex-row items-center">
                    <label className="whitespace-nowrap font-medium w-full md:w-1/3 mb-2 md:mb-0">
                      Nombre completo
                    </label>
                    <Input
                      className="h-12 w-full"
                      placeholder="Nombre completo del usuario logueado"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row items-center">
                    <label className="whitespace-nowrap font-medium w-full md:w-1/3 mb-2 md:mb-0">
                      Correo electrónico
                    </label>
                    <Input
                      className="h-12 w-full"
                      placeholder="ejemplo@jalisco.gob.mx"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row items-center">
                    <label className="whitespace-nowrap font-medium w-full md:w-1/3 mb-2 md:mb-0">
                      Usuario
                    </label>
                    <Input className="h-12 w-full" placeholder="24562" />
                  </div>
                  <div className="flex flex-col md:flex-row items-center">
                    <label className="whitespace-nowrap font-medium w-full md:w-1/3 mb-2 md:mb-0">
                      Contraseña
                    </label>
                    <Input className="h-12 w-full" placeholder="*****" />
                  </div>
                  {state ? (
                    <div className="flex flex-col md:flex-row items-center">
                      <label className="whitespace-nowrap font-medium w-full md:w-1/2 mb-2 md:mb-0">
                        Confirmar contraseña
                      </label>
                      <Input className="h-12 w-full" placeholder="*****" />
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="flex justify-end mt-5 md:mt-8">
                    
                    {state ? (
                        <div>
                        <Button
                    type="button"
                    onClick={handleClick}
                    className="text-[#465055] bg-complementary mr-2 hover:bg-gray-400 px-6 py-3 rounded-md w-[200px]"
                  >
                    Cancelar
                  </Button> 
                    <Button
                      type="button"
                      onClick={handleClick}
                      className="text-white bg-primary hover:bg-gray-400 px-6 py-3 rounded-md w-[200px]"
                    >
                      Guardar
                    </Button>
                    </div>
                    
                  ) : (
                    <Button
                    type="button"
                    onClick={handleClick}
                    className="text-[#465055] bg-complementary hover:bg-gray-400 px-6 py-3 rounded-md w-[200px]"
                  >
                    Editar
                  </Button>
                  )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Perfil;

