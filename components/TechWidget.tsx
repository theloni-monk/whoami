import {BorderBox } from '@primer/components'
import Image from 'next/image'
interface TechProps{
    name: string,
    href: string,
    image: any,
    height: number
}
const TechWidget = (props: TechProps) =>{
    //make width height
    return (
        <BorderBox id = 'techw' className='hover-grow' pt='100%' width={props.height ? props.height : '100%'} borderRadius='50%' borderWidth='0.8vh' borderColor='FloralWhite' overflow='hidden' p = '2%' maxHeight='300px' maxWidth='300px'
        sx={{cursor:'pointer', position:'relative', zIndex:3}} 
        onClick={() => {window.location.href = props.href;}}>
            <Image layout='fill' placeholder='blur' src = {props.image} title={props.name} alt = {props.name}/>
        </BorderBox>
    );
}
export default TechWidget;