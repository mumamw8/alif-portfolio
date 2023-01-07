import React from 'react'
import { BsMoonFill, BsSun } from 'react-icons/bs'

function Header({ themeSwitch, theme }) {
  return (
    <div className="text-xl text-black w-full flex flex-wrap items-end justify-end pt-2">
      <button onClick={themeSwitch} className="bg-yellow-200 p-4 rounded-3xl">{document.documentElement.classList.contains("dark") ? <BsSun /> : <BsMoonFill />}</button>
    </div>
  )
}

export default Header