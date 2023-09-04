import React, { useState, useEffect } from 'react'
import { Box, Grid, Heading } from '@primer/components'
import '@fortawesome/fontawesome-free/css/brands.css'
import { FixedHeader, NiceBackground, Footer, EmailWidget } from '../components'
import { init } from 'emailjs-com'
const fa = require('@fortawesome/fontawesome-free/js/all.js'); // dont ask, it just works
const uid = require('../creds/emailcreds.json').userid;

const ContactPage = (props: { isMobile: boolean }) => {
    const [mobile, setMobile] = useState(false);

    //onmount init email api
    useEffect(() => {
        init(uid);
        const mobiles = window.matchMedia("(max-width: 480px)");
        console.log('watchmobilesmedia', mobiles);
        setMobile(mobiles.matches);
        console.log("homepage loaded - garblalflarp");
    }, []);
    useEffect(()=>{
        
      },[])
    
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
        <div style={{ overflow: mobile ? '' : 'hidden', height: '100%' }}>
            <FixedHeader isMobile={mobile} />
            <Box mt={headerHeight} height={mobile ? '100%' : bodyHeight}>
                <NiceBackground />
                <Grid gridTemplateColumns={mobile ? 'repeat(1,auto)' : 'repeat(2,auto)'} sx={{ position: 'relative', zIndex: 3 ,textShadow: '2px 2px 8px #000000'}}>
                    <Box>
                        <Heading m='5%' mb='2%' color='white'>Tell Me Something!</Heading>
                        <Heading fontSize={3} color='grey' p='5%' pt='0'>I&#39;ll get back to you in 2-3 business days guaranteed</Heading>
                    </Box>
                    <EmailWidget />
                </Grid>
            </Box>
            <Footer />
        </div>);
};

export default ContactPage;