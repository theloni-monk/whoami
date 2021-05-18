import React, { useState, useLayoutEffect } from "react";
import "./Home.css";
import {
  Grid,
  Box,
  Heading
} from "@primer/components";
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import {isMobile} from 'react-device-detect';
import { Bio, Footer, FixedHeader, Intro, ProjectWidget, NiceBackground, TechWidget } from '../components';


const HomePage = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [bioHeight, setBioHeight] = useState(0);
  const [bodHeight, setBodHeight] = useState(0);
  const [twHeight, setTwHeight] = useState(0);
  const [scrollBlur, setScrollBlur] = useState(0.1);

  //make sure the fixed header doesn't overlap the intro
  useLayoutEffect(() => {
    setHeaderHeight(document.getElementById("head")?.clientHeight as number);
    setBioHeight(document.getElementById('biow')?.clientHeight as number);
    setBodHeight(document.getElementById('bod')?.clientHeight as number - headerHeight);
    setTwHeight(document.getElementById('techw')?.clientHeight as number + 2*(bodHeight/100));
  }, [bodHeight, headerHeight, bioHeight]);


  //blur on scroll
  useScrollPosition(({ prevPos, currPos }) => {
    let relPos = -currPos.y - (bodHeight / 3);
    setScrollBlur(0.1)
    if (relPos > 0) {
      setScrollBlur(2)
    }
  }, [scrollBlur])

  return (
    <div className="App height=100% margin-bottom=50px">
      <FixedHeader/>
      <section id="header">
        
        <NiceBackground blur={scrollBlur} />
      </section>
      <section id="intro">
        <Intro headerOffset={headerHeight} bodHeight={bodHeight} />
      </section>
      <section id="bio" style={{ height: bioHeight }}>
        <Bio />
      </section>
      <section id="projects">
        <Box mt='0' pb='0' p="5%" sx={{ position: 'relative' }}>
          <Heading textAlign="left" fontStyle="italic" fontSize = '5vh' color="white">
            Featured Projects:
            </Heading>
        </Box>
        <Grid gridTemplateColumns={isMobile?"repeat(1,auto)":"50% 50%"} gridGap='5%' p='5%' pb='0' m = '3%' pt = {0} mb='0' mt = {0} justifyItems='center'>
          <ProjectWidget name='RPiStream' image='rpistream.png' isLogo={false} description='Realtime video-streaming library written in python designed to be lightweight enough to run well on a raspberry pi' href='https://pypi.org/project/rpistream/' />
          <ProjectWidget name='MOS 6502 Emulator' image='6502.jpg' isLogo={false} description='An emulator for the iconic MOS 6502 CPU written in C++' href='https://github.com/theloni-monk/YA6502E' />
        </Grid>
      </section>
      <section id='technologies'>
      <Box mt="0" p="5%" sx={{ position: 'relative' }}>
          <Heading textAlign="left" fontStyle="italic" fontSize = '5vh' color="white">
            Technological Proficiencies:
            </Heading>
        </Box>
        <Grid gridTemplateColumns={isMobile?"50% 50%":"33% 33% 33%"} gridGap='5%' justifyItems='center' minHeight={isMobile?'120vw':'80vh'} p='5%'  ml = {0} pt = {0} mt = {0} >
          <TechWidget name='ReactJs' image='react.png' height={twHeight}  href='https://reactjs.org/' />
          <TechWidget name='Python' image='python.jpg' height={twHeight}  href='https://www.python.org/' />
          <TechWidget name='NodeJs' image='nodejs.jpg' height={twHeight}  href='https://nodejs.org/en/' />
          <TechWidget name='C++' image='cpp.jpg' height={twHeight}  href='https://en.cppreference.com/w/cpp/language' />
          <TechWidget name='Raspberry Pi' image='rpi_logo.jpeg' height={twHeight}  href='https://www.raspberrypi.org/' />
          <TechWidget name='Java' image='java.jpg' height={twHeight}  href='https://www.java.com/en/' />
        </Grid>
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;