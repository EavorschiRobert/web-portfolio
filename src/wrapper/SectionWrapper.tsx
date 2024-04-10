import React from 'react'
import {motion} from 'framer-motion'

type SectionWrapperProps = {
  idName: string;
}


function SectionWrapper<T extends SectionWrapperProps>(Component: React.ComponentType<T>, idName: string){
  return (props: T) => {
    return (
          <motion.section
            initial="hidden"
            whileInView='show'
            viewport={{once: true, amount: 0.25}}
            className=''
          >
            <span className='w-full h-full' id={idName}>
            <Component {...props}/>
            </span>
          </motion.section>
    )
  }
}


export default SectionWrapper