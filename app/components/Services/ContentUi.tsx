import Image from "next/image";
import React from "react";

const ContentUi = (props: any) => {
  return (
    <div className="flex flex-wrap justify-center m-5 h-[300px] min-w-[273px] sm:w-[392px] sm:h-[320px] rounded-[2px]">
      <div className={props.className}>
        <div className="flex p-5">
          <Image
            src="/increase.png"
            width="78"
            height="78"
            alt="Hero Illustration"
          />
        </div>
        <div className={` rounded-[2px] pt-4   `}>
          <p
            className={`${
              props.className == "bg-[#191AFE]" ? "text-white" : "  text-black"
            } text-[30px] px-5`}
          >
            {props.title}
          </p>
          <p
            className={`${
              props.className == "bg-[#191AFE]" ? "text-white" : "  text-black"
            } w-full h-[95px] p-5`}
          >
            {props.sub}
          </p>
          <div className="p-5"></div>
        </div>
      </div>
    </div>
  );
};

export default ContentUi;
