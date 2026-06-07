import { Code2, Lightbulb, Rocket, User } from "lucide-react";

const Highlights = [
  {
    icon: Code2,
    title: "clean code",
    description:
      "I write clean and maintainable code that follows industry best practices and coding standards. I prioritize readability, modularity, and scalability in my codebase, ensuring that it is easy to understand and maintain for myself and other developers who may work on the project in the future.",
  },
  {
    icon: Rocket,
    title: "fast performance",
    description:
      "I optimize my code for performance, ensuring that applications load quickly and respond efficiently to user interactions. I use various techniques such as lazy loading, caching, and code splitting to improve the overall user experience.",
  },
  {
    icon: User,
    title: "user-centric design",
    description:
      "I focus on creating applications that provide an excellent user experience, ensuring that they are intuitive, accessible, and meet the needs of their target audience.",
  },
  {
    icon: Lightbulb,
    title: "innovative solutions",
    description:
      "I strive to create innovative and creative solutions that not only meet the requirements but also provide unique value to users.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left column  */}
          <div className="space-y-8 ">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <div className="animate-fade-in animation-delay-100 space-y-6">
              <h2 className="text-4xl md:text-5xl  text-secondary-foreground  font-bold leading-tight animate-fade-in animate-delay-100">
                Building the future,
                <span className="italic font-serif font-normal text-white ">
                  {" "}
                  one component at a time.
                </span>
              </h2>
              <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                <p>
                  I am a passionate frontend developer with a strong focus on
                  creating exceptional user experiences. With expertise in
                  React, Next.js, and Tailwind CSS, I specialize in building
                  responsive and visually appealing web applications. I am
                  dedicated to writing clean and maintainable code, optimizing
                  performance, and delivering innovative solutions that meet the
                  needs of users. My goal is to create seamless and engaging
                  digital experiences that leave a lasting impact.
                </p>
                <p>
                  I am a passionate frontend developer with a strong focus on
                  creating exceptional user experiences. With expertise in
                  React, Next.js, and Tailwind CSS, I specialize in building
                  responsive and visually appealing web applications. I am
                  dedicated to writing clean and maintainable code, optimizing
                  performance, and delivering innovative solutions that meet the
                  needs of users. My goal is to create seamless and engaging
                  digital experiences that leave a lasting impact.
                </p>
                <p>
                  {" "}
                  I am a passionate frontend developer with a strong focus on
                  creating exceptional user experiences. With expertise in
                  React, Next.js, and Tailwind CSS, I specialize in building
                  responsive and visually appealing web applications. I am
                  dedicated to writing clean and maintainable code, optimizing
                  performance, and delivering innovative solutions that meet the
                  needs of users. My goal is to create seamless and engaging
                  digital experiences that leave a lasting impact.
                </p>
              </div>
              <div className="glass p-6 rounded-2xl border-glow animate-fade-in animation-delay-300 my-6">
                <p className="text-lg font-medium italic text-foreground">
                  "My mission is to create seamless and engaging digital
                  experiences that leave a lasting impact. I am dedicated to
                  writing clean and maintainable code, optimizing performance,
                  and delivering innovative solutions that meet the needs of
                  users.
                </p>
              </div>
            </div>
          </div>
        <div>
          {/* right column  */}
          <div className="grid sm:grid-cols-2 gap-6">
            {Highlights.map((item, idx) => (
                <div
                key={idx}
                className="animate-fade-in animation-delay-100 p-6 glass rounded-2xl group "
                style={{ animationDelay: `${(idx + 1) * 1000}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
                </div>
    </section>
  );
};

export default About;
