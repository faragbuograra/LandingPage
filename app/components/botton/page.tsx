import React from "react";

const ButtonUi = (props: any) => {
  return (
 
    <div
      className={
        props.className 
      }
    >
      <span
        className={
          "text-[" + props.textcolor + "] text-[14px] cursor-pointer p-5"
        }
        aria-hidden="true"
      >
        {props.name}
      </span>
    </div>
  );
};

export default ButtonUi;
