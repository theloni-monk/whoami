import { Box, Heading } from '@primer/components'
import {useState, useLayoutEffect} from 'react'
const Intro = (props: { headerOffset: number, bodHeight: number }) => {
  //TODO: fixed heading pos and bigger font size
  //TODO: make bigger
 
  //TODO: add bouncing down arrow
  return (
    <Box
      sx={{  position: 'relative', zIndex: 0 }}
      padding={"10%"}
      mt={props.headerOffset + "px"}
      mb={0}
      minHeight={props.bodHeight - props.headerOffset}
    >
      <Heading fontStyle="italic" color="white" fontSize="10vw" sx={{ position: 'relative', zIndex: 3,textShadow: '2px 2px 8px #000000' }}>
        Hi, my name is Theo
        </Heading>
    </Box>
  );
};
export default Intro;