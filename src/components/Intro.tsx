import { Box, Heading, StyledOcticon } from '@primer/components'
import {ChevronDownIcon} from '@primer/octicons-react'
import {isMobile} from 'react-device-detect'

const Intro = (props: { headerOffset: number, bodHeight: number }) => {
  //TODO: maybe make it transition out
  return (
    <Box
      sx={{  position: 'relative',display:'grid', zIndex: 0 }}
      padding={"10%"}
      mt={props.headerOffset + "px"}
      mb={0}
      minHeight={isMobile?props.bodHeight: props.bodHeight - props.headerOffset}
    >
      <Heading className='animate__animated animate__fadeIn' fontStyle="italic" color="white" fontSize={isMobile? "10vh":"10vw"} sx={{ position: 'relative', zIndex: 3,textShadow: '2px 2px 8px #000000' }}>
        Hi, my name is Theo
        </Heading>
      <StyledOcticon className='animate__animated animate__pulse animate__infinite'  size='large' color='white' icon={ChevronDownIcon} sx={{ position:'absolute', bottom:'15%', zIndex:3, justifySelf:'center'}}/>
    </Box>
  );
};
export default Intro;