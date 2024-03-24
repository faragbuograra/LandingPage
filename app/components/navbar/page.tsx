"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import ButtonUi from "../botton/page";
import Logo from "../icons/logo/page";
import { Parallax } from "react-scroll-parallax";
import { headerData } from "./data";
import Menu from "../icons/svg/menu/menu";
/**
 *
 *
 * @interface PageItem
 */
interface PageItem {
  inView?: boolean;
  element?: HTMLElement | null;
  page: string;
}

const isInView = (element: HTMLElement | null): boolean => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
};

const scrollTo = (elem: HTMLElement | null): void => {
  if (elem) {
    elem.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
};

const Navbar: React.FC<{}> = ({}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [items, setItems] = useState<PageItem[]>([]);

  const spy = () => {
    const newItems = headerData?.pages.map((id) => {
      const element = document.getElementById(id);
      if (element) {
        return {
          inView: isInView(element),
          element,
          page: id,
        };
      } else {
        return { page: id };
      }
    });
    setItems(newItems);
  };

  useEffect(() => {
    spy();
  }, []);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position
      if (window.scrollY >= window.innerHeight / 1.2) {
      
        setIsScrolled(true);
      } else {
        // Otherwise, set isScrolled to false
        setIsScrolled(false);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <header
      id="mainHeader"
      className={`md:block shadow-md fixed top-0 left-0 w-full z-50 transition-colors duration-300 lg:flex    justify-center
       ${isScrolled == true ? "text-black bg-white" : "text-white"}`}
    >
      <nav className="items-center">
        <div className="hidden lg:flex ">
          <div className="flex justify-around my-5 ">
            <div className="flex items-center ">
              <Logo isScrolled={!isScrolled} />
              <h1
                id="mainHeader"
                className={
                  isScrolled == true ? "text-black mx-2" : "text-white mx-2"
                }
              >
                Nexus Creative
              </h1>
            </div>
            <Parallax scale={[1, 0.5]}>
              <div
                className={
                  isScrolled == false ? "w-[400px]" : " w-[400px] opacity-0 "
                }
              >
                <Image
                  src="/header_bg.png"
                  alt="header_bg"
                  width={500}
                  height={500}
                  className={
                    isScrolled == false
                      ? "w-[25.417vw]  absolute top-0 mx-5 "
                      : "opacity-0 h-0 "
                  }
                ></Image>
              </div>
            </Parallax>
            <div className="flex items-center">
              {items.map((p, i) => (
                <li
                  //hide the underline and . before the text ?
                  className="text-white ml-1 cursor-pointer list-none"
                  key={i}
                  onClick={() => scrollTo(p.element ? p.element : null)}
                >
                  <span
                    className={
                      isScrolled == true ? "text-black mx-2" : "text-white mx-2"
                    }
                    aria-hidden="true"
                  >
                    {p.page}
                  </span>
                </li>
              ))}
              <div className="">
                <ButtonUi
                  name={"Investor Sign In"}
                  className={`flex justify-center items-center ${
                    !isScrolled ? "bg-[#ffffff]" : "bg-[#191AFE]"
                  } w-[145px] h-[45px]  border-none rounded-[2px]  ml-5 ${
                    isScrolled ? " text-white" : "text-[#000000]"
                  } `}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex justify-between  shadow-md fixed top-0 left-0 z-50 transition-colors duration-300  w-[100vw]   lg:hidden items-center px-5  
       ${isScrolled == true ? "text-black bg-white" : "text-white"} ${
            !mobileMenuOpen ? " " : "h-[60px] "
          }`}
        >
          {!mobileMenuOpen ? (
            <div className="md:block p-5">
              <button
                type="button"
                className="border-white rounded-full"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
               <Menu isScrolled={isScrolled } />
              </button>
            </div>
          ) :  null}
          <div
            className={
              isScrolled == false ? "w-[400px]" : " w-[400px] opacity-0 "
            }
          >
            {!mobileMenuOpen ? (
              <Image
                src="/header_bg.png"
                alt="header_bg"
                width={500}
                height={500}
                className={
                  isScrolled == false
                    ? "w-[25.417vw]  absolute top-0 ml-[150px] "
                    : "opacity-0 h-0 "
                }
              ></Image>
            ) : null}
          </div>
          <div>
            <Logo isScrolled={!isScrolled} />
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto  px-6 py-6 sm:max-w-sm sm:ring-1h-full  bg-[#010521] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <span className="sr-only">Nexu</span>

            <button
              type="button"
              className="px-5 rounded-md text-white   hover:text-gray-900  "
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="-my-6 divide-y divide-gray-500/10   mt-5 ">
            <div className="space-y-2 py-6">
              <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between flex-wrap py-4">
                  <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">
                      Nexus Creative
                    </span>
                  </div>
                  <div className="block lg:hidden"></div>
                  <div
                    className="w-full block flex-grow lg:flex lg:items-center lg:w-auto "
                    id="menu"
                  >
                    <div className="text-sm lg:flex-grow">
                      {items.map((p, i) => (
                        <p
                        key={i}
                          onClick={() => {scrollTo(p.element ? p.element : null)
                            setMobileMenuOpen(false)
                          }}
                          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
                        >
                          {p.page}
                        </p>
                      ))}
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
export default Navbar;
