import React from 'react'
import Header from './Components/header/Header'
import Nav from "./Components/nav/Nav"
import About from "./Components/about/About"

import Contact from "./Components/Contact/Contact"
import Footer from "./Components/footer/Footer"
import Skills from "./Components/skills/Skills"
import Project from "./Components/project/project"
import Desktop from './Components/desktop/NavbarForD'
import GitHubCalendar from 'react-github-calendar'
import GithubStats from './Components/github_stats/GithubStats'
const App = () => {
  return (
    <>

      <Desktop />
      <Header />
      <Nav />
      <About />
      <Skills />
      <GitHubCalendar/>
      <GithubStats/>
      <Project />
      <Contact />
      <Footer />


    </>
  )
}

export default App