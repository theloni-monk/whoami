import React, { useState, useLayoutEffect } from "react";
import "./Home.css";
import {
  Grid,
  Box,
  Heading
} from "@primer/components";

import {Bio, Footer, FixedHeader, Intro, ProjectWidget} from '../components'


const HomePage = () => {
  const [headerWidth, setHeaderwidth] = useState(50);
  const [headerHeight, setHeaderHeight] = useState(50);

  //make sure the fixed header doesn't overlap the intro
  useLayoutEffect(() => {
    setHeaderwidth(window.innerWidth);
    setHeaderHeight(document.getElementById("head")?.clientHeight as number);
  }, [headerWidth, headerHeight]);

  return (
    <div className="App height=100% margin-bottom=50px">

      <section id="header">
        <FixedHeader headWidth={headerWidth} />
        <Box sx={{ backgroundImage: 'url(' + process.env.PUBLIC_URL+'/res/skyline.jpg)', minHeight: 300, width: '100%', height: '100%', position: 'fixed', zIndex:'0!important'}} />
      </section>
      <section id="intro">
        <Intro headerOffset={headerHeight} />
      </section>
      <section id="bio">
        <Bio />
      </section>
      <section id="projects">
        <Box mt="5%" p="5%">
          <Heading textAlign="left" color="white">
            Featured Projects
            </Heading>
        </Box>
        <Grid gridTemplateColumns="repeat(3, auto)" gridGap={3}>
          WRITEME: project widget section
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