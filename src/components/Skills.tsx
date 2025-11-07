import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "HTML5", "CSS3", "JavaScript", "Responsive Design", "Tailwind CSS"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "PHP", "RESTful APIs", "Firebase"]
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL", "Firebase Firestore"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "VS Code", "Postman", "AI Tools", "Agile Methodology"]
    },
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript", "PHP", "SQL", "Tamil", "English"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-border/50 bg-gradient-card"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary group-hover:text-secondary transition-colors">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge 
                        key={idx}
                        variant="outline"
                        className="border-primary/30 text-foreground hover:bg-primary/10 transition-colors"
                      >
                        {skill}
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

export default Skills;
