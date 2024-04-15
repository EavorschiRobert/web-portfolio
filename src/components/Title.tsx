import React, { useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  inView,
  motion,
  useAnimate,
  useInView,
} from "framer-motion";
import { titles } from "../utils/constants";

let IND = 0

const Title = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [animationStart, setAnimationStart] = useState(false)
  const [word, setWord] = useState<string[]>(titles[0])

  const handleChange = () => {
    let index = titles.indexOf(word)+1
    let newword:string[] = []
    if (index > titles.length-1){
      index = 0
    } 
    newword = titles[index]
    setWord(newword)

  }
  return (
    <div className="flex" ref={ref} key={IND}>
      {word.map((character, i) => (
        <motion.p
          key={`${word}-${i}-`}
          initial={{x: -50+i, opacity: 0, y: -50+i, scale: 2}}
          animate = {isInView && {x: 1*i, opacity: 1, y:1, scale: 1}}
          onAnimationStart={() => setAnimationStart(true)}
          transition={{type: 'spring', bounce: 0.35, repeatType: 'reverse',repeat: 1, repeatDelay: 5, duration: 1, delay: i*0.35}}
          onAnimationIteration={() => console.log("HEY")}
          onAnimationComplete={() => {
            if(animationStart){
              setAnimationStart(false)
              setTimeout(() => {
                handleChange()
              }, 4000)
              }
            }

          }
        >
          {character === ' ' ? ' ' : character}
        </motion.p>
      ))}
    </div>
  );
};

export default Title;
