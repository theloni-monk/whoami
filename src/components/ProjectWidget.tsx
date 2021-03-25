//stole this from ian lol
import { Heading,Grid, Box } from '@primer/components'
//TODO: Make this look decetn
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
        backgroundColor:'#242424',
        color:'white',
        width:'100%',
        paddingLeft: '2%',
        boxShadow: ' 0px 2px 10px #0000002a',
        borderRadius: '10px',
        position: 'relative',
        display: 'flex',
        overflow: 'hidden',
        margin:'5%',
        maxHeight: '200px'
      }}>
      <Grid gridTemplateColumns='repeat(1,auto)'gridGap='0' p='5%'>
      <Heading>{props.name}</Heading>
      
      <div className="description" style={{ display: 'block', marginTop: '10px' }} >{props.description}</div>
      </Grid>
      <Box width='100%' mr = '0' ml='3%'>
        <img  min-height='100%' max-width='200%' src={process.env.PUBLIC_URL+'/res/'+ props.image} alt={props.name} />
      </Box>
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