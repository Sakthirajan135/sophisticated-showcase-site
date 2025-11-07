import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const certifications = [
    "HTML, CSS, Javascript - Infosys Springboard",
    "Full Stack Development - Infosys Springboard"
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12 rounded-full"></div>
          
          <Card className="mb-8 shadow-elegant border-border/50 bg-gradient-card group hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-gradient-primary text-primary-foreground">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl text-foreground">
                  Government College of Technology, Coimbatore
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <p className="text-lg font-semibold text-primary">
                  B.E - Computer Science and Engineering
                </p>
                <Badge className="w-fit bg-secondary text-secondary-foreground">
                  2022 - Present
                </Badge>
              </div>
              <p className="text-muted-foreground">
                Current CGPA: <span className="font-semibold text-foreground">7.74 / 10.0</span>
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant border-border/50 bg-gradient-card group hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-primary text-primary-foreground">
                  <Award className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl text-foreground">
                  Certifications
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex gap-2 text-foreground/80">
                    <span className="text-secondary mt-1">▹</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="mt-8 shadow-elegant border-border/50 bg-gradient-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Activities & Hobbies
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Leadership:</h4>
                  <p className="text-foreground/80">
                    Placement Representative - Managed recruitment drives in coordination with the placement cell
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Interests:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Problem Solving Games", "Cooking Experiments", "Carrom"].map((hobby, idx) => (
                      <Badge 
                        key={idx}
                        variant="outline"
                        className="border-primary/30 text-foreground"
                      >
                        {hobby}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
