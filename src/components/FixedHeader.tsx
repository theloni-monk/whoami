import { Header, Heading, Fixed, UnderlineNav, StyledOcticon } from '@primer/components';
import { MarkGithubIcon } from "@primer/octicons-react";
import {isMobile} from 'react-device-detect';

const FixedHeader = () => {
  const width = window.innerWidth;
  return (
    <Fixed top={0} width="100%" p={0} zIndex={10} id="head" >
      <Header backgroundColor="#101818" p={3}>
        <Header.Item>
          <Header.Link
            href="https://github.com/theloni-monk/whoami"
            fontSize={2}
          >
            <StyledOcticon icon={MarkGithubIcon} size={24} mr={isMobile?0:2} />
            {width > 500 ? <span>GitHub for this page</span> : ""}
          </Header.Link>
        </Header.Item>
        <Header.Item full>
          {" "}
          <Heading ml={isMobile?0:2} fontSize={2} textAlign='center'>
            Thelonious Cooper
        </Heading>
        </Header.Item>
        <Header.Item mr={0}>
          <UnderlineNav aria-label="Main">
            <UnderlineNav.Link
              href={process.env.PUBLIC_URL + "/#/home"}
              color="white"
              sx={{ ":hover": { color: "grey" } }}
            >
              Home
          </UnderlineNav.Link>
            <UnderlineNav.Link
              href={process.env.PUBLIC_URL + "/#/links"}
              color="white"
              sx={{ ":hover": { color: "grey" } }}
            >
              Links
          </UnderlineNav.Link>
            <UnderlineNav.Link
              href={process.env.PUBLIC_URL + "/#/contact-me"}
              color="white"
              sx={{ ":hover": { color: "grey" } }}
            >
              Contact me
          </UnderlineNav.Link>
          </UnderlineNav>
        </Header.Item>
      </Header>
    </Fixed>);
}
export default FixedHeader;