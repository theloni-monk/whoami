import {Box, Heading} from '@primer/components'
const Footer = () => {
    return (<Box bg="#101818" width="100%" height="auto" color='grey'>
      <Heading p='3%' pb='0' textAlign='left' fontSize='medium'>Copyright © Thelonious Cooper 2021</Heading>
      <Heading p='3%' pt='1%' pb='2%' textAlign='left' fontSize='medium'>I made this website from scratch! Check it out <a style={{ color: 'grey' }} href='https://github.com/theloni-monk/whoami'>here</a></Heading>
  
      <Box width='40%' pl='3%' pb='2%'>
        <hr />
      </Box>
    </Box>);
  }
export default Footer;