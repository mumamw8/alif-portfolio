import React from 'react'

function Contact() {
  return (
    <div className="flex flex-col mt-10 mb-10 mx-auto">
        <div className="flex justify-start items-center">
            <h3 className="bg-black p-[10px] rounded-2xl text-white font-bold text-xs md:text-sm md:p-4 dark:bg-white dark:text-black transition ease-in-out delay-150 hover:scale-95 cursor-pointer">
              <a href = "mailto: thetechepic@gmail.com">
              Contact me
              </a>
              </h3>
        </div>
    </div>
  )
}

export default Contact