import Image from "next/image";
import Container from "./container";
import ButtonUi from "../botton/page";



const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap justify-between position-relative">
        <div className="flex items-center justify-center w-full sm:w-[700px] ">
          <div className=" mb-8 justify-center mt-[100px] sm:mt-[100px] font-bold">
            <h1 className=" ml-[50px] hidden text-[40px] m-5 font-bold leading-snug tracking-tight text-gray-800 lg:text[70px] lg:leading-tight xl:text-6xl xl:leading-tight sm:text-[40px] dark:text-white lg:flex">
              Welcome<br></br>
              To The Second<br></br>
              Level of the process
            </h1>
            <h1 className="text-[40px]  text-center  sm:text-[38px] dark:text-white lg:hidden line-clamp-4">
              Welcome To<br></br>
               The Second  Level<br></br> 
               of the process
            </h1>
            <p className=" mt-2 ml-[0px] sm:ml-[50px] w-[300px]  sm:w-full text-[18px] text-center sm:text-left  text-white font-medium line-clamp-4">
              Congratulations on Passing The Screening Interview
            </p>
            
            <div className="flex justify-center mt-[80px] sm:mt-5 sm:w-[250px] ">
            <ButtonUi
            bg={"red"}
            bgSize="[1px]"
          
            name={"Get Started"}
            className={`flex mt-2 justify-center items-center bg-white w-[145px] h-[54px] sm:h-[45px]  rounded-[2px]  `}
            />
            </div>
           
           
          </div>
        </div>

        <div className="flex items-center absolute bottom-0 right-0 h-[292px] sm:h-[250px] overflow-hidden">
    <Image
      src={"/hero.png"}
      height={392}
      width={400}
      className="object-cover overflow-hidden transform translate-x-60 sm:translate-x-20"
      alt="Hero Illustration"
      loading="eager"
    />
  </div>
      </Container>
    </>
  );
};
export default Hero;
