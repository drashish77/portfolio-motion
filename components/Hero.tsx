import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'

type Props = {}

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      'Hi, the name is Alex',
      'A Doctor...',
      'An explorer...',
      'A loving husband..',
      'A father...',
      '<But love to code/>'
    ],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <div className='flex flex-col h-screen justify-center items-center space-y-8 text-center overflow-hidden'>
      {/* <Typewriter words={['love you my friend']} /> */}
      <BackgroundCircle />
      <div className='relative  h-32 w-32 mx-auto'>
        <Image
          className='absolute rounded-full'
          src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80'
          alt='profile'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='z-20'>
        <h2 className='uppercase text-sm text-gray-500 tracking-[15px]'>
          Software Engineer
        </h2>
        <h1 className='text-5xl xl:text-6xl font-semibold pt-5 px-10'>
          <span>{text}</span>
          <Cursor cursorColor='orange' />
        </h1>
        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroBtnClass'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroBtnClass'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroBtnClass'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroBtnClass'>Projects</button>
          </Link>
          {/* <button className='heroBtnClass'></button> */}
        </div>
      </div>
    </div>
  )
}

export default Hero
