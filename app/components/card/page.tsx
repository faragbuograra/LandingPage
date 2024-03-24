import React from "react";
import ButtonUi from "../botton/page";

const CardUi = (props: any) => {
  return (
 
    <div className="flex flex-wrap justify-center m-5 h-[419px] min-w-[273px] sm:w-[373px] rounded-[2px]">
    <div className={props.className}>
      <div className={`${props.className == 'bg-[#191AFE]' ? props.className + 'text-white':' bg-white text-white'} rounded-[2px] pt-5 h-full w-full  `}>
        <p className={`${props.className == 'bg-[#191AFE]' ? 'text-white':'  text-black'} text-[30px]  h-[100px] px-5`}>
         {props.title}
         </p>
        <p className={`${props.className == 'bg-[#191AFE]' ? 'text-white':'  text-black'} w-full h-[200px] p-5`}>
        {props.sub}
        </p>
        <div className="p-5">
          <ButtonUi
           
           
          
            name={props.text }
            className={`flex mt-2 justify-center items-center ${props.buttonColor== 'bg-[#ffffff]' ? 'bg-white' : props.buttonColor } w-[145px] h-[54px] sm:h-[45px]  rounded-[2px]  `}
            />
       
        </div>
      </div>
    </div>
  </div>
  );
};

export default CardUi ;
