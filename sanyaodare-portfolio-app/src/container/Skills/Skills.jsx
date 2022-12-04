import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactToolTip from 'react-tooltip'

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';
// import { AiFillEye, AiFillGithub } from 'react-icons/ai';

const Skills = () => {
  const [experience, setExperience] = useState([])

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query)
      .then((data) => {
        setExperience(data);
      })
      
    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      })
  }, [])

  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {/* {skills.map()} */}
        </motion.div>
      </div>
    </>
  )
}

export default Skills;
