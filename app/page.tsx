"use client";
import Navbar from "./components/navbar/page";
import Hero from "./components/hero/page";
import Discover from "./components/Discover/page";
import ServicesPart from "./components/Services/Page";
import ContactPart from "./components/Contact/page";
import Footer from "./components/Footer/page";
import Investors from "./components/Investors/page";

const Home: React.FC = () => {
  return (
    <>
      <div className="App ">
        <div className="bg-[#010521] h-[590px] sm:h-[49rem]">
          <Navbar />
          <section id={"Investors"} className="h-[100vh] sm:h-auto ">
            <Hero />
          </section>
        </div>

        <section id={"Our Story"} className="h-[1600px] sm:h-auto">
          <Investors/>
        </section>

        <section id={"Services"} className="h-[720px] sm:h-auto ">
          <ServicesPart />
        </section>

        <section id={"Discover"} className="h-[1600px] sm:h-[1300px]">
          <Discover />
        </section>
        <section id={"Contact"} className="">
          <ContactPart />
        </section>
        <section id={"Footer"} className="h-[30vh] sm:h-[10vh]">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Home;
