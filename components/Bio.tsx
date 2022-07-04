import { Box, Heading, Grid } from '@primer/components'
import Image from 'next/image'
import { headshot } from '../images'


const Bio = ({isMobile}) => {
  return (
    <Box
      color="white"
      p="5%"
      bg="#242424"
      sx={{ float: "left", textAlign: "left", position: 'relative', zIndex: 2, boxShadow: '0px 10px 5px #0000002a, 0px -10px 5px #0000002a' }}
      id='biow'
      className='animate__animated animate__backInUp'
    >
      <Grid gridTemplateColumns="repeat(2, auto)" gridGap={3}>
        <Box>
          <Heading mr="100%" mb={isMobile?"35%":"5%"} fontSize='5vh' fontStyle="italic" sx={{ float: "left", width: "50%" }}>
            Who am I?
          </Heading>
          <div style={{ width: '100%', height: isMobile ? '33%' : '80%', borderRadius: '15px', overflow: 'hidden' }}>
            <Image
              className='hover-grow'
              layout='intrinsic'
              src={headshot}
              alt='me'
              priority={true} 
              placeholder='blur'
            />
          </div>
        </Box>
        <Box mr="5%">
          <p style={{ textIndent: "2.5vw", fontSize: isMobile ? "1.75vh" : "2.25vw", marginTop: "4.75vw" }}>
            I am Theo, I grew up in Cambridge, MA and Las Vegas, NV. I am currently Sophomore undergrad in the Electrical Engineering department of MIT. I am passionate about
            both machine learning and embedded system design. I am an undergraduate researcher in the Earth Signals and Systems Group at MIT EAPS and the Human-Computer Interaction Engineering Group at CSAIL.
          </p>
        </Box>
      </Grid>
    </Box>
  );
};
export default Bio;