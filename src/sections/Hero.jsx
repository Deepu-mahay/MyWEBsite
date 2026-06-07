import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Git",
];

const Hero = () => {
  const socials = [];
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 ">
        <img
          src="/heroimage.jpg"
          alt="hero pic"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background " />
      </div>
      {/* Green dots  */}
      <div className=" absolute inset-0 overflow-hidden pointer-events-none ">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20b2a6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite `,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/* Content  */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column -Text Content  */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer | React Devloper
              </span>
            </div>

            {/* Headline  */}

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-200">
                Hi, I'm <span className="text-primary glow-text">Deepu</span>,
                <br />a passionate Software Engineer
                <br />
                <span className="font-serif italic font-normal font-white">
                  {" "}
                  specializing in React development.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-300">
                I create dynamic and responsive web applications that provide
                seamless user experiences. With a strong foundation in
                JavaScript and React, I am dedicated to building efficient and
                scalable solutions that meet the needs of users and businesses
                alike.
              </p>
            </div>
            {/* CTAs  */}

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton />
            </div>
            <div>
              {/* social media links */}
              <div className="flex items-center gap-4 mt-6 animate-fade-in animation-delay-400">
                <span className="text-sm text-muted-foreground">Follow:</span>
                {[
                  { icon: FaGithub, href: "#" },
                  { icon: FaLinkedin, href: "#" },
                  { icon: FaXTwitter, href: "#" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    {<social.icon className="w-5 h-5" />}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Right Column - profile image  */}
          <div className="relative animate-fade-in animate-delay-300">
            {/* Profile image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-be from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 border-glow">
                <img
                  src="/Profile-photo.png"
                  alt="Dpinder Mahay"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />
                {/* floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats badge */}
                <div className="font-sm absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-xs text-muted text-muted-foreground">
                    Years Experience
                  </div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Section  */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I Work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div className="flex-shrink-0 px-8 py-4 " key={idx}>
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in
      animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-wider">scroll</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
