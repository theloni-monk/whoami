import {useState} from 'react'
import {BorderBox, Flex, Heading} from '@primer/components'
import {isMobile} from 'react-device-detect'

const LinkWidget = (props: { icon: string, title: string, description: string, to:string }) => {
    const [redirect,setRedirect] = useState(false);
    if(redirect) window.location.href = props.to;

        
    //TODO: add hover or smth
    return (
        <div className="hover-grow" onClick = {()=>setRedirect(true)}  style={{ userSelect:'none', cursor:'pointer'}}>
            <BorderBox borderWidth='5px' width={isMobile?'80%':'60%'} bg='#495057' color='white' p={isMobile?'5%':''}  pl='5%' pr='5%' borderColor='grey'  margin='auto' sx={{transition:'0.1s'}}>
                <Flex width='100%' marginBottom='5%' >
                    <i className={props.icon} style={{fontSize:'7vw', margin:'auto', paddingTop:'2%'}}/>
                    <Heading pl='10px' margin='auto' sx={{width:'100%'}} textAlign='center' fontSize='4vw' pr='10px'>{props.title}</Heading>
                </Flex>
                <p style={{ textAlign: 'left', fontSize: isMobile?'2vh':'2vw', margin:'2%' }}>{props.description}</p>
            </BorderBox>
        </div>
    );
}
export default LinkWidget;