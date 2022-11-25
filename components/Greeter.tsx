import { Box, Heading, StyledOcticon } from '@primer/components'
import {ChevronDownIcon} from '@primer/octicons-react'

const Greeter = (props: { headerOffset: number, bodHeight: number, isMobile:boolean }) => {
  return (
    <Box
      sx={{  position: 'relative',display:'grid', zIndex: 0 }}
      padding={"7%"}
      pt={"1%"}
      mt={props.headerOffset + "px"}
      mb={0}
      minHeight={props.isMobile? props.bodHeight: props.bodHeight - props.headerOffset}
    >
      <Heading className='animate__animated animate__fadeIn' fontStyle="italic" color="white" fontSize={props.isMobile? "8vh":"10vw"} sx={{ position: 'relative', zIndex: 3,textShadow: '2px 2px 8px #000000' }}>
        Hi, my name is <br/> Thelonious. 
        </Heading>
        <Heading className='animate__animated animate__fadeIn' fontStyle="italic" color="white" fontSize={props.isMobile? "5vh":"5vw"} sx={{ position: 'relative', zIndex: 3,textShadow: '2px 2px 8px #000000' }}>
        I&apos;m a 2nd year student at MIT EECS.
        </Heading>
      <StyledOcticon className='animate__animated animate__pulse animate__infinite'  size='large' color='white' icon={ChevronDownIcon} sx={{ position:'absolute', bottom:'5%', zIndex:3, justifySelf:'center'}}/>
    </Box>
  );
};
export default Greeter;