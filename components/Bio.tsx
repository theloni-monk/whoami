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
            I am Thelonious (Theo) Cooper. I am an Electrical Engineering major with a focus on signal processing, embedded software, and digital system design. 
            I am an undergraduate researcher for the Earth Signals and Systems Group in the EAPS department of MIT, where I study novel optimal control algorithms and drone firmware architecture. 
            I am passionate about edge computing especially in medical and sustainablity-focused applications.
          </p>
        </Box>
      </Grid>
    </Box>
  );
};
export default Bio;