"use client";

import { motion } from "motion/react"
import {AnimatePresence} from "motion/react"
import { usePathname } from "next/navigation";
const PageTransition = ({children}) => {
    const pathname = usePathname();
  return <AnimatePresence>

    <div key={pathname}>
        <motion.div initial={{opacity: 1}} 
        animate={{opacity: 0, 
                tranisition: {delay:1, duration: 0.4, ease: "easeInOut"}
        }}
        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        />
    </div>


      {children}
    </AnimatePresence>
}

export default PageTransition
