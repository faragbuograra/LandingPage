"use client";
import Image from "next/image";
import ButtonUi from "../botton/page";
import CardUi from "../card/page";
import { motion, useScroll, useTransform } from "framer-motion";

const Page2: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const options = {
    // ease: [[0.7, 0, 0.84, 0], [0.7, 0, 0.84, 0], [0.7, 0, 0.84, 0]]
  };
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [200, 10, 0], options);
  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-100, 10, 100],
    options
  );
  const opacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.8, 1],
    [0.5, 1, 1, 1],
    options
  );
  return (
    <>
    
     
      {/* <div className="hidden sm:block "  style={{ height: "100vh" }}>
        <div className="div2">
          <div className="container">
            <div className="right">
              <motion.div
                style={{
                  x,
                  y,
                  opacity,
                }}
              > */}
                <>
                  <div className="flex flex-wrap-reverse sm:flex-wrap mt-5 overflow-hiden">
                    <div className="flex  mx-3 sm:mx-0 sm:items-center justify-center sm:justify-center w-full lg:w-1/2 overflow-hiden">
                      <div className="relative  w-[305px] sm:w-[470px] h-[439.45px] sm:h-[600.00px] justify-center sm:justify-start overflow-hiden">
                        <Image
                          src={"/page2.png"}
                          width="492"
                          height="658"
                          className={
                            "block w-[330px]  sm:w-[470px] h-[439.45px] sm:h-[600.00px]  bottom-[-30px] right-[-25px] sm:right-[30px]  absolute overflow-hiden"
                          }
                          alt="Hero Illustration"
                          loading="eager"
                        />
                        <div className="absolute inset-1 border-2 border-[#010521]"></div>
                        <div className="absolute w-[235px] h-[239.45px] bottom-[-50px] right-[-50px] border-2 border-blue-500 hidden sm:block"></div>
                      </div>
                    </div>
                    <div className="flex items-center w-full lg:w-1/2">
                      <div className="max-w-2xl mb-8">
                        <h1 className="text-[30px] sm:text-[50px] font-bold text-center leading-snug tracking-tight text-[#2C2C2C]  lg:leading-tight  xl:leading-tight">
                          Join a team where<br></br>
                          innovation is an<br></br>
                          expectation
                        </h1>
                        <p className="py-2 text-[14px] text-center mx-5 leading-normal text-gray-500 ">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industrys standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type specimen
                          book.
                        </p>
                        <p className="py-2 text-[14px] text-center leading-normal px-5 text-gray-500 ">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industrys standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type specimen
                          book.
                        </p>
                        <div className="flex justify-center w-full items-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row ">
                          <ButtonUi
                            textcolor="#ffffff"
                            name="Get Started"
                            className="flex mt-2 justify-center items-center bg-[#191AFE] w-[145px] h-[54px] sm:h-[45px] border-[#010521]  rounded-[2px]   text-white"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <br></br>
                  <br></br>
                  <div className="flex flex-wrapsm:flex-wrap mt-5 overflow-hiden">
                    <div className=" mb-8 mx-5 sm:mx-0 justify-center w-full">
                      <h1 className="text-[30px] sm:text-[50px] font-bold text-left sm:text-center   tracking-tight text-[#2C2C2C]  lg:leading-tight  xl:leading-tight">
                        Cards are an essential <br></br> Element of aclear User
                        Interface
                      </h1>
                    </div>
                  </div>
                  <div className="flex container lg:mx-auto lg:justify-center  overflow-scroll  ">
                    <CardUi
                      title="The First Card"
                      className="bg-[#191AFE]"
                      buttonColor="bg-[#ffffff]"
                      textcolor="#191AFE"
                      text="Learn More"
                      sub="It is a long established fact that a reader will be 
distracted by the readable content of a page when 
looking at its layout. "
                    />
                    <CardUi
                      title="Yet another one"
                      className="bg-gradient-to-br from-[#010521] to-none p-[2px]"
                      buttonColor="bg-[#191AFE]"
                      textcolor="text-white"
                      text="Learn More"
                      sub="The point of using Lorem Ipsum is that it has a 
more-or-less normal distribution of letters, as opposed 
to using 'Content here, content here"
                    />
                    <CardUi
                      title="We really like these"
                      className="bg-gradient-to-br from-[#010521] to-none p-[2px]"
                      buttonColor="bg-[#191AFE]"
                      textcolor="text-white"
                      text="Learn More"
                      sub="making it look like readable English. Many desktop 
publishing packages and web page editors now use 
Lorem Ipsum as their default model text, and a search 
for 'lorem ipsum' will."
                    />
                  </div>
                </>
              {/* </motion.div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Page2;
