import scholarship from "../assets/images/scholarship.png";
import { projectsData } from "../data";

function Projects() {
  return (
    <>
    
      <section id="about" className="container mx-auto">
        <div className="container">
          <div className="about-text py-4  shadow-[0_0_5px_lightgray]">
            <h2 className="text-center text-3xl font-bold  text-[#f39033] ">
              MY PROJECTS
            </h2>
            <p className="text-center">
              I have a couple of projects that i have worked on which gave me a
              sense of<br/> working on many Projects in pursuing my goal as a
              Software engineer
            </p>
          </div>

          <div className="grid grid-cols-4 gap-10">
          {projectsData.map((item) => {
        if (item.featured) {
          return (
            <div className="  shadow-[0_0_5px_lightgray]">
              <div className=" h-[300px]">
                <img
                  className=" h-[100%] w-[100%] object-cover "
                  src={`/src/assets/images/${item.projectImage}`}
                />
              </div>
              <div className=" flex justify-between items-center">
                <div className="text-center mx-auto">
                  <p className="text-[#3871C1]">{item.ProjectName}</p>
                  <p>{item.projectDescription}</p>
                  <p className="text-[#f39033]">{item.projectTech}</p>

                </div>
              </div>
            </div>
          );
        }
      })}
      
      </div>
        </div>
      </section>
    </>
  );
}
export default Projects;
