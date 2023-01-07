import React from 'react'
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'

function Footer() {
  return (
    <section id='intro' className="flex items-center justify-center flex-col pt-20 pb-6">
        <div className="text-center">
            <div className='flex flex-wrap justify-center gap-2'>
                <a href="https://github.com/mumamw8" className='text-black dark:text-white text-[2.5rem]'><AiOutlineGithub /></a>
                <a href="https://www.linkedin.com/in/muma-mutale" className='text-black dark:text-white text-[2.5rem]'><AiFillLinkedin /></a>
            </div>
            <div className="text-stone-400">&copy; 2023 Moorz. All rights reserved</div>
        </div>
    </section>
  )
}

export default Footer