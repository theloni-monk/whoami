import React, { useState, useLayoutEffect } from "react";
import "./Home.css";
import {
  Grid,
  Box,
  Heading
} from "@primer/components";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import {isMobile} from 'react-device-detect'


import { Bio, Footer, FixedHeader, Intro, ProjectWidget } from '../components'


const HomePage = () => {
  const [headerWidth, setHeaderwidth] = useState(50);
  const [headerHeight, setHeaderHeight] = useState(50);
  const [bioHeight, setBioHeight] = useState(50);
  const [bodHeight, setBodHeight] = useState(50);
  const [scrollBlur, setScrollBlur] = useState(0);

  //make sure the fixed header doesn't overlap the intro
  useLayoutEffect(() => {
    setHeaderwidth(window.innerWidth);
    setHeaderHeight(document.getElementById("head")?.clientHeight as number);
    setBioHeight(document.getElementById('biow')?.clientHeight as number);
    setBodHeight(document.getElementById('bod')?.clientHeight as number - headerHeight);
  }, [bodHeight, headerWidth, headerHeight, bioHeight]);


  //blur on scroll
  useScrollPosition(({ prevPos, currPos }) => {
    let relPos = -currPos.y - (bodHeight / 3);
    setScrollBlur(0)
    if (relPos > 0) {
      console.log(relPos)
      setScrollBlur(2)
    }
  }, [scrollBlur])

  return (
    <div className="App height=100% margin-bottom=50px">

      <section id="header">
        <FixedHeader headWidth={headerWidth} />
        <Box sx={{
          overflow: 'hidden',
          position: 'fixed', zIndex: '0!important',
          filter: 'blur(' + scrollBlur + 'px)',
          height:'100%',
          transition: '0.2s',
          transform:'scale(1.1)'
        }}>
          <img src={process.env.PUBLIC_URL + '/res/skyline_sharp.jpg'} alt='vegas skyline' style={{minHeight: 300, height: '100%'}}/>
        {/**TODO: get higher-res image */}
        </Box>
      </section>
      <section id="intro">
        <Intro headerOffset={headerHeight} bodHeight={bodHeight} />
      </section>
      <section id="bio" style={{ height: bioHeight }}>
        <Bio />
      </section>
      <section id="projects">
        <Box mt="5%" p="5%" sx={{ position: 'relative' }}>
          <Heading textAlign="left" fontStyle="italic" fontSize = '5vh' color="white">
            Featured Projects:
            </Heading>
        </Box>
        <Grid gridTemplateColumns={isMobile?"repeat(1,auto)":"50% 50%"} gridGap='5%' p='5%' m = '3%' pt = {0} mt = {0} justifyItems='center'>
          <ProjectWidget name='RPiStream' image='rpistream.png' isLogo={false} description='Realtime video-streaming library written in python designed to be lightweight enough to run well on a raspberry pi' href='https://pypi.org/project/rpistream/' />
          <ProjectWidget name='MOS 6502 Emulator' image='6502.jpg' isLogo={false} description='An emulator for the iconic MOS 6502 CPU written in C++' href='https://pypi.org/project/rpistream/' />

        </Grid>
      </section>
      <section id='technologies'>
        WRITEME: technologies section
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;