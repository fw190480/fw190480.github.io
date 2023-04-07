import React from 'react'
import "./skills.css"
import { Box } from '@chakra-ui/react'

import {style} from "../../utils/styles"
import { AiFillHtml5 } from "react-icons/ai"
import { TbBrandCss3 } from "react-icons/tb"
import { TbBrandJavascript } from "react-icons/tb"
import { FaReact } from "react-icons/fa"
import { SiChakraui } from "react-icons/si"
import { DiNodejs } from "react-icons/di"
import { SiExpress } from "react-icons/si"
import { SiRedux } from "react-icons/si"
import { DiMongodb } from "react-icons/di"
import { SiRedis } from "react-icons/si"
import { SiTypescript } from "react-icons/si"
import { AiFillGithub } from "react-icons/ai"
import { SiPostman } from "react-icons/si"
import { FaLinux } from "react-icons/fa"

import {Heading } from '@chakra-ui/react'
import SkillCard from './SkillCard'


const Skills = () => {
  const frontend = [
    {ReactIcon:AiFillHtml5,value:70,text:"HTML5"},
    {ReactIcon:TbBrandCss3,value:70,text:"CSS3"},
    {ReactIcon:TbBrandJavascript,value:95,text:"JAVASCRIPT"},
    {ReactIcon:FaReact,value:85,text:"REACTJS"},
    {ReactIcon:SiChakraui,value:60,text:"CHAKRAUI"},
    {ReactIcon:SiRedux,value:80,text:"REDUX"},
    {ReactIcon:SiTypescript,value:60,text:"TYPESCRIPT"},
  ]
  const backend = [
    {ReactIcon:SiTypescript,value:60,text:"TYPESCRIPT"},
    {ReactIcon:DiNodejs,value:70,text:"NODEJS"},
    {ReactIcon:SiExpress,value:70,text:"EXPRESS"},
    {ReactIcon:DiMongodb,value:95,text:"MONGODB"},
    {ReactIcon:SiRedis,value:85,text:"REDIS"}
  ]
  const tools = [
    {ReactIcon:SiPostman,value:70,text:"POSTMAN"},
    {ReactIcon:AiFillGithub,value:85,text:"GITHUB"},
    {ReactIcon:FaLinux,value:50,text:"LINUX"}
    ]
  return (
    <div id="skills">
      <Heading textAlign={"left"} textTransform={"uppercase"} color={style.orange_color} pl="2rem" >Technical Skills</Heading>
      <Heading color={style.heading_1} pt="2rem" textAlign="center" pl="1rem" >FRONTEND</Heading>
      <Box className="skill_container" mt="1rem">
          {frontend.map(({ReactIcon,value,text},index)=>(
            // FRONTEND
            <SkillCard key={index} ReactIcon={ReactIcon} value={value} text={text} />
          ))}
      </Box>

      {/* BACKEND */}
      <Heading color={style.heading_1} mt="3rem" textAlign="center" pl="1rem" >BACKEND</Heading>
      <Box className="skill_container" mt="1rem">
      {backend.map(({ReactIcon,value,text},index)=>(
            <SkillCard key={index} ReactIcon={ReactIcon} value={value} text={text} />
          ))}

      </Box>
      {/* TOOLS  */}

      <Heading color={style.heading_1} mt="3rem" textAlign="center" pl="1rem" >TOOLS</Heading>
      <Box className="skill_container" mt="1rem">
      {tools.map(({ReactIcon,value,text},index)=>(
            <SkillCard key={index} ReactIcon={ReactIcon} value={value} text={text} />
          ))}
      </Box>
    </div>
  )
}

export default Skills