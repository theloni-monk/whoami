import React, { useState, useEffect } from "react";
import { Grid, Box, Heading } from "@primer/components";
import { Bio, Footer, FixedHeader, Intro, ProjectWidget, NiceBackground, TechWidget } from '../components';
import * as Images from '../images'
//TODO: refactor isMobile to be provided via context
const HomePage = (props: { isMobile: boolean }) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [bioHeight, setBioHeight] = useState(0);
  const [bodHeight, setBodHeight] = useState(0);
  const [twHeight, setTwHeight] = useState(0);

  //make sure the fixed header doesn't overlap the intro
  useEffect(() => {
    setHeaderHeight(document.getElementById("head")?.clientHeight as number);
    setBioHeight(document.getElementById('biow')?.clientHeight as number);
    setBodHeight(document.getElementById('__next')?.clientHeight as number - headerHeight);
    setTwHeight(document.getElementById('techw')?.clientHeight as number + 2 * (bodHeight / 100));
  }, [bodHeight, headerHeight, bioHeight]);

  useEffect(() => {
    console.log('props.isMobile:', props.isMobile)
  }, [props]);

  return (
    <div className="App height=100% margin-bottom=50px">
      <FixedHeader isMobile={props.isMobile} />
      <section id="header">
        <NiceBackground />
      </section>
      <section id="intro">
        <Intro headerOffset={headerHeight} bodHeight={bodHeight} isMobile={props.isMobile} />
      </section>
      <section id="bio">
        <Bio isMobile={props.isMobile} />
      </section>
      <section id="projects">
        <Box mt='0' pb='0' p="5%" sx={{ position: 'relative' }}>
          <Heading textAlign="left" fontStyle="italic" fontSize='5vh' color="white">
            Featured Projects:
          </Heading>
        </Box>
        <Grid gridTemplateColumns={props.isMobile ? "repeat(1,auto)" : "50% 50%"} gridGap='5%' p='5%' pb='0' m='3%' pt={0} mb={props.isMobile ? '25%' : 0} mt={0} justifyItems='center'>
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
        <Grid gridTemplateColumns={props.isMobile ? "50% 50%" : "33% 33% 33%"} gridGap='5%' justifyItems='center' minHeight={props.isMobile ? '120vw' : '80vh'} p='5%' ml={0} pt={0} mt={0} >
          <TechWidget name='ReactJs' image={Images.reactpic} height={twHeight} href='https://reactjs.org/' />
          <TechWidget name='Python' image={Images.python} height={twHeight} href='https://www.python.org/' />
          <TechWidget name='NodeJs' image={Images.nodejs} height={twHeight} href='https://nodejs.org/en/' />
          <TechWidget name='C++' image={Images.cpp} height={twHeight} href='https://en.cppreference.com/w/cpp/language' />
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
export async function getServerSideProps(context) {
  //console.log(context.req.headers['user-agent'])
  let mobileAgents = context.req.headers['user-agent'].match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
  let mobile = mobileAgents?.length > 0;
  return (
    {
      props: { isMobile: mobile } // will be passed to the page component as props
    });
}

export default HomePage;