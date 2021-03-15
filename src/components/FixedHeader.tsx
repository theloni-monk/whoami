import {Header, Heading, Fixed, UnderlineNav, StyledOcticon} from '@primer/components'
import { MarkGithubIcon } from "@primer/octicons-react";
// padding: 16px 8px;
//     padding-top: 16px;
//     padding-right: 8px;
//     padding-bottom: 16px;
//     padding-left: 8px;
// margin-right: 16px;
// font-size: 14px;
// line-height: 1.5;
// color: #24292e;
// text-align: center;
// border-bottom: 2px solid transparent;

// :hover {
//   color: grey;
// }
// :hover, .hASryg:focus {
//   color: #24292e;
//   -webkit-text-decoration: none;
//   text-decoration: none;
//   border-bottom-color: #d1d5da;
//   -webkit-transition: 0.2s ease;
//   transition: 0.2s ease;
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
          {/**TODO: make responsive with hamburger menue for mobile */}
          <UnderlineNav aria-label="Main">
            <UnderlineNav.Link
              href={process.env.PUBLIC_URL+"/#/home"}
              color="white"
              sx={{ ":hover": { color: "grey" } }}
            >
              Home
          </UnderlineNav.Link>
            <UnderlineNav.Link
              href={process.env.PUBLIC_URL+"/#/links"}
              color="white"
              sx={{ ":hover": { color: "grey" } }}
            >
              Links
          </UnderlineNav.Link>
            <UnderlineNav.Link
              href={process.env.PUBLIC_URL+"/#/contact-me"}
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