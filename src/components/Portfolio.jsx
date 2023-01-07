import React from 'react'
import portfolio from '../data/portfolio'
import PortfolioItem from './PortfolioItem'

function Portfolio() {
  return (
    <div className="font-dm flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map(project => (
                <PortfolioItem
                    key={project.title}
                    imgUrl={project.imgUrl}
                    title={project.title}
                    stack={project.stack}
                    projectUrl={project.projectUrl}
                />
            ))}
        </div>
    </div>
  )
}

export default Portfolio