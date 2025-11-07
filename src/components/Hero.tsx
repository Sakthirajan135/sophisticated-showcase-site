import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code2, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
              Hi, I'm <span className="text-secondary">Sakthi D</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4">
              Software Developer & Full-Stack Engineer
            </p>
            <p className="text-lg text-primary-foreground/75 mb-8 max-w-2xl mx-auto">
              Computer Science student passionate about building impactful solutions with modern technologies.
              Currently exploring MERN stack and AI-driven development.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow transition-all hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm transition-all hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <a 
              href="https://github.com/Sakthirajan135" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-secondary transition-all hover:scale-110"
            >
              <Github className="w-8 h-8" />
            </a>
            <a 
              href="www.linkedin.com/in/sakthi-rajan-26945a258" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-secondary transition-all hover:scale-110"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a 
              href="https://leetcode.com/u/SakthiD" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-secondary transition-all hover:scale-110"
            >
              <Code2 className="w-8 h-8" />
            </a>
            <a 
              href="mailto:sakthirajan157@gmail.com"
              className="text-primary-foreground/80 hover:text-secondary transition-all hover:scale-110"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-secondary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
