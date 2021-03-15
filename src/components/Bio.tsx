import {Box, Heading, Grid} from '@primer/components'
const Bio = () => {
    return (
      <Box
        color="white"
        p="5%"
        bg="#182525"
  
        sx={{ float: "left", textAlign: "left", position: 'relative', zIndex: 2, borderRadius: '2vw' }}
      >
        <Grid gridTemplateColumns="repeat(2, auto)" gridGap={3}>
          <Box>
            <Heading mr="100%" mb="5%" sx={{ float: "left", width: "50%" }}>
              Who am I?
            </Heading>
            <img
              style={{ borderRadius: "20px" }}
              width="80%"
              src= {process.env.PUBLIC_URL+'/res/headshot.jpg'}
              alt='me'
            />
          </Box>
          <Box mr="5%">
            <p style={{ textIndent: "1em", fontSize: "3.25vw" }}>
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