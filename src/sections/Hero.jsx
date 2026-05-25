import {Button} from "@/components/Button";
import { ArrowRight, Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
const Hero = () => {
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
                    <br/>a passionate Software Engineer
                    <br/><span className="font-serif italic font-normal font-white">  specializing in React development.</span> 
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-300">
                  I create dynamic and responsive web applications that provide seamless user experiences. With a strong foundation in JavaScript and React, I am dedicated to building efficient and scalable solutions that meet the needs of users and businesses alike.
                </p>
            </div>
            {/* CTAs  */}

            <div>
              <Button size = "lg">Contact Me  <ArrowRight className="w-5 h-5"/></Button>
             <AnimatedBorderButton children="Download_CV" />
            </div>
          </div>
          {/* Right Column - profile image  */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
