import { ArrowRight, Github } from "lucide-react";
import React from "react";
const projects = [
  {
    title: "Project 1",
    description: "Description for Project 1",
    image: "./project1.png",
  },
  {
    title: "Project 2",
    description: "Description for Project 2",
    image: "./project2.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* bg glow  */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl " />
      <div className="absolute bottom-1/4 left-0 w-64 bg-highlight" />
      <div className="container mx-auto px-6 relative z-10">
        {/* section header  */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium uppercase  tracking-wider animate-fade-in">
            Featured work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100 text-secondary-foreground text-center">
            Projects that
            <span className="font-serif italic font-normal text-white">
              make an imapact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid  */}

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index}className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"  
            style={{animationDelay: `${(index + 1)*100 }ms` }}
            >
              <div className="relative overflow-hidden aspect-video">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                    <div  className="absolute inset-0 bg-gradient-to-t from-card visa-card/50 to-transparent opacity-60" />
                    {/* overlay links  */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"><ArrowRight className="w-5 h-5" /> </a>
                        
                        <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all" ><Github className="w-5 h-5" /> </a>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
