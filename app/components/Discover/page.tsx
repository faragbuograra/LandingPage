import Image from "next/image";
import LeftArrow from "../icons/svg/arrow/left";
import RightArrow from "../icons/svg/arrow/right";


const Discover = () => {
  return (
    <>
  
      <div className="h-[120vh] mt-5 ">
        {/* <div className="flex  flex-wrap  container   mx-1 sm:mx-auto justify-center  ">
          {[10, 5, 10, 6].map((item, index) => (
            <div className=" mb-8 mx-1 sm:mx-5 justify-center w-[200px]" key={index}>
                <br></br>
              <h1 className="text-[50px] sm:text-[50px] font-bold mx-4  text-left  leading-snug tracking-tight text-[#2C2C2C]  lg:leading-tight  xl:leading-tight">
                {item}K
              </h1>
              <p className="py-2 text-[14px]  ml-5 leading-normal text-gray-500 ">
                Launched Startups Investment
              </p>
            </div>
          ))}
        </div> */}
        <div className="grid  grid-cols-2 sm:grid-cols-4 container  sm:mx-auto justify-items-center">
  {[10, 5, 10, 6].map((item, index) => (
    <div className="mb-8 mx-2 sm:mx-5 w-[200px]" key={index}>
      <h1 className="text-[50px]  sm:text-[50px] font-bold px-2 text-left leading-snug tracking-tight text-[#2C2C2C] lg:leading-tight xl:leading-tight">
        {item}K
      </h1>
      <p className="py-2 text-[14px] ml-5 mx-2 leading-normal text-gray-500">
        Launched Startups Investment
      </p>
    </div>
  ))}
</div>
        <div className=" flex   justify-center sm:mx-auto">
        <div className="w-[100vw] sm:w-[80vw]">
          <div className="flex  flex-wrap justify-center sm:justify-between ">
            <div className="mb-5  mx-5  sm:w-[40vw] ">
              <h1 className="text-[30px] sm:text-[50px] font-bold text-center sm:text-left  text-[#2C2C2C]  lg:leading-tight  xl:leading-tight">
                Discover the Rising<br></br>
                Stars Weve Backed
              </h1>
            </div>
            <div className="flex items-center justify-center  mx-auto sm:mx-5   w-[280px]">
              <p className="text-[14px] h-full text-left  leading-normal text-gray-500  ">
                Abusus enim multitudine hominum quam tran in rebus diutius
                rexiti ex agrestibus habi itudimnum busus enim multitudine
                hominum quam traisin re bus diutius rexi
              </p>
            </div>
          </div>
          <div className="my-5 sm:my-0">
          <div className="relative h-full w-full rounded-md overflow-hidden ">
  <div className="absolute inset-0  rounded-md "></div>
  <Image
    src={"/diverse-people-working-office 1.png"}
    width="1276"
    height="718"
    className="w-full rounded-md"
    alt="Hero Illustration"
  />
</div>
            <br></br>
            <div className=" flex w-full  overflow-scroll  ">
              <div className="flex  lg:mx-auto lg:justify-center w-[600px] ">
                {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <div key={index}>
    <Image
                  
                  
            
                  src={index % 2 == 0 ? "/stripe.png" : "/paypal-logo.png"}
                  width={index % 2 == 0 ? "76" : "92"}
                  height={index % 2 == 0 ? "40" : "30"}
                  alt="stripe"
                  className="opacity-50 h-[40px] px-4 mx-4 sm:mx-4 w-96"
                />
                  </div>
              
                ))}
              </div>
            </div>
          </div>
          <br></br>
          <div className="flex  flex-wrap justify-center sm:justify-between ">
            <div className="mb-5 w-[full] mx-5  sm:w-[40vw] ">
              <h1 className="text-[30px] sm:text-[50px] font-bold text-center sm:text-left  text-[#2C2C2C]  lg:leading-tight  xl:leading-tight">
                What our Invesors<br></br>
                are saying
              </h1>
            </div>
            <div className="flex items-center justify-center  mx-auto sm:mx-5   w-[280px]">
              <p className="text-[14px] h-full text-left  leading-normal text-gray-500  ">
                Abusus enim multitudine hominum quam tran quillis in rebus
                diutius rexiti ex agrestibus habi itudine homnum bus diutius
                rexit ex agres
              </p>
            </div>
          </div>
          <br></br>
          <div className="flex  flex-wrap sm:flex-auto justify-center sm:justify-between ">
            <div className="mb-5 w-1/2 block sm:flex   ">
              <div className="">
                <Image
                  src={"/straight-quotes 1.png"}
                  width={65}
                  height={65}
                  alt="straight-quotes 1"
                />
              </div>

              <div className="flex mx-0 sm:mx-2">
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <div className="w-[22px] h-[22px] my-auto ml-1" key={index}>
                    <Image
                      src={"/star.png"}
                      width={22}
                      height={22}
                      alt="straight-quotes 1"
                      className="mx-1"
                    />
                  </div>
                ))}
                <h1 className="font-bold mx-3 my-auto">5.0</h1>
              </div>
            </div>
            <div className="mb-5 flex w-[150px] justify-between ">
              <div className="rounded-full h-16 w-16 border-2 flex p-3 relative bg-[#191AFE] ">
                <div className="absolute top-[22px] left-[20px]">
                 <LeftArrow />
                </div>
              </div>

              <div className="rounded-full  h-16 w-16 border-2 flex p-3 relative  bg-[#000000] ">
                <div className="absolute top-[22px] left-[20px]">
              
                  <RightArrow /> 
                </div>
              </div>
            </div>
          </div>
          <div className="flex  flex-wrap sm:flex-auto justify-center ml-0 sm:ml-[50px]  sm:justify-between">
            <div className="flex items-center  justify-center mx-auto  sm:mx-0   w-[316px] sm:w-[60vw]">
              <p className="text-[30px] h-full text-justify  leading-normal  ">
                “With <span className="text-[#191AFE]">Nexus Creative </span>the results are very satisfying. Wrapped
                with Hight quality and innovative design that makes a surge of
                visitors on my Start Up”
              </p>
            </div>
          </div>
          <br></br>
          <div className="flex  container flex-wrap sm:flex-auto  pl-[22px] sm:ml-[3vw]   ">
            <div className="mx-3 my-1">
              <Image
                src={"/profile.png"}
                width={65}
                height={65}
                alt="straight-quotes 1"
              />
            </div>
            <div className="my-auto">
             <h1>
             Moss Smith
             </h1>
             <p>
             Business Manager
              </p>
              </div>
                </div>
        </div>
        </div>
       
      </div>
      <br></br>
    </>
  );
};
export default Discover;
