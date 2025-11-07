import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Sparkles } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "MERN stack, HTML, CSS, JavaScript, PHP, MySQL"
    },
    {
      icon: Database,
      title: "Backend & Databases",
      description: "Node.js, MongoDB, Firebase, MySQL"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "React, Responsive Design, Real-time Applications"
    },
    {
      icon: Sparkles,
      title: "AI Integration",
      description: "AI tools for productivity and development"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full"></div>
          
          <Card className="mb-12 shadow-elegant border-border/50 bg-gradient-card">
            <CardContent className="p-8">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                I'm a Computer Science Engineering student at Government College of Technology, Coimbatore, 
                with a strong foundation in programming and web development. My journey in software development 
                has been driven by curiosity and a passion for creating solutions that make a real impact.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                With hands-on experience in MERN stack development and internships at The Yellow Network and 
                Thiranex, I've developed full-stack applications ranging from campus placement systems to 
                real-time food ordering platforms. I'm constantly learning new technologies and applying 
                AI-driven tools to enhance productivity and build innovative solutions.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground group-hover:scale-110 transition-transform">
                      <highlight.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
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

export default About;
