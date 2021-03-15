import {Header, Heading, Fixed, UnderlineNav, StyledOcticon} from '@primer/components'
import { MarkGithubIcon } from "@primer/octicons-react";

const FixedHeader = (props: { headWidth: number }) => {
    return (<Fixed top={0} width="100%" p={0} zIndex={10} id="head">
      <Header backgroundColor="#101818" p={3}>
        <Header.Item>
          <Header.Link
            href="https://github.com/theloni-monk/whoami"
            fontSize={2}
          >
            <StyledOcticon icon={MarkGithubIcon} size={24} mr={2} />
            {props.headWidth > 500 ? <span>GitHub for this page</span> : ""}
          </Header.Link>
        </Header.Item>
        <Header.Item full>
          {" "}
          <Heading ml={2} fontSize={2}>
            Thelonious Cooper
        </Heading>
        </Header.Item>
        <Header.Item mr={0}>
          {/**todo make responsive with hamburger menue for mobile */}
          <UnderlineNav aria-label="Main">
            <UnderlineNav.Link
              href="/home"
              color="white"
              sx={{ ":hover": { color: "grey" } }}
            >
              Home
          </UnderlineNav.Link>
            <UnderlineNav.Link
              href="/links"
              color="white"
              sx={{ ":hover": { color: "grey" } }}
            >
              Links
          </UnderlineNav.Link>
            <UnderlineNav.Link
              href="/contact-me"
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