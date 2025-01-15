import  Link  from "next/link";
import { buttonVariants } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="flex justify-between">
      <h1
        className="text-4xl font-bold"
      >
        NextJs NestJs App
      </h1>

      <Link  
        href="/products/new"
        className={buttonVariants()}
      >
        Create product
      </Link>

    </div>
  );
}
