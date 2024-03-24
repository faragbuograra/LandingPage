import Image from "next/image";
import React from "react";
import Nextus from "../icons/svg/Nextus/page";
import ContentUi from "./ContentUi";

const ServicesPart = (props: any) => {
  return (
    <div className="bg-[url('/mobilebBackground.png')] h-auto sm:h-[58rem] w-[100vw]  bg-[#191AFE] ">
      {/* <div className="block"> */}
        <div className="flex overflow-hiden">
          <div className="mx-5 sm:m-5 p-0 sm:p-5 justify-center h-[200px] rounded-[2px]">
            <h1 className="text-[30px] sm:text-[50px] font-bold text-left  tracking-tight text-[#ffffff]  lg:leading-tight  xl:leading-tight">
              Get started on your startup<br></br>  journey with the right investments
            </h1>
          </div>
        </div>
        <div className="flex container justify-center ">
          <div className=" hidden sm:flex  w-[40vw] justify-end "><Nextus /></div>
          <div className="flex lg:flex-wrap h-[440px] gap-4  sm:h-[420px] overflow-scroll sm:overflow-visible ">
            {[1, 2, 3, 4].map((item, index) => (
             
                <ContentUi
                  className="bg-white"
                  key={index}
                  title="Increase Value
            for Startup"
                  sub="Abusus enim multitudine hominumq
            am tran quillis in rebus diutius rexit
            ex agrestibus habiitudine hominum"
                />
            
            ))}
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default ServicesPart;
