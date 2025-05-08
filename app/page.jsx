import { Button } from "@/components/ui/button";
import Photo from "@/components/ui/Photo";

import Socials from "@/components/ui/Socials";
import Stats from "@/components/ui/Stats";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Prospecting IT Student</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Oskar Janicki</span>
            </h1>
            <p className=" max-w-[500px] mb-9 text-white/80">
              I'm a student who’s not afraid of challenges and believes every
              line of code brings me closer to my goals. Over the past months,
              I’ve been diving deep into the technologies I’m most passionate
              about — SQL and React. I know them not just in theory, but through
              hands-on projects built with focus and enthusiasm.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-x-10">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 mb-6 xl:mb-0"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-10"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex 
              justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:trainsition-all duration-500 "
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
}
