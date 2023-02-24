import React from 'react'

function Intro() {
  return (
    <section id='intro' className="flex items-start justify-start flex-col pt-20 pb-6">
        <div className="text-left">
            <h1 className="text-4xl md:text-5xl dark:text-white mb-1 md:mb-3 font-bold">MDEV</h1>
            <p className="text-base md:text-xl mb-3 font-medium dark:text-white">
                Software engineer | Web Developer
            </p>
            <p className="text-sm max-w-xl mb-6 font-bold dark:text-white">
            As a computer science student with a love for all things tech, I am constantly seeking out new ways to merge my passion for math with my creative side.
            Whether it's building sleek and functional web applications or delving into the world of data analysis, I am always up for a challenge. Outside of my studies, I enjoy staying on top of the latest developments in the tech world and participating in hackathons and other technical events.
            </p>
        </div>
    </section>
  )
}

export default Intro