
import Image from "next/image";
import ButtonUi from "../botton/page";
import CardUi from "../card/page";
import ContactBox from "./Contact";
import { useState } from "react";

const ContactPart = (props: any) => {
  var isMobile: boolean = false;
  if (typeof window !== "undefined") {
    isMobile = window.innerWidth < 768;
  }
 
  return (
    <>
      <div className="w-[100vw]">
        <div className="flex  px-1 sm:mx-0 sm:items-center  justify-center w-full  overflow-hiden">
          <div className="flex flex-wrapsm:flex-wrap mt-5 overflow-hiden">
            <div className=" mb-8  sm:mx-0 justify-center w-full">
              <h1 className="text-[30px] sm:text-[50px] font-bold text-center sm:text-center   tracking-tight text-[#2C2C2C]  lg:leading-tight  xl:leading-tight">
                Join Our Network <br></br>
                of Forward-Thinking Investors
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap  justify-around gap-4  ">
          <ContactBox
            tilte="Investor Startups"
            image={isMobile ? "/Rectangle.png" : "/RectangleBig1.png"}
            ButtonClassName={
              isMobile
                ? "flex mt-2 justify-center items-center w-[145px] h-[54px] sm:h-[45px]  text-[#ffffff] border-[1px] rounded-[2px] "
                : "flex mt-2 justify-center items-center w-[145px] h-[54px] sm:h-[45px] bg-[#ffffff]  border-[1px] rounded-[2px] text-[#191AFE]"
            }
          />
          <ContactBox
            tilte="Business Scaling"
            image={isMobile ? "/Rectangle.png" : "/RectangleBig2.png"}
            ButtonClassName="flex mt-2 justify-center items-center w-[145px] h-[54px] sm:h-[45px] border-[#ffffff] text-white border-[1px] rounded-[2px]"
          />
        </div>
        <br></br>
        <div className="w-[91vw] bg-[#0C112F] mt-5 justify-around  h-auto py-5 mx-auto">
          <div className="pt-5">
            <h1 className="text-[32px] sm:text-[40px] mt-5  text-center sm:text-center    text-[#ffffff]  lg:leading-tight  leading-10">
              Let’s Get in Touch
            </h1>
          </div>
          <br></br>
          <div className="flex container flex-wrap mx-auto justify-center w-[80vw] sm:w-[60vw]">
            <div className="w-full md:w-1/2 my-2 px-3">
              <input
                className="appearance-none block w-full h-[54px] text-white bg-[#0C112F] opacity-50 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:text-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
            </div>
            <div className="w-full md:w-1/2 my-2 px-3">
              <input
                className="appearance-none block  w-full  h-[54px] text-white bg-[#0C112F] opacity-50 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:text-white"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
       
          
            <div className="w-full  my-2 px-3 ">
              <select
                className="appearance-none block w-full h-[54px] focus:border-gray-500  text-white bg-[#0C112F] opacity-50 border border-gray-500 rounded py-3 px-4 leading-tight focus:text-white "
                id="grid-first-name"
              >
                 <option>Investor Startups</option>
                <option>Investor Startups</option>
                <option>Business Scaling</option>
              </select>
            </div>
         
         
          </div>
          <div className="flex container flex-wrap mx-auto justify-center w-[80vw] sm:w-[60vw]">
          <div className="w-full my-2 px-3 ">
              <textarea
                className="appearance-none block w-full text-left align-top h-[127px] text-white bg-[#0C112F] opacity-50 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:text-white"
                id="grid-first-name"
                placeholder="Jane"
              />
            </div>     </div>
            <div className="flex container flex-wrap mx-auto justify-center sm:justify-start  w-[80vw] sm:w-[60vw]">
         
          <ButtonUi
          textcolor={"text-white"}
          name={"SEND"}
          className="flex  mx-0 sm:mx-3 justify-center items-center w-[122px] h-[54px] sm:h-[45px] bg-[#ffffff] border-[1px] rounded-[2px] text-[#010521]"
        />
         </div>
           </div>
      
      </div>
    </>
  );
};
export default ContactPart;
