import Logo from "../icons/logo/page";
import FooterLogo from "../icons/logo/Footerlogo";
import { ListData } from "./data";

const Footer = (props: any) => {

  //use js to get the current year
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="w-[100vw] bg-[#010521]  h-auto hidden   sm:block">
        <footer className="w-full h-[300px] ">
          <div className="mx-auto w-full max-w-7xl  text-white ">
            <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
              <div className="mt-[50px]">
                <FooterLogo />
                <p className="text-[14px]  mt-2 w-[305px] text-left  leading-normal text-gray-500  ">
                  Non ergo erunt homines deliciis diffluentesendi si quando de
                  amicitia, quam nec usu ntioneha rum fidem atque hominu
                </p>
                <p className="text-[14px] mt-2 w-[305px] h-full text-left  leading-normal text-gray-500  ">
                  © {currentYear} Nexus Creative All rights reserved
                </p>
              </div>

              <div className="grid grid-cols-3 justify-between gap-4 my-6">
                {ListData?.map(({ title, items }) => (
                  <ul key={title}>
                    <h1 className="mb-3 font-medium  text-white">
                      {title}
                    </h1>
                    {items.map((link) => (
                     link == 'Nexus@creative.com' ? (
                        <li key={link}>
                          <h1
                            color="gray"
                            className="py-1.5 font-bold opacity-75 transition-colors hover:text-blue-gray-900 text-[#191AFE]"
                          >
                            {link}
                          </h1>
                        </li>
                      ) : (
                        <li key={link}>
                          <h1
                            color="gray"
                            className="py-1.5 font-normal opacity-75 transition-colors hover:text-blue-gray-900"
                          >
                            {link}
                          </h1>
                        </li>
                      )
                    
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="w-[100vw] bg-[#0C112F]  h-auto block  sm:hidden">
        <div className="flex h-full w-[100vw] pt-5 justify-center  text-center mx-auto">
          <Logo isScrolled={true} />
        </div>

        <h1 className="text-[32px] sm:text-[40px] mt-5  text-center sm:text-center    text-[#ffffff]  lg:leading-tight  leading-10">
          Nexus Creative
        </h1>
        <p className="text-[12px] sm:text-[12px] mt-5  text-center sm:text-center    text-[#ffffff]  lg:leading-tight  leading-10">
          © 2024 Nexus Creative All rights reserved
        </p>
        <br></br>
      </div>
    </>
  );
};
export default Footer;
