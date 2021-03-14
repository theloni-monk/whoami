import React, { useState, useLayoutEffect } from "react";
import headshot from "./res/headshot.jpg";
import skyline from "./res/skyline.jpg";
import "./App.css";
import {
  Grid,
  Box,
  Fixed,
  Header,
  Heading,
  UnderlineNav,
  StyledOcticon,
} from "@primer/components";
import { MarkGithubIcon } from "@primer/octicons-react";

const THeader = (props: { headWidth: number }) => {
  return (<Fixed top={0} width="100%" p={0} zIndex={10} id="head">
    <Header backgroundColor="#101818" p={3}>
      <Header.Item>
        <Header.Link
          href="https://github.com/theloni-monk/whoami"
          fontSize={2}
        >
          <StyledOcticon icon={MarkGithubIcon} size={24} mr={2} />
          {props.headWidth > 500 ? <span>GitHub for this page</span> : ""}
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
  </Fixed>);
}

const Intro = (props: { headerOffset: number }) => {
  return (
    <Box
      sx={{minHeight: "100px",position: 'relative', zIndex: 0 }}
      padding={"10%"}
      mt={props.headerOffset + "px"}
      mb={0}
    >
      <Heading fontStyle="italic" color="white" fontSize="xxx-large" sx={{position:'relative', zIndex: 3}}>
        Hi, my name is Theo
      </Heading>
    </Box>
  );
};

const Bio = () => {
  return (
    <Box
      color="white"
      p="5%"
      bg="#182525"
      
      sx={{ float: "left", textAlign: "left", position:'relative', zIndex: 2, borderRadius: '2vw' }}
    >
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
          <p style={{ textIndent: "1em", fontSize: "3.25vw" }}>
            I am Theo, a Las Vegas transplant from Boston who is looking forward
            to returning to the Greater Boston Area and attending MIT. I am
            currently a Senior in High School and I am passionate about
            networking and full stack programming, as well as embedded system
            design.
          </p>
        </Box>
      </Grid>
    </Box>
  );
};

//stolen from ian lmao
interface ProjectProps {
  name: string;
  image?: string;
  isLogo?: boolean;
  description: string;
  href: string;
}
const ProjectWidget = (props:ProjectProps) => {
  const makeImage = ()=> {
      if (props.image) {
          return (
              <div className="project-image">
                  <img src={props.image}></img>
                  {!props.isLogo ? <div className="overlay"></div> : null}
              </div>
          );
      } else {
          return null;
      }
  }
  return (
          <div className="project" onClick={()=>{
              window.location.href = props.href;
          }}>
              <h1>{props.name}</h1>
              {makeImage()}
              <span className="description">{props.description}</span>
          </div>
    );
}

const Footer = ()=>{
 return(<Box bg="#101818" width="100%" height="auto" color = 'grey'>
 <Heading p='3%' pb='0' textAlign='left' fontSize = 'medium'>Copyright © Thelonious Cooper 2021</Heading> 
 <Heading p='3%' pt='1%' pb='2%' textAlign='left' fontSize = 'medium'>I made this website from scratch! Check it out <a style={{color:'grey'}} href = 'https://github.com/theloni-monk/whoami'>here</a></Heading>
 
 <Box width='40%' pb='2%'>
  <hr/> 
 </Box>
</Box>);
}



const App = () => {
  const [headerWidth, setHeaderwidth] = useState(50);
  const [headerHeight, setHeaderHeight] = useState(50);

  //make sure the fixed header doesn't overlap the intro
  useLayoutEffect(() => {
    setHeaderwidth(window.innerWidth);
    console.log(headerWidth);
    setHeaderHeight(document.getElementById("head")?.clientHeight as number);
  }, [headerWidth, headerHeight]);
  return (
    <div className="App height=100% margin-bottom=50px">
      
      <section id="header">
        <THeader headWidth={headerWidth} />
        
          <Box sx={{backgroundImage: 'url('+skyline+')', minHeight: 300, width: '100%', height:'100%', position:'fixed', zIndex:-1}}/>
        
      </section>
      <section id="intro">
        <Intro headerOffset={headerHeight} />
      </section>
      <section id="bio">
        <Bio />
      </section>
      <section id="actions">
        <Box mt="5%" p="5%">
          <Heading textAlign="left" color="#101818">
            Check out my projects:
            </Heading>
        </Box>
        <Grid gridTemplateColumns="repeat(3, auto)" gridGap={3}>

        </Grid>
      </section>
      <section id = 'technologies'></section>
      <section id="footer">
        <Footer/>
      </section>
    </div>
  );
};

export default App;
