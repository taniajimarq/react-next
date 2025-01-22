"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";

function Perfil() {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };
  const handleCancel = () => {
    setState(false); // Regresa al estado inicial
  };

  return (
    <>
      {/* Contenido principal */}
      <div className="flex flex-col md:flex-row h-screen justify-center items-center p-6 md:p-10">
        {/* Columna izquierda (Imagen) */}
        <div className="flex justify-center items-center w-full md:w-1/3 mb-8 md:mb-0">
          <div className="bg-primary rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 flex justify-center items-center">
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
          <Card className="w-full max-w-lg sm:max-w-xl md:max-w-3xl">
            <CardHeader>
              <CardTitle>
                <h1 className="pb-4 text-secondary text-lg font-semibold text-center md:text-left">
                  Mis datos personales
                </h1>
                <hr />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                {/* Campos del formulario */}
                {[
                  { label: "Nombre completo", placeholder: "Nombre completo del usuario logueado" },
                  { label: "Correo electrónico", placeholder: "ejemplo@jalisco.gob.mx" },
                  { label: "Usuario", placeholder: "24562" },
                  { label: "Contraseña", placeholder: "*****" },
                ].map(({ label, placeholder }) => (
                  <div key={label} className="flex flex-col md:flex-row items-center">
                    <label className="whitespace-nowrap font-medium w-full md:w-1/3 mb-2 md:mb-0">
                      {label}
                    </label>
                    <Input className="h-12 w-full" placeholder={placeholder} />
                  </div>
                ))}
                {/* Confirmar contraseña (si está activado) */}
                {state && (
                  <div className="flex flex-col md:flex-row items-center">
                    <label className="whitespace-nowrap font-medium w-full md:w-1/3 mb-2 md:mb-0">
                      Confirmar contraseña
                    </label>
                    <Input className="h-12 w-full" placeholder="*****" />
                  </div>
                )}
                {/* Botones */}
                <div className="flex flex-col md:flex-row justify-end gap-2 mt-5 md:mt-8">
                  {state ? (
                    <>
                      <Button
                        type="button"
                        onClick={handleCancel}
                        className="text-[#465055] bg-complementary hover:bg-gray-400 px-6 py-3 rounded-md w-full md:w-[200px]"
                      >
                        Cancelar
                      </Button>
                      <Button
                        type="button"
                        onClick={handleClick}
                        className="text-white bg-primary hover:bg-blue-700 px-6 py-3 rounded-md w-full md:w-[200px]"
                      >
                        Guardar
                      </Button>
                    </>
                  ) : (
                    <Button
                      type="button"
                      onClick={handleClick}
                      className="text-[#465055] bg-complementary hover:bg-gray-400 px-6 py-3 rounded-md w-full md:w-[200px]"
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
    </>
  );
}

export default Perfil;
