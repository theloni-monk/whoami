import { Box, Heading, Grid } from '@primer/components'

import {isMobile} from 'react-device-detect'

const Bio = () => {
  return (
    <Box
      color="white"
      p="5%"
      bg="#242424"
      sx={{ float: "left", textAlign: "left", position: 'relative', zIndex: 2, boxShadow: '0px 10px 5px #0000002a, 0px -10px 5px #0000002a'}}
      id='biow'
      className='animate__animated animate__backInUp'
    >
      <Grid gridTemplateColumns="repeat(2, auto)" gridGap={3}>
        <Box>
          <Heading mr="100%" mb="5%" fontSize='5vh' fontStyle="italic" sx={{ float: "left", width: "50%" }}>
            Who am I?
            </Heading>
          <img
            className='hover-grow'
            style={{ borderRadius: "20px" }}
            width="90%"
            src={process.env.PUBLIC_URL + '/res/headshot.jpg'}
            alt='me'
          />
        </Box>
        <Box mr="5%">
          <p style={{ textIndent: "1em", fontSize: isMobile?"2.2vh":"3.25vw" }}>
            I am Theo, I grew up in Cambridge, MA and Las Vegas, NV. I am currently a Freshman at MIT. I am passionate about
            both full stack webdev and embedded system design. I like making code that does stuff, i.e. has some robotic or A/V results. 
            Itching to know more? Learn more through my links in the links tab.
          </p>
        </Box>
      </Grid>
    </Box>
  );
};
export default Bio;