//stole this from ian lol
import { Heading, Grid, Box } from '@primer/components'
//FIXME: broken on mobile
interface ProjectProps {
  name: string;
  image?: string;
  isLogo?: boolean;
  description: string;
  href: string;
}
const ProjectWidget = (props: ProjectProps) => {

  return (
    <div className="project" onClick={() => {
      window.location.href = props.href;
    }}
      style={{
        color: 'white',
        width: '100%',
        boxShadow: ' 0px 2px 10px #0000002a',
        borderRadius: '10px',
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '70% 30%',
        overflow: 'hidden',
        margin: '5%',
        maxHeight: '200px',
        padding:'2%'
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
      <Grid gridTemplateRows='10% 80%' gridGap={4} p='5%' sx={{position:'relative', zIndex:'1', textAlign:'left'}}>
        <Heading >{props.name}</Heading>
        <div className="description" style={{ marginTop: '10px'}} >{props.description}</div>
      </Grid>
    </div>
  );
}
export default ProjectWidget;
/**
 * .project {
    height: 100px;
    margin: 40px;
    @extend %box;

    h1 {
        margin: 0;
        font-size: 18pt;
    }


    transition: 0.3s;
    user-select: none;
    cursor: pointer;
}
 */