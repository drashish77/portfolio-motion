import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

const About = (props: Props) => {
  return (
    <div className='h-screen flex flex-col text-center relative md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        about
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        // viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        // width={400}
        // height={400}
        src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
        alt='profile pic'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
      />
    </div>
  )
}

export default About
