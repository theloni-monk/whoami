import React,{useState, useReducer} from 'react'
import {Box, Grid, TextInput, Text, StyledOcticon, Heading, ButtonPrimary, ButtonOutline} from '@primer/components'
import {PersonIcon,MailIcon,MegaphoneIcon, CheckCircleIcon} from '@primer/octicons-react'
import {send} from 'emailjs-com'
import {isMobile} from 'react-device-detect'

const EmailWidget = () => {
    const [formData, setFormData] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {name: null, email: null, message: null}
      )
    const [wasSent, setWasSent] = useState(false);

    const [error, setError] = useState('');

    

    const submit = async () =>{
        if(formData.name === null) {
            await setError('Please write a name before submitting');
            return;
        }
        if(formData.email === null) {
            await setError('Please write an email before submitting');
            return;
        }
        if(formData.message === null) {
            await setError('Please write a message before submitting');
            return;
        }
        
        const templateId = 'template_78z2i0a';
        const serviceID = 'service_92gogpp';
        send(serviceID, templateId, {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message
        }).then((result) => {
            setWasSent(true);
        }, (error) => {
            setError( JSON.stringify(error));
        });
    }

    const clearState=()=>{
        setFormData({name:null, email: null, message: null});
        setError('');
        setWasSent(false);
    }

    if(wasSent){
        //put big green check or smth and maybe button to clear state and send another
        return(
            <Grid gridAutoColumns='fitcontent(100%)' justifyItems='center' m = '5%'>
                <StyledOcticon icon={CheckCircleIcon} size='large' color="icon.success" p={2} />
                <ButtonOutline width='100%' onClick={clearState}>Wanna Send Another?</ButtonOutline>
            </Grid>
        )
    }
    return(
        <Grid m='5%' color='white' sx={{textShadow: '2px 2px 8px #000000'}} >
            <Heading>Your Name: </Heading>
            <TextInput color='white' width='60%' aria-label="Name" name="name" icon={PersonIcon} placeholder="Bertram Gilfoyle" 
            onChange={(e)=>setFormData({name:e.target.value})}/>

            <Heading>Your Email:</Heading>
            <TextInput color='white' width='60%' aria-label="Email" name="email" icon = {MailIcon} placeholder="b.gilfoyle@piedpiper.com"
            onChange = {(e)=>setFormData({email: e.target.value})}/>

            <Heading>Your Message:</Heading>
            <TextInput color='white' as ={'textarea'} width={isMobile?'90%':'60%'} aria-label="Message" name = "message" block={true} icon = {MegaphoneIcon} variant = 'large' placeholder = "Dear Dinesh..."
            onChange={(e)=>setFormData({message:e.target.value})} />
            
            <Box p='2%' sx={{visibility: error.length > 1? 'visible': 'hidden',textAlign:'left'}}>
                <Text color='red' >{error}</Text>
            </Box>
            <ButtonPrimary width='20%' variant = 'medium' onClick={submit}>Send!</ButtonPrimary>
        </Grid>
    )
}
export default EmailWidget;