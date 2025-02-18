import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import Image from "next/image";   
    
    export const Login = () => {
      return (
        <div>
      {/* Contenido principal */}
      <div className="flex flex-col h-screen bg-white overflow-hidden">
        {/* Encabezado */}
        <header className="flex justify-center bg-secondary py-4 h-20" />

        <div className="flex flex-col md:flex-row flex-grow sm:justify-center max-[576px]:min-[360px]:justify-center">
          {/* Columna izquierda (Imagen) */}
          <div className="flex justify-center items-center w-full md:w-1/2 px-4 sm:mb-[60px] max-[576px]:min-[360px]:mt-8 max-[576px]:min-[360px]:mb-5">
            <div
              className={`
                p-10 bg-primary h-36 flex justify-center items-center 
                md:h-72 w-full md:w-[750px] md:p-20
                sm:h-[14rem] 
                max-[576px]:min-[360px]:w-80
                `}
            >
              <Image
                src="/assets/logoBco.svg"
                width={500}
                height={300}
                alt="Logo SPPJ"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Columna derecha (Formulario) */}
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-4 md:px-8 lg:px-12">
            <Card className="w-full max-w-md md:w-[550px]">
              <CardHeader>
                <CardTitle>
                  <h1 className="text-center text-secondary text-2xl md:text-3xl font-semibold p-2 md:p-4 mt-5 md:mt-10">
                    Bienvenido al
                  </h1>
                  <p className="text-center text-secondary text-3xl md:text-4xl font-bold">
                    Inicio de Sesión
                  </p>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="p-3 md:p-5">
                  <Label className="text-secondary font-medium">
                    Usuario o número de empleado
                  </Label>
                  <Input
                    className="mt-2 md:mt-3 mb-3 md:mb-5 border border-gray-300 rounded-md px-3 md:px-4 py-2"
                    placeholder="Ingresa tu usuario"
                  />
                  <Label className="text-secondary font-medium">
                    Contraseña
                  </Label>
                  <Input
                    className="mt-2 md:mt-3 mb-3 md:mb-5 border border-gray-300 rounded-md px-3 md:px-4 py-2"
                    placeholder="Ingresa tu contraseña"
                    type="password"
                  />
                  <div className="flex justify-center mt-5 md:mt-8">
                    <Button className="text-white bg-secondary hover:bg-gray-400 px-4 md:px-6 py-2 rounded-md w-[150px] md:w-[200px]">
                      Iniciar Sesión
                    </Button>
                    <Link href="/products/new" className={buttonVariants()}>
                      Create product
                    </Link>
                  </div>
                </form>
                <div className="flex mt-3 md:mt-5 justify-center items-center">
                  <Image
                    src="/assets/logo_jalisco.svg"
                    width={50}
                    height={50}
                    alt="Logo SPPJ"
                    className="max-w-full h-auto"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex h-16 md:h-20 justify-center bg-secondary py-3 md:py-4" />
      </div>
    </div>
      )
    }
    export default Login;