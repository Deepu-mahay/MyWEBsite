import React from "react";
const projects = [
  {
    title: "Project 1",
    description: "Description for Project 1",
    image: "https://via.placeholder.com/300",
  },
];

const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* bg glow  */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl " />
            <div className="absolute bottom-1/4 left-0 w-64 bg-highlight" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
                <div>
                    {
                        projects.map((project, index) => (
                            <div onMouseOver={(()=>(<div>
                                <h3 className=" w-full rounded-lg h-14 text-2xl flex glass items-center justify-center">{project.title}</h3> c
                            </div>)) } key={index}>
                                <h3 className=" w-full rounded-lg h-14 text-2xl flex glass items-center justify-center">{project.title}</h3>
                                <p>{project.description}</p>
                                <img src="@/assets/hero.png" alt={project.title} className="w-full h-auto rounded-lg mt-4" />

                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Projects;
