import Image from "next/image";
import React from "react";
import { SidebarMenuItems } from "./SidebarMenuItems";
import { IoLogoBehance, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

const menuItems = [
    {
      path: "/portafolio",
      title: "Acrca de mi"
    },
    {
      path: "/trayectoria",
      title: "Trayectoria"
    },
    {
        path: "#",
        title: "Portafolio"
      },
  ];

export const Navbar = () => {
  return (
    <>
      <nav className="bg-white drop-shadow-lg">
        {/* color del navbar */}
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                {/* <!--Icon when menu is closed. Menu open: "hidden", Menu closed: "block" --> */}
                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/*  <!--Icon when menu is open. Menu open: "block", Menu closed: "hidden"--> */}

                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {/* <!-- Finish Mobile menu button--> */}
            </div>
            {/* Content menu  */}
            <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-start ">
              <div className="flex shrink-0 items-center">
                <Image
                  src="/logo.png"
                  width={100}
                  height={100}
                  alt="logo ux"
                  className="h-[130px] w-[130px] mt-2"
                />
              </div>
              <div className="hidden sm:ml-6 sm:flex justify-end items-end">
                <div className="flex space-x-4">
                
                    {menuItems.map( item => (
                    <SidebarMenuItems key={item.path} {...item} />
                    ))}

                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <IoLogoInstagram size={30}/> 
              <IoLogoLinkedin size={30}/> 
              <IoLogoBehance size={30}/>
            
            </div>
            {/* Finish content menu */}
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {/*  <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a
              href="#"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Team
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </a>
          </div>
        </div>

      </nav>
    </>
  );
};
