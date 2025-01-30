"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  title: string;
}

export const SidebarMenuItems = ({ path, title }: Props) => {
  const currentPath = usePathname();
  return (
    <Link
      href={path}
      className={`
           rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-950
            ${currentPath === path ? "bg-purple-950" : ""}
            `}
    >
    
      <div className="flex flex-col">
        {title}
      </div>
    </Link>
  
  );
};