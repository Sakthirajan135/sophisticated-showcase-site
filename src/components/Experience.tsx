import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "The Yellow Network",
      role: "Software Developer Intern",
      location: "Coimbatore-13",
      duration: "May 2025 - October 2025",
      highlights: [
        "Researched 50+ real-world use cases across 5+ industries to identify enterprise challenges and analyze AI/startup-driven solutions",
        "Partnered with a cross-functional team of 5 to craft detailed user stories and flow diagrams for a full-stack placement management app",
        "Gained hands-on experience in MERN stack development and improved communication and collaboration skills"
      ],
      current: true
    },
    {
      company: "Thiranex",
      role: "Software Developer Intern",
      location: "Remote",
      duration: "June 2025 - August 2025",
      highlights: [
        "Developed a complete website using HTML, CSS, and JavaScript, focusing on responsive design and improved user experience",
        "Implemented backend functionalities with PHP and MySQL to manage dynamic content and user data",
        "Gained hands-on experience in full-stack web development, including real-time project handling and deployment support"
      ],
      current: true
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-300 border-border/50 bg-gradient-card"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
                    <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                      <Briefcase className="w-6 h-6 text-primary" />
                      {exp.role}
                    </CardTitle>
                    {exp.current && (
                      <Badge className="w-fit bg-secondary text-secondary-foreground">
                        Current
                      </Badge>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 text-muted-foreground">
                    <p className="text-xl font-semibold text-primary group-hover:text-secondary transition-colors">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-2 text-foreground/80">
                        <span className="text-secondary mt-1.5">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
