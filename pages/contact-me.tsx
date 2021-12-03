import React, { useState, useEffect } from 'react'
import { Box, Grid, Heading } from '@primer/components'
import '@fortawesome/fontawesome-free/css/brands.css'
import { FixedHeader, NiceBackground, Footer, EmailWidget } from '../components'
import { init } from 'emailjs-com'
const fa = require('@fortawesome/fontawesome-free/js/all.js'); // dont ask, it just works
const uid = require('../creds/emailcreds.json').userid;

const ContactPage = (props: { isMobile: boolean }) => {

    //onmount init email api
    useEffect(() => {
        init(uid);
    }, []);

    const [headerHeight, setHeaderHeight] = useState(50);
    const [bodyHeight, setBodyHeight] = useState(400);

    //make sure the fixed header doesn't overlap the intro
    useEffect(() => {
        let headHeight = document.getElementById("head")?.clientHeight as number
        let footHeight = document.getElementById("foot")?.clientHeight as number
        setHeaderHeight(headHeight);
        setBodyHeight(document.getElementById('__next')?.clientHeight as number - headHeight - footHeight);
    }, [headerHeight, bodyHeight]);



    return (
        <div style={{ overflow: props.isMobile ? '' : 'hidden', height: '100%' }}>
            <FixedHeader isMobile={props.isMobile} />
            <Box mt={headerHeight} height={props.isMobile ? '100%' : bodyHeight}>
                <NiceBackground />
                <Grid gridTemplateColumns={props.isMobile ? 'repeat(1,auto)' : 'repeat(2,auto)'} sx={{ position: 'relative', zIndex: 3 ,textShadow: '2px 2px 8px #000000'}}>
                    <Box>
                        <Heading m='5%' mb='2%' color='white'>Tell Me Something!</Heading>
                        <Heading fontSize={3} color='grey' p='5%' pt='0' sx={{textShadow:'2px 2px 4px #000000'}}>I&#39;ll get back to you in 2-3 business days guaranteed</Heading>
                    </Box>
                    <EmailWidget />
                </Grid>
            </Box>
            <Footer />
        </div>);
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
export default ContactPage;