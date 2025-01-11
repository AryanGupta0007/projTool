import {ProjectCard} from '../components/ProjectCard.js'
export const Projects = () => {
    return (
        <>
            <div className={"flex"} style={{
                position: "relative",
                top: "12.7vh",
                left: "16.3vw",
                backgroundColor: "black",
                width: "84vw",
                height: "87vh"
            }}>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </>
    )
}