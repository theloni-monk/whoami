import React, { useState, useLayoutEffect } from 'react'
import { BorderBox, Grid, Heading } from '@primer/components'
import '@fortawesome/fontawesome-free/css/brands.css'
import { FixedHeader, NiceBackground, Footer, LinkWidget } from '../components'
import { isMobile } from 'react-device-detect'
const fa = require('@fortawesome/fontawesome-free/js/all.js'); // dont ask, it just works

const LinkPage = () => {
    /**
     * Github
     * linkedin
     * instagram
     * Nuvu
     * Email me
     */
    const [headerWidth, setHeaderwidth] = useState(50);
    const [headerHeight, setHeaderHeight] = useState(50);

    //make sure the fixed header doesn't overlap the intro
    useLayoutEffect(() => {
        setHeaderwidth(window.innerWidth);
        setHeaderHeight(document.getElementById("head")?.clientHeight as number);
    }, [headerWidth, headerHeight]);

    return (
        <div>
            <FixedHeader />
            <BorderBox mt={headerHeight} justifyContent='center' height='100%' alignContent='center' p='5%' >
                <NiceBackground />
                <Grid gridTemplateColumns='repeat(2,auto)' sx={{position:'relative', zIndex:1}}>
                    <Grid gridAutoRows='fit-content(20vh)' sx={{ fontSize: '3vw' }}>
                        {/**FIXME: text too big on mobile */}
                        <Heading color='white' fontSize={isMobile ? '2.5vh' : '3vw'}>Reach me via any of the following means, or shoot me an email right now by going to the contact page</Heading>
                        <i className="fas fa-hand-point-right fa-7x animate__animated animate__headShake animate__infinite" style={{ color: 'white', justifySelf: 'center', alignSelf: 'start' }} />
                    </Grid>
                    <Grid gridTemplateColumns='repeat(1,auto)' justifyContent='center' gridGap={4}>
                        <LinkWidget icon='fab fa-linkedin fa-5x' title='Linkedin' description='Check out my linkedin page for professional inquires' to='https://www.linkedin.com/in/thelonious-cooper-88000a178/' />
                        <LinkWidget icon='fab fa-github fa-5x' title='Github' description='Check out my previous and ongoing projects' to='https://github.com/theloni-monk' />
                        <LinkWidget icon='fab fa-google fa-5x' title='Gmail' description='Shoot me an email any time' to='/#/contact-me' />
                        {/**FIXME: instagram nearly overflows on mobile */}
                        <LinkWidget icon='fab fa-instagram fa-5x' title='Instagram' description='Follow me on Instagram' to='https://www.instagram.com/theoz_afro/' />
                    </Grid>
                </Grid>
            </BorderBox>
            <Footer />
        </div>
    );
};
export default LinkPage;