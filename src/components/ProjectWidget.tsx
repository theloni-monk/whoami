//stole this from ian lol
//TODO: steal ian's css
interface ProjectProps {
    name: string;
    image?: string;
    isLogo?: boolean;
    description: string;
    href: string;
  }
const ProjectWidget = (props: ProjectProps) => {
    const makeImage = () => {
      if (props.image) {
        return (
          <div className="project-image">
            <img src={props.image} alt='name'></img>
            {!props.isLogo ? <div className="overlay"></div> : null}
          </div>
        );
      } else {
        return null;
      }
    }
    return (
      <div className="project" onClick={() => {
        window.location.href = props.href;
      }}>
        <h1>{props.name}</h1>
        {makeImage()}
        <span className="description">{props.description}</span>
      </div>
    );
  }
export default ProjectWidget;