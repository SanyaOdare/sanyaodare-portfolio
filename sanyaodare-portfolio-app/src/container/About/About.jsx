import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss';

const About = () => {
  // const [first, setfirst] = useState(second)
  return (
    <>
      <h2 className='head-text'>
        I know that
        <span>Good Design</span>
        means
        <span>Good Business</span>
      </h2>
    </>
  );
}

export default About;
