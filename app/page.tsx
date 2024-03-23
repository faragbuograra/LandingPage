"use client";
import Image from "next/image";
import Navbar from "./components/header/page";
import React, { useState } from "react";

import { contentList } from "./data/content-list";
import Hero from "./components/hero/page";
import Page2 from "./components/Investors/page";

import { motion, useViewportScroll, useTransform } from "framer-motion";
import Discover from "./components/Discover/page";
import ServicesPart from "./components/Services/ContentUi";


const Home: React.FC = () => {
  const [selected, setSelection] = useState<number>(0);
  const handleClick = (i: number) => setSelection(i);
  const { scrollYProgress } = useViewportScroll();
  const options = {
    // ease: [[0.7, 0, 0.84, 0], [0.7, 0, 0.84, 0], [0.7, 0, 0.84, 0]]
  };
  const x = useTransform(scrollYProgress, [0, 0.7, 1], [200, 10, 0], options);
  const y = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [-100, 10, 100],
    options
  );
  const opacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.9, 1],
    [0, 1, 1, 0],
    options
  );

  return (
    <>
      <div className="App ">
        <div className="bg-[#010521]">
          <Navbar selected={selected} handleClick={() => handleClick} />
          <br></br> <br></br>
          <section id={"Investors"} className="h-[94vh] ">
            <Hero />
          </section>
        </div>
        <br></br> <br></br>
        <section id={"Our Story"} className="h-[170vh] sm:h-[180vh]">
          <div className="lg:hidden">
            <Page2 />
          </div>
         
          <main className="hidden sm:block div1">
            <div className="hidden sm:block div1" />
            <div style={{ height: "100vh" }}>
              <div className="div2">
                <div className="container">
                  <div className="right">
                    <motion.div
                      style={{
                        x,
                        y,
                        opacity,
                      }}
                    >
                      <Page2 />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div3" />
          </main>
        </section>
        <section
          id={"Services"}
          className="h-[120vh] bg-[#191AFE]"
        >
          <ServicesPart />
        </section>
        <br></br>
        <br></br>
        <section id={"Discover"} className="">
          <Discover />
        </section>
      </div>
    </>
  );
};

export default Home;
interface InputProps {
  children: string;
  value: number;
  set: (newValue: number) => void;
  min?: number;
  max?: number;
}

export function Input({
  value,
  children,
  set,
  min = -200,
  max = 200,
}: InputProps) {
  return (
    <label>
      <code>{children}</code>
      <input
        value={value}
        type="range"
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value))}
      />
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value) || 0)}
      />
    </label>
  );
}
