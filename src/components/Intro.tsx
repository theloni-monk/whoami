import {Box, Heading} from '@primer/components'
const Intro = (props: { headerOffset: number }) => {
    return (
      <Box
        sx={{ minHeight: "100px", position: 'relative', zIndex: 0 }}
        padding={"10%"}
        mt={props.headerOffset + "px"}
        mb={0}
      >
        <Heading fontStyle="italic" color="white" fontSize="xxx-large" sx={{ position: 'relative', zIndex: 3 }}>
          Hi, my name is Theo
        </Heading>
      </Box>
    );
  };
export default Intro;