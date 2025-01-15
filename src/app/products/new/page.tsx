import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import Image from "next/image";

// Componente Container
const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="w-full px-6 m-12">{children}</div>;
};

// Componente Row
const Row: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <div className="flex flex-wrap">{children}</div>;
};

// Componente Col
const Col: React.FC<{ size: number; children?: React.ReactNode }> = ({
  size,
  children,
}) => {
  return (
    <div
      className={`flex-0 px-2`}
      style={{
        flexBasis: `${(size / 12) * 100}%`,
        maxWidth: `${(size / 12) * 100}%`,
      }}
    >
      <div>
        {children}
      </div>
    </div>
  );
};

function ProductsNewPage() {
  return (
    <div className="flex w-full bg-secondary h-20">
      <Container>
      <Row>
        <Col size={6}>
        <div className="content-center bg-primary h-72">
        {/* Div imagen */}
        <Image
          src="/assets/logoBco.svg"
          width={500}
          height={300}
          alt="Logo SPPJ"
        />
      </div>
        </Col>
        <Col size={6}>
            {/* Div formulario */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle>
              <h1 className="text-secondary">Bienvenido al Inicio de Sesión</h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form> 
              <Label>Product name</Label>
              <Input className="mb-3" />
              <Label>Description</Label>
              <Input className="mb-3" />
              <Label>Price</Label>
              <Input className="mb-3" />
              <Label>Image</Label>
              <Input className="mb-3" />
              <Button className="button text-white bg-secondary hover:bg-slate-500 ">
                Create product
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default ProductsNewPage;
