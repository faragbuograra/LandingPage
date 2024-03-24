import Image from "next/image";
import ButtonUi from "../botton/page";
import CardUi from "../card/page";

const  ContactBox = (
  props:any
) => {
  //check if screen is mobile
var isMobile:boolean = false;
  if (typeof window !== "undefined") {
    isMobile = window.innerWidth < 768;
  }


  return (
    <>
      
       
       
        <div className="flex flex-wrap  justify-center ">
          <div className="w-[335px] sm:w-[580px] h-[354px] bg-[#010521] relative">
            <div className="sm:mx-0  justify-center w-full ">
              <h1 className="text-[30px] p-3 sm:text-[32px] sm:mt-5 text-center sm:text-left   tracking-tight text-[#ffffff]  lg:leading-tight  xl:leading-tight">
            {
              props.tilte
            } 
              </h1>
              <p className="py-4 sm:py-1 text-[14px] text-justify sm:text-left sm:w-96 mx-5 leading-normal text-[#ffffff]">
                Nexus Creative provides exclusive investment forindividuals and
                institutions looking to divers ify their . By our network, you
                gain access to a curated selection of high-potential startupss
                eeking funding.
              </p>
              <div className="flex py-3 justify-center w-full items-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-left sm:justify-start sm:flex-row sm:mx-5 ">
                <ButtonUi
                 
                 
                  textcolor={props.ButtonColor}
                  name={'Learn More'}
                  className={props.ButtonClassName}
                />
              </div>
            </div>
            <div className="bg-emerald-700 overflow-hidden ">
          <div className="absolute   bottom-0 right-[0px] sm:right-0  sm:h-[250px] overflow-hidden   ">
            <Image
              src={props.image} 
              height={252}
              width={350}
              className="object-cover w-[50px] h-[180px] sm:w-[300px] sm:h-[250px] "
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
          </div>
          
        </div>
        
      
    </>
  );
};
export default ContactBox;
