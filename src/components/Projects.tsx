import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "GSTEP Placement App",
      subtitle: "Digital Campus Placement System",
      description: "A comprehensive web application to digitalize GCT's placement process with seamless role-based access for Students, PRs, and Placement Officers. Features eligibility-based job applications, real-time drive tracking, and automated placement analytics.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      highlights: [
        "Role-based access control system",
        "Real-time drive tracking",
        "Automated placement analytics",
        "Improved transparency and coordination"
      ]
    },
    {
      title: "Table Assistant",
      subtitle: "Real-Time Food Ordering Application",
      description: "A fully responsive food ordering system with Firebase integration for real-time order tracking, user authentication, and secure data storage. Includes an engaging food quiz-based gamification module.",
      tech: ["HTML", "CSS", "JavaScript", "Firebase"],
      highlights: [
        "Fully responsive design",
        "Real-time order tracking",
        "User authentication",
        "Gamification with food quiz rewards"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-border/50 bg-gradient-card overflow-hidden"
              >
                <div className="h-2 bg-gradient-primary"></div>
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base font-medium text-secondary">
                    {project.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/80">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-foreground/70">
                          <span className="text-secondary">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
