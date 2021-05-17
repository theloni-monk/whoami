import { Heading, Grid, BorderBox } from '@primer/components'

interface TechProps{
    name: string,
    href: string,
    image: string,
    height: number
}
const TechWidget = (props: TechProps) =>{
    //make width height
    return (
        <BorderBox id = 'techw' className='hover-grow' pt='100%' width={props.height ? props.height : '100%'} borderRadius='50%' borderWidth='0.8vh' borderColor='FloralWhite' overflow='hidden' p = '2%' maxHeight='300px' maxWidth='300px'
        sx={{cursor:'pointer', position:'relative', zIndex:3}} 
        onClick={() => {window.location.href = props.href;}}>
            <img style = {{position:'absolute',top: 0, left:0, height:'100%', width:'100%', zIndex:3}} src = {process.env.PUBLIC_URL + '/res/' + props.image} title={props.name} alt = {props.name}/>
        </BorderBox>
    );
}
export default TechWidget;