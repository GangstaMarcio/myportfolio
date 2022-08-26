import React from 'react'
import ToggleTheme from './components/toggleTheme/ToggleTheme'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { createContext } from 'react'
import { useState } from 'react'

export const ThemeContext = createContext(null);

export const App = () => {

  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    if(theme === 'light'){
      setTheme((e) => (e === 'light' ? 'dark' : 'light'))
    }else {
      setTheme((e) => (e === 'dark' ? 'light' : 'dark'))
    } 
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='App' id={theme}>
        <ToggleTheme onClick={() => toggleTheme()} className={theme === 'light'} />
        <Header />
        <Nav />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App 
