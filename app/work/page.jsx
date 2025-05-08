"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fronted",
    title: "Wyszukiwarka Państw - REST Countries API",
    description:
      "Aplikacja umożliwia przeglądanie, filtrowanie i szczegółowe sprawdzanie informacji o państwach z całego świata przy użyciu publicznego API. Projekt został zbudowany w czystym JavaScript z wykorzystaniem fetch() do pobierania danych z REST Countries API.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      {
        name: "JavaScript (ES6+)(To mój stary projekt)",
      },
      { name: "REST Countries API" },
    ],
    image: "/assets/work/WyszukajPanstwo.png",
    live: "https://countries-rest-api-iota.vercel.app/",
    github: "https://github.com/ojoj00/Countries-REST-Api",
  },

  {
    num: "02",
    category: "fronted",
    title: "MemoryGame",
    description:
      "Memory Game Aplikacja umożliwia zabawę w klasyczne memory game czyli znalezienie 2 takich samych kart",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "JavaScript (ES6+)(To mój stary projekt)" },
    ],
    image: "/assets/work/MemoryGame.png",
    live: "https://memory-game-chi-blue.vercel.app/",
    github: "https://github.com/ojoj00/MemoryGame",
  },

  {
    num: "03",
    category: "fronted",
    title: "Calculator",
    description:
      "Kalkulator aplikacja ta pozwala na wykonanie podstawowych działań matematycznych ",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "JavaScript (ES6+)(To mój stary projekt)" },
    ],
    image: "/assets/work/Kalkulator.png",
    live: "https://simple-calculator-iota-rosy.vercel.app/",
    github: "https://github.com/ojoj00/SimpleCalculator",
  },
];

const work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                Project: {project.title}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-xl text-accent whitespace-nowrap"
                    >
                      {item.name}
                      {/*remove the last coma*/}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                <a href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent cursor-pointer" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </a>
                <a href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent cursor-pointer" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[360px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-contain"
                          alt="PhotoImage"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-25 z-20 
              w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all cursor-pointer"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default work;
