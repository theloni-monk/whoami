import React, { useState, useEffect, useLayoutEffect } from 'react'
import { BorderBox, Box, Grid, Heading } from '@primer/components'
import '@fortawesome/fontawesome-free/css/brands.css'
import { FixedHeader, NiceBackground, Footer, EmailWidget } from '../components'
import { init } from 'emailjs-com'
import { isMobile } from 'react-device-detect'
const fa = require('@fortawesome/fontawesome-free/js/all.js'); // dont ask, it just works
const uid = require('../creds/emailcreds.json').userid;

const ContactPage = () => {
    const [headerHeight, setHeaderHeight] = useState(50);
    const [bodyHeight, setBodyHeight] = useState(400);

    //make sure the fixed header doesn't overlap the intro
    useLayoutEffect(() => {
        let headHeight = document.getElementById("head")?.clientHeight as number
        let footHeight = document.getElementById("foot")?.clientHeight as number
        setHeaderHeight(headHeight);
        setBodyHeight(document.getElementById('bod')?.clientHeight as number - headHeight - footHeight);
    }, [headerHeight, bodyHeight]);

    //onmount init email api
    useEffect(() => {
        init(uid);
    }, [])

    return (
        <div style={{ overflow: isMobile ? '' : 'hidden' }}>
            <FixedHeader />
            <BorderBox mt={headerHeight} height={isMobile?'100%':bodyHeight}>
                <NiceBackground />
                <Grid gridTemplateColumns={isMobile ? 'repeat(1,auto)' : 'repeat(2,auto)'} sx={{ position: 'relative', zIndex: 3 }}>
                    <Box>
                        <Heading m='5%' mb='2%' color='white'>Tell Me Something!</Heading>
                        <Heading fontSize={3} color='grey' p='5%' pt='0'>I'll get back to you in 2-3 business days guaranteed</Heading>
                    </Box>
                    <EmailWidget />
                </Grid>
            </BorderBox>
            <Footer />
        </div>);
};
export default ContactPage;