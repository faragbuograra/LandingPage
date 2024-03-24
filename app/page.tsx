"use client";
import Image from "next/image";
import Navbar from "./components/navbar/page";

import Hero from "./components/hero/page";
import Page2 from "./components/Investors/page";

import Discover from "./components/Discover/page";
import ServicesPart from "./components/Services/Page";
import ContactPart from "./components/Contact/page";
import Footer from "./components/Footer/page";

const Home: React.FC = () => {
  return (
    <>
      <div className="App ">
        <div className="bg-[#010521]  h-[100vh] ">
          <Navbar />
          <section id={"Investors"} className="h-[100vh] sm:h-auto ">
            <Hero />
          </section>
        </div>

        <section id={"Our Story"} className="h-[170vh] sm:h-auto">
          <Page2 />
        </section>

        <section id={"Services"} className="h-[80vh] sm:h-auto ">
          <ServicesPart />
        </section>

        <section id={"Discover"} className="min-h-[1400px] sm:h-auto">
          <Discover />
        </section>
        <section id={"Contact"} className="">
          <ContactPart />
        </section>
        <section id={"Footer"} className="h-[50vh] sm:h-[30vh]">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Home;
