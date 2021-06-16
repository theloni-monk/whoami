//stole this from ian lol
import { Heading, Grid, Box } from '@primer/components'
import {isMobile} from 'react-device-detect'

interface ProjectProps {
  name: string;
  image?: string;
  isLogo?: boolean;
  description: string;
  href: string;
}
const ProjectWidget = (props: ProjectProps) => {

  return (
    <div className="hover-grow" onClick={() => {window.location.href = props.href;}} 
      style={{
        color: 'white',
        width: '100%',
        boxShadow: ' 0px 2px 10px #0000002a',
        borderRadius: '10px',
        position: 'relative',
        display: 'grid',
        overflow: 'hidden',
        margin: '5%',
        maxHeight: '200px',
        padding:'2%',
        userSelect:'none',
        cursor:'pointer',
        transition:'0.1s'
      }}>
        <Box sx={{
          position:'absolute',
          top:0,
          left:0,
          height:'100%',
          width:'100%',
          zIndex: -0,
          filter:'blur(2px)',
          overflow:'hidden'
        }}>
          <img src = {process.env.PUBLIC_URL + '/res/' + props.image} alt = {props.name}/>
        </Box>
      <Grid gridTemplateRows={isMobile? '45% 55%':'20% 80%'}  p='5%' sx={{position:'relative', zIndex:'1', textAlign:'left'}}>
        <Heading sx={{textShadow: '2px 2px 8px #000000'}}>{props.name}</Heading>
        <p style={{ marginTop: '5%', textShadow: '2px 2px 8px #000000'}} >{props.description}</p>
      </Grid>
    </div>
  );
}
export default ProjectWidget;
