import React from 'react'

function PortfolioItem({ projectUrl, imgUrl, title, stack }) {
  return (
    <a href={projectUrl} className="border-2 border-black rounded-md dark:border-white overflow-hidden hover:border-red-800 dark:hover:border-black">
        <img src={imgUrl} alt="portfolio" className="w-full h-36 md:h-48 object-cover" />
        <div className="w-full p-4">
            <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white">
                {title}
            </h3>
            <p className="flex flex-wrap gap-2 flex-row items-center dark:text-white justify-start text-xs md:text-sm">
                {stack.map(item => (
                    <span key={item} className="inline-block px-2 py-1 rounded-md font-semibold border-2 border-stone-900 dark:border-white">
                        {item.toUpperCase()}
                    </span>
                ))}
            </p>
        </div>
    </a>
  )
}

export default PortfolioItem