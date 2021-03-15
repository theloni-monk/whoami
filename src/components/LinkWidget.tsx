import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'
import {BorderBox, Flex, Heading} from '@primer/components'
//TODO: add links to linkwidget
const LinkWidget = (props: { icon: string, title: string, description: string, to:string }) => {
    let [redirect,setRedirect] = useState(false);
    if(redirect) {
        window.location.href = props.to;
        return <div/>
    }
    //TODO: add hover or smth
    return (
        <div onClick = {()=>setRedirect(true)}>
            <BorderBox borderWidth='5px' width='60%' bg='#495057' color='white' p='3%' pl='5%' pr='5%' borderColor='grey' borderRadius='5%' margin='auto'>
                <Flex width='100%' marginBottom='5%' >
                    <i className={props.icon} style={{fontSize:'7vw', margin:'auto'}}/>
                    <Heading pl='10px' margin='auto' sx={{width:'100%'}} textAlign='center' fontSize='4vw' pr='10px'>{props.title}</Heading>
                </Flex>
                <p style={{ textAlign: 'left', fontSize: '2vw', margin:'2%' }}>{props.description}</p>
            </BorderBox>
        </div>
    );
}
export default LinkWidget;