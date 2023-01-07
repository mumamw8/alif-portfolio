import { useState, useEffect } from 'react'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'

function App() {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])
  

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  // handle switch theme
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  };

  return (
    <div className="App bg-[#dddcae] dark:bg-[#1b1917] h-full">
      <div className="select-none font-lora max-w-5xl w-11/12 mx-auto">
        <Header themeSwitch={handleThemeSwitch} theme={theme} />
        <Intro />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App