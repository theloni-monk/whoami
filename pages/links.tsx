import React, { useState, useEffect } from 'react'
import { BorderBox, Grid, Heading } from '@primer/components'
import '@fortawesome/fontawesome-free/css/brands.css'
import { FixedHeader, NiceBackground, Footer, LinkWidget } from '../components'
const fa = require('@fortawesome/fontawesome-free/js/all.js'); // dont ask, it just works

const LinkPage = (props: { isMobile: boolean }) => {
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
    useEffect(() => {
        setHeaderwidth(window.innerWidth);
        setHeaderHeight(document.getElementById("head")?.clientHeight as number);
    }, [headerWidth, headerHeight]);

    return ( 
        <div>
            <FixedHeader isMobile={props.isMobile} />
            <BorderBox mt={headerHeight} justifyContent='center' height='100%' alignContent='center' p='5%' >
                <NiceBackground />
                <Grid gridTemplateColumns='repeat(2,auto)' sx={{ position: 'relative', zIndex: 1 ,textShadow: '2px 2px 8px #000000'}}>
                    <Grid gridAutoRows='fit-content(20vh)' sx={{ fontSize: '3vw' }}>
                        {/**FIXME: text too big on mobile */}
                        <Heading color='white' fontSize={props.isMobile ? '2.5vh' : '3vw'}>Reach me via any of the following means, or shoot me an email right now by going to the contact page</Heading>
                        <i className="fas fa-hand-point-right fa-5x animate__animated animate__headShake animate__infinite" style={{ color: 'white', justifySelf: 'center', alignSelf: 'start' }} />
                    </Grid>
                    <Grid gridTemplateColumns='repeat(1,auto)' justifyContent='center' gridGap={4}>
                        <LinkWidget isMobile={props.isMobile} icon='fab fa-linkedin fa-5x' title='Linkedin' description='Check out my linkedin page for professional inquires' to='https://www.linkedin.com/in/thelonious-cooper-88000a178/' />
                        <LinkWidget isMobile={props.isMobile} icon='fab fa-github fa-5x' title='Github' description='Check out my previous and ongoing projects' to='https://github.com/theloni-monk' />
                        <LinkWidget isMobile={props.isMobile} icon='fab fa-google fa-3x' title='Gmail' description='Shoot me an email any time' to='/contact-me' />
                        {/**FIXME: instagram nearly overflows on mobile */}
                        <LinkWidget isMobile={props.isMobile} icon='fab fa-instagram fa-7x' title='Instagram' description='Follow me on Instagram' to='https://www.instagram.com/theoz_afro/' />
                    </Grid>
                </Grid>
            </BorderBox>
            <Footer />
        </div>
    );
};
export async function getServerSideProps(context) {
    //console.log(context.req.headers['user-agent'])
    let mobileAgents = context.req.headers['user-agent'].match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
    let mobile = mobileAgents?.length > 0
    //console.log('mobile detected:', mobile)
    return (
        {
            props: { isMobile: mobile } // will be passed to the page component as props
        });
}

export default LinkPage;