import React from 'react'
import "./about.css"
import ME from "../../assects/template.jpg";
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="another image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Expereince</h5>
              <small>3+ Years Experience</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>200 world wide</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Project</h5>
              <small>88+ project completed</small>
            </article>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut harum ullam deleniti incidunt ab excepturi, quasi quos obcaecati nostrum expedita quas atque neque soluta, eligendi voluptates amet possimus, voluptas nisi!</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About