import React, { useState, useEffect } from "react";
import Image from "next/image";

const pages = ["Investors", "Our Story", "Services", "Contact"];

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

import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ButtonUi from "../botton/page";
import Logo from "../icons/logo/page";

const Navbar: React.FC<{
  selected: number;
  handleClick: () => void;
}> = ({}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [items, setItems] = useState<PageItem[]>([]);

  const spy = () => {
    const newItems = pages.map((id) => {
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
        console.log(isScrolled);
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
      className={`md:block shadow-md fixed top-0 left-0 w-full z-50 transition-colors duration-300 lg:flex   
       ${isScrolled == true ? "text-black bg-white" : "text-white"}`}
    >
      <nav className="items-center">
        <div className="w-[100vw]   hidden lg:flex ">
          <div className="flex justify-around ml-[9.996vw] my-5 ">
            <div className="flex items-center ">
            < Logo isScrolled={!isScrolled}  />
              <h1
                id="mainHeader"
                className={
                  isScrolled == true ? "text-black mx-2" : "text-white mx-2"
                }
              >
                Nexus Creative
              </h1>
            </div>
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
            bg={"red"}
            bgSize="[1px]"
          
            name={"Investor Sign In"}
            className={`flex justify-center items-center bg-[#ffffff] w-[145px] h-[45px]  border-none rounded-[2px]  ml-5 text-black`}
            />
                
              </div>
            </div>
          </div>
        </div>
        <div className=
        {`flex justify-between  shadow-md fixed top-0 left-0 z-50 transition-colors duration-300  w-[99vw]  lg:hidden items-center p-5  
       ${isScrolled == true ? "text-black bg-white" : "text-white"}`}
    >
          <div className="md:block py-5">
            <button
              type="button"
              className="border-white rounded-full"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="29"
                  height="29"
                  rx="14.5"
                  stroke="white"
                />
                <path
                  d="M6 9.16753C6.02297 9.10894 6.04781 9.05128 6.06938 8.99222C6.22922 8.55582 6.63656 8.26097 7.10531 8.25488C7.54453 8.24925 7.98422 8.25347 8.42344 8.25347C13.1578 8.25347 17.8922 8.25347 22.6266 8.25347C23.4427 8.25347 23.7113 8.4391 24 9.20269C24 9.31988 24 9.43707 24 9.55425C23.9602 9.66347 23.9316 9.77832 23.8781 9.8805C23.6742 10.271 23.3466 10.4763 22.9073 10.5021C22.8375 10.5063 22.7667 10.5035 22.6964 10.5035C17.6048 10.5035 12.5138 10.4969 7.42219 10.5114C6.71484 10.5133 6.21984 10.2897 6 9.58941C6 9.44878 6 9.30816 6 9.16753Z"
                  fill="white"
                />
                <path
                  d="M24 15.1799C23.9602 15.2891 23.9316 15.4039 23.8781 15.5061C23.6742 15.8966 23.3466 16.1019 22.9073 16.1277C22.8375 16.1319 22.7667 16.1291 22.6964 16.1291C17.6048 16.1291 12.5138 16.1225 7.42219 16.1371C6.71484 16.1389 6.21984 15.9149 6 15.215C6 15.0744 6 14.9338 6 14.7932C6.02484 14.7294 6.05016 14.6652 6.07453 14.6014C6.23531 14.1819 6.63797 13.895 7.0875 13.8805C7.15781 13.8782 7.22813 13.8796 7.29844 13.8796C12.4078 13.8796 17.5172 13.8796 22.6261 13.8796C23.4412 13.8796 23.7108 14.0661 23.9995 14.8288C24 14.9455 24 15.0627 24 15.1799Z"
                  fill="white"
                />
                <path
                  d="M24 20.8053C23.9602 20.9146 23.9316 21.0294 23.8781 21.1316C23.6742 21.5221 23.3466 21.7274 22.9073 21.7532C22.8375 21.7574 22.7667 21.7546 22.6964 21.7546C17.6048 21.7546 12.5138 21.748 7.42219 21.7625C6.71484 21.7644 6.21984 21.5403 6 20.8405C6 20.6999 6 20.5593 6 20.4186C6.02344 20.3605 6.04781 20.3024 6.06938 20.2433C6.22781 19.8125 6.62953 19.5205 7.08797 19.5055C7.15828 19.5032 7.22859 19.5046 7.29891 19.5046C12.4083 19.5046 17.5177 19.5046 22.6266 19.5046C23.4417 19.5046 23.7113 19.6911 24 20.4538C24 20.571 24 20.6882 24 20.8053Z"
                  fill="white"
                />
              </svg>
            </button>
            </div>
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
                    ? "w-[25.417vw]  absolute top-0 ml-[150px] "
                    : "opacity-0 h-0 "
                }
              ></Image>
            </div>
            <div>
          < Logo isScrolled={!isScrolled}  />
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
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <ul className="flex w-100 h-20 list ma0 pa0-m">
                  {items.map((p, i) => (
                    <li
                      key={i}
                      onClick={() => scrollTo(p.element ? p.element : null)}
                    >
                      <span className="white-90">{p.page}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
export default Navbar;
