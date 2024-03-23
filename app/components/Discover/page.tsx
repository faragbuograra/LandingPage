import Image from "next/image";


const Discover = () => {
  return (
    <>
      <div className="w-[100vw] h-[110vh]">
        <div className="flex  flex-wrap  container   mx-1 sm:mx-auto justify-center  overflow-hiden">
          {[10, 5, 10, 6].map((item, index) => (
            <div className=" mb-8 mx-1 sm:mx-5 justify-center w-[200px]">
              <h1 className="text-[50px] sm:text-[50px] font-bold mx-4  leading-snug tracking-tight text-[#2C2C2C]  lg:leading-tight  xl:leading-tight text-center">
                {item}K
              </h1>
              <p className="py-2 text-[14px]  ml-5 leading-normal text-gray-500 ">
                Launched Startups Investment
              </p>
            </div>
          ))}
        </div>
        <div className="container w-[100vw]   mx-auto">
          <div className="flex  flex-wrap justify-center sm:justify-between ">
            <div className="mb-5 w-[full] mx-5  sm:w-[40vw] ">
              <h1 className="text-[30px] sm:text-[50px] font-bold text-center sm:text-left  text-[#2C2C2C]  lg:leading-tight  xl:leading-tight">
                Discover the Rising<br></br>
                Stars We've Backed
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
            <Image
              src={"/diverse-people-working-office 1.png"}
              width="1276"
              height="718"
              className="w-full"
              alt="Hero Illustration"
            />
            <br></br>
            <div className=" flex w-full  overflow-scroll  ">
              <div className="flex  lg:mx-auto lg:justify-center w-[600px] ">
                {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <Image
                    src={index % 2 == 0 ? "/stripe.png" : "/paypal-logo.png"}
                    width={index % 2 == 0 ? "76" : "92"}
                    height={index % 2 == 0 ? "40" : "30"}
                    alt="stripe"
                    className="opacity-50 h-[40px] px-4 mx-4 sm:mx-4 w-96"
                  />
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
                  <div className="w-[22px] h-[22px] my-auto">
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
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.44412 4.00118C3.50004 4.00118 3.55564 4.00118 3.61156 4.00118C6.72517 4.00118 9.83848 4.00087 12.9521 4.00149C13.5603 4.00149 14.0092 4.4409 13.9999 5.02146C13.9914 5.54081 13.5709 5.97397 13.0508 5.99864C12.9883 6.00145 12.9259 6.00051 12.8634 6.00051C9.781 6.00051 6.69893 6.00051 3.61656 6.00051C3.5597 6.00051 3.50316 6.00051 3.40788 6.00051C3.46692 6.06172 3.50316 6.10107 3.54065 6.13855C4.25821 6.85683 4.9764 7.5745 5.69366 8.29278C5.97575 8.5751 6.07602 8.90988 5.95044 9.29276C5.82486 9.67501 5.55839 9.91392 5.15915 9.98419C4.82833 10.0423 4.54311 9.93859 4.30601 9.70156C3.95238 9.34835 3.59906 8.99514 3.24544 8.64162C2.27327 7.66975 1.30392 6.69569 0.327691 5.72788C0.051849 5.4543 -0.0681097 5.13701 0.0387285 4.76569C0.0855873 4.60298 0.17993 4.43496 0.298639 4.31504C1.63255 2.96903 2.97303 1.62928 4.31632 0.29264C4.71368 -0.102417 5.31816 -0.0936726 5.70209 0.295763C6.09945 0.698628 6.10726 1.28856 5.70646 1.69423C4.99296 2.41627 4.27227 3.13143 3.55345 3.84847C3.51316 3.88875 3.46442 3.92061 3.41975 3.95621C3.42787 3.9712 3.436 3.98619 3.44412 4.00118Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>

              <div className="rounded-full h-16 w-16 border-2 flex p-3 relative  bg-[#000000] ">
                <div className="absolute top-[22px] left-[20px]">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5559 5.99882C10.5 5.99882 10.4444 5.99882 10.3884 5.99882C7.27483 5.99882 4.16152 5.99913 1.04791 5.99851C0.439681 5.99851 -0.00922775 5.5591 0.000144005 4.97854C0.00857925 4.45919 0.429059 4.02603 0.949192 4.00136C1.01167 3.99855 1.07415 3.99949 1.13663 3.99949C4.219 3.99949 7.30107 3.99949 10.3834 3.99949C10.4403 3.99949 10.4968 3.99949 10.5921 3.99949C10.5331 3.93828 10.4968 3.89893 10.4594 3.86145C9.74179 3.14317 9.0236 2.4255 8.30634 1.70722C8.02425 1.4249 7.92398 1.09012 8.04956 0.70724C8.17514 0.324987 8.44161 0.0860786 8.84085 0.015811C9.17167 -0.0422764 9.45689 0.0614071 9.69399 0.298442C10.0476 0.651651 10.4009 1.00486 10.7546 1.35838C11.7267 2.33025 12.6961 3.30431 13.6723 4.27212C13.9482 4.5457 14.0681 4.86299 13.9613 5.23431C13.9144 5.39702 13.8201 5.56504 13.7014 5.68496C12.3674 7.03097 11.027 8.37072 9.68368 9.70736C9.28632 10.1024 8.68184 10.0937 8.29791 9.70424C7.90055 9.30137 7.89274 8.71144 8.29354 8.30577C9.00704 7.58373 9.72773 6.86857 10.4465 6.15153C10.4868 6.11125 10.5356 6.07939 10.5802 6.04379C10.5721 6.0288 10.564 6.01381 10.5559 5.99882Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  flex-wrap sm:flex-auto justify-center ml-0 sm:ml-[200px]  sm:justify-between">
            <div className="flex items-center  justify-center mx-auto  sm:mx-5   w-[316px] sm:w-[60vw]">
              <p className="text-[20px] h-full text-justify  leading-normal  ">
                “With Nexus Creative the results are very satisfying. Wrapped
                with Hight quality and innovative design that makes a surge of
                visitors on my Start Up”
              </p>
            </div>
          </div>
          <br></br>
          <div className="flex  container flex-wrap sm:flex-auto  ml-[22px] sm:ml-[13vw]   ">
            <div className="mx-3 my-auto">
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
    </>
  );
};
export default Discover;
