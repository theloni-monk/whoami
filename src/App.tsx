import React, { useState, useLayoutEffect } from "react";
import headshot from "./res/headshot.jpg";
import skyline from "./res/skyline.jpg";
import "./App.css";
import {
  Text,
  Grid,
  Box,
  Fixed,
  Header,
  Heading,
  Pagehead,
  UnderlineNav,
  StyledOcticon,
  BorderBox,
} from "@primer/components";
import { MarkGithubIcon } from "@primer/octicons-react";

const App = () => {
  const [headerWidth, setHeaderwidth] = useState(50);
  const [headerHeight, setHeaderHeight] = useState(50);
  
  useLayoutEffect(
    () =>
      {setHeaderwidth(window.innerWidth);
      console.log(headerWidth);
      setHeaderHeight(document.getElementById("head")?.clientHeight as number)},
    [headerWidth, headerHeight]
  );
  return (
    <div className="App height=100% margin-bottom=50px">
      <section id = 'header'>
        <Fixed top={0} width="100%" p={0} zIndex={1} id="head">
        <Header backgroundColor="#101818" p={3}>
          
          <Header.Item>
            <Header.Link
              href="https://github.com/theloni-monk/whoami"
              fontSize={2}
            >
              <StyledOcticon icon={MarkGithubIcon} size={24} mr={2} />
              {headerWidth>500?<span>GitHub for this page</span> :''}
            </Header.Link>
          </Header.Item>
          <Header.Item full>
            {" "}
            <Heading ml={2} fontSize={2}>
              Thelonious Cooper
            </Heading>
          </Header.Item>
          <Header.Item mr={0}>
            {/**todo make responsive with hamburger menue for mobile */}
            <UnderlineNav aria-label="Main">
              <UnderlineNav.Link
                href="#home"
                color="white"
                sx={{ ":hover": { color: "grey" } }}
              >
                Home
              </UnderlineNav.Link>
              <UnderlineNav.Link
                href="#documentation"
                color="white"
                sx={{ ":hover": { color: "grey" } }}
              >
                Links
              </UnderlineNav.Link>
              <UnderlineNav.Link
                href="#support"
                color="white"
                sx={{ ":hover": { color: "grey" } }}
              >
                Contact me
              </UnderlineNav.Link>
            </UnderlineNav>
          </Header.Item>
        </Header>
      </Fixed>
      </section>
      <section id="intro">
        <Box
          sx={{ backgroundImage: "url(" + skyline + ")", minHeight: "100px" }}
          padding={"10%"}
          mt={headerHeight + "px"}
          mb = {0}
        >
          <Heading fontStyle="italic" color="white" fontSize="xxx-large">
            Hi, my name is Theo
          </Heading>
        </Box>
      </section>
      <section id="bio">
        <Box color='white' p="5%" bg = '#182525' sx={{ float: "left", textAlign: "left"}}>
          <Grid gridTemplateColumns="repeat(2, auto)" gridGap={3}>
            <Box>
            <Heading mr="100%" mb="5%" sx={{ float: "left", width: "50%" }}>
              Who am I?
            </Heading>
            <img
              style={{ borderRadius: "20px" }}
              width="80%"
              src={headshot}
              alt="me"
            />
            </Box>
            <Box mr="5%">
              <p style={{textIndent:'1em',fontSize:'3.5vw'}}>
                I am Theo, a Las Vegas transplant from Boston who
                is looking forward to returning to the Greater Boston Area and
                attending MIT. I am currently a Senior in High School and I am passionate about networking and full stack programming, as well as embedded system design.
              </p>
            </Box>
          </Grid>
        </Box>
      </section>
      <section id= "actions">
        <Box mt='5%' p = '5%' >
          <Heading textAlign='right'>Check out my stuff</Heading>
        </Box>
      </section>
      <section id = "footer"></section>
    </div>
  );
};

export default App;
