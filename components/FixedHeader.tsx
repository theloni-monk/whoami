import { Header, Heading, Fixed, UnderlineNav, StyledOcticon } from '@primer/components';
import { MarkGithubIcon } from "@primer/octicons-react";
import { useEffect, useState } from 'react';
import Link from 'next/link'
import Head from 'next/head'

const FixedHeader = ({ isMobile }) => {
  const [width, setWidth] = useState(1000);
  useEffect(() => setWidth(window.innerWidth), [])
  //FIXME: fix PWA SEO - manifest not loading
  //TODO implemenent all the pwa stuff like sitemap and whatnot
  return (
    <Fixed top={0} width="100%" p={0} zIndex={10} id="head" >
      {/**SEO Stuff */}
      <Head>
        <link href="https://unpkg.com/@primer/css@^16.0.0/dist/primer.css" rel="stylesheet" />
        <link rel="manifest" href="/manifest.json" />
        <meta charSet='utf-8' />
        <meta name="theme-color" content="#000000" />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name='description' content='Portfolio Page for Thelonious Cooper' />
        <meta name='keywords' content='Theo Cooper Thelonious Web Dev Full Stack Programming Developer React NextJs Github NuVu MIT' />
        <title>Theo&apos;s Portfolio</title>

        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo192.png" />
      </Head>
      {/** actual header */}
      <Header backgroundColor="#101818" p={3}>
        <Header.Item>
          <Link href="https://github.com/theloni-monk/whoami" passHref={true}>
            <Header.Link fontSize={2} color='white'>
              <StyledOcticon icon={MarkGithubIcon} size={24} mr={isMobile ? 0 : 2} />
              {width > 500 ? <span>GitHub for this page</span> : ""}
            </Header.Link>
          </Link>
        </Header.Item>
        <Header.Item full>
          <Heading ml={isMobile ? 0 : 2} fontSize={isMobile ? 1 : 2} textAlign='center' color='grey'>
            Thelonious Cooper
          </Heading>
        </Header.Item>
        <Header.Item mr={0}>
          <UnderlineNav aria-label="Main">
            <Link href="/" passHref={true}>
              <UnderlineNav.Link
                color="white"
                sx={{ ":hover": { color: "grey" } }}>
                Home
              </UnderlineNav.Link>
            </Link>
            <Link href="/links" passHref={true}>
              <UnderlineNav.Link
                color="white"
                sx={{ ":hover": { color: "grey" } }}>
                Links
              </UnderlineNav.Link>
            </Link>
            <Link href="/contact-me" passHref={true}>
              <UnderlineNav.Link
                color="white"
                sx={{ ":hover": { color: "grey" } }}>
                Contact me
              </UnderlineNav.Link>
            </Link>
          </UnderlineNav>
        </Header.Item>
      </Header>
    </Fixed>);
}
export default FixedHeader;