import { Box, Heading, Grid } from '@primer/components'

import {isMobile} from 'react-device-detect'

const Bio = () => {
  //TODO: add better scaling for desktop vs mobile
  //TODO: add gradient shadows on top and bottom
  //FIXME size of whoami heading
  return (
    <Box
      color="white"
      p="5%"
      bg="#242424"
      sx={{ float: "left", textAlign: "left", position: 'relative', zIndex: 2}}
      id='biow'
    >
      <Grid gridTemplateColumns="repeat(2, auto)" gridGap={3}>
        <Box>
          <Heading mr="100%" mb="5%" fontSize='5vh' sx={{ float: "left", width: "50%" }}>
            Who am I?
            </Heading>
          <img
            style={{ borderRadius: "20px" }}
            width="80%"
            src={process.env.PUBLIC_URL + '/res/headshot.jpg'}
            alt='me'
          />
        </Box>
        <Box mr="5%">
          <p style={{ textIndent: "1em", fontSize: isMobile?"2.2vh":"3.25vw" }}>
            I am Theo, a Las Vegas transplant from Cambridge, MA who is looking forward
            to coming full-circle and attending MIT. I am
            currently a Senior in High School and I am passionate about
            networking and full stack programming, as well as embedded system
            design.
            </p>
        </Box>
      </Grid>
    </Box>
  );
};
export default Bio;