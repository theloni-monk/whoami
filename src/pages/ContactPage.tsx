import React, { useState, useEffect, useLayoutEffect } from 'react'
import { BorderBox, Box, Grid, Heading } from '@primer/components'
import '@fortawesome/fontawesome-free/css/brands.css'
import { FixedHeader, Footer, EmailWidget } from '../components'
import {init} from 'emailjs-com'
const fa = require('@fortawesome/fontawesome-free/js/all.js'); // dont ask, it just works
const uid = require('../creds/emailcreds.json').userid;

//FIXME: too short on widescreen
const ContactPage = () => {
    const [headerWidth, setHeaderwidth] = useState(50);
    const [headerHeight, setHeaderHeight] = useState(50);
    const [bodyHeight, setBodyHeight] = useState(400);
    //make sure the fixed header doesn't overlap the intro
    useLayoutEffect(() => {
        setHeaderwidth(window.innerWidth);
        let headHeight = document.getElementById("head")?.clientHeight as number
        let footHeight = document.getElementById("foot")?.clientHeight as number
        setHeaderHeight(headHeight);
        setBodyHeight(document.getElementById('bod')?.clientHeight as number - headHeight - footHeight);

    }, [headerWidth, headerHeight, bodyHeight]);

    //onmount init email api
    useEffect(()=>{
        init(uid)
    },[])

    return (
    <div>
        <FixedHeader headWidth={headerWidth} />
        <BorderBox mt={headerHeight} height={bodyHeight}>
            <Grid gridTemplateColumns='repeat(2,auto)'>
                <Box>
                <Heading m='5%' mb='2%'>Tell Me Something!</Heading>
                <Heading fontSize={3} color='grey' p='5%' pt='0'>(Note: this page is still a work in progress)</Heading>
                </Box>
                <EmailWidget/>
            </Grid>
        </BorderBox>
        <Footer />
    </div>);
};
export default ContactPage;