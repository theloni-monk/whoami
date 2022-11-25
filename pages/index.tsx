import React, { useState, useEffect } from "react";
import { Grid, Box, Heading } from "@primer/components";
import { Bio, Footer, FixedHeader, Intro, ProjectWidget, NiceBackground, TechWidget } from '../components';
import * as Images from '../images'


const HomePage = () => {

  const [mobile, setMobile] = useState(false);

  const [headerHeight, setHeaderHeight] = useState(0);
  const [bioHeight, setBioHeight] = useState(0);
  const [bodHeight, setBodHeight] = useState(0);
  const [twHeight, setTwHeight] = useState(0);

  //make sure the fixed header doesn't overlap the intro
  useEffect(() => {
    //TODO: refactor height calcs to css
    setHeaderHeight(document.getElementById("head")?.clientHeight as number);
    setBioHeight(document.getElementById('biow')?.clientHeight as number);
    setBodHeight(document.getElementById('__next')?.clientHeight as number - headerHeight);
    setTwHeight(document.getElementById('techw')?.clientHeight as number + 2 * (bodHeight / 100));
  }, [bodHeight, headerHeight, bioHeight]);


  useEffect(()=>{
    const mobiles = window.matchMedia("(max-width: 480px)");
    console.log('watchmobilesmedia', mobiles);
    setMobile(mobiles.matches);
    console.log("homepage loaded - garblalflarp");
  },[])


  return (
    <div className="App height=100% margin-bottom=50px">
      <FixedHeader isMobile={mobile} />
      <section id="header">
        <NiceBackground />
      </section>
      <section id="intro">
        <Intro headerOffset={headerHeight} bodHeight={bodHeight} isMobile={mobile} />
      </section>
      <section id="bio">
        <Bio isMobile={mobile} />
      </section>
      <section id="projects">
        <Box mt='0' pb='0' p="5%" sx={{ position: 'relative' }}>
          <Heading textAlign="left" fontStyle="italic" fontSize='5vh' color="white">
            Featured Personal Projects:
          </Heading>
        </Box>
        <Grid gridTemplateColumns={mobile ? "repeat(1,auto)" : "50% 50%"} gridGap='5%' p='5%' pb='0' m='3%' pt={0} mb={mobile ? '25%' : 0} mt={0} justifyItems='center'>
          <ProjectWidget name='Julia/Mandelbrot Set Explorer' image={Images.mandelbrot} isLogo={false} description='Have fun exploring the complex pheomena of the Julia/Mandelbrot sets. Written as a WebGL 2.0 shader. Mobile not supported.' href='https://theloni-monk.github.io/Julia-GL/' />
          <ProjectWidget name='WaveSculptr Synthesizer' image={Images.wavescultr} isLogo={false} description='Bored of Sin or Square waves in your synthesizer? Draw your own waveforms and try something new. Mobile not supported.' href='https://theloni-monk.github.io/WaveSculptr_1.0/' />
          <ProjectWidget name='RPiStream' image={Images.rpistream} isLogo={false} description='Realtime video-streaming library written in python designed to be lightweight enough to run well on a raspberry pi' href='https://pypi.org/project/rpistream/' />
          <ProjectWidget name='MOS 6502 Emulator' image={Images.sixfiveohtwo} isLogo={false} description='An emulator for the iconic MOS 6502 CPU written in C++' href='https://github.com/theloni-monk/YA6502E' />
        </Grid>
      </section>
      <section id='technologies'>
        <Box mt="0" p="5%" sx={{ position: 'relative' }}>
          <Heading textAlign="left" fontStyle="italic" fontSize='5vh' color="white">
            Technological Proficiencies:
          </Heading>
        </Box>
        {/**The tech widgets are clipping on true mobile but not when simulated in firefox */}
        <Grid gridTemplateColumns={mobile ? "50% 50%" : "33% 33% 33%"} gridGap='5%' justifyItems='center' minHeight={mobile ? '120vw' : '80vh'} p='5%' ml={0} pt={0} mt={0} >
          <TechWidget name='C++' image={Images.cpp} height={twHeight} href='https://en.cppreference.com/w/cpp/language' />
          <TechWidget name='ReactJs' image={Images.reactpic} height={twHeight} href='https://reactjs.org/' />
          <TechWidget name='Python' image={Images.python} height={twHeight} href='https://www.python.org/' />
          <TechWidget name='NodeJs' image={Images.nodejs} height={twHeight} href='https://nodejs.org/en/' />
          <TechWidget name='Raspberry Pi' image={Images.rpilogo} height={twHeight} href='https://www.raspberrypi.org/' />
          <TechWidget name='Java' image={Images.java} height={twHeight} href='https://www.java.com/en/' />
        </Grid>
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;